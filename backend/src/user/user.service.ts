import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import { Validations } from 'src/shared/validations';
import { ObjectSize, SortingType, ValidType } from '../shared/enums';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUser } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserService } from './interfaces/user.interface.service';
import { DashFilterUser } from './dto/dash-filter.dto';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAllDash(filter: DashFilterUser) {
    const { user_status } = filter;
    const userBuilder = this.userRepository.createQueryBuilder('user');

    if (user_status) {
      userBuilder.andWhere('user.user_status = :user_status', { user_status });
    }

    return await userBuilder.getMany();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.user_email = :user_email', { user_email: email })
      .getOne();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { user_name } = createUserDto;

    if (user_name.trim() == '' || user_name == undefined)
      throw new BadRequestException(`O nome não pode estar vazio`);

    const user = this.userRepository.create(createUserDto);
    user.user_name = user_name.toUpperCase().trim();

    const emailIsRegistered = await this.findByEmail(user.user_email);
    if (emailIsRegistered) throw new BadRequestException(`Email já cadastrado`);

    user.user_status = true;
    let userSaved = await this.userRepository.save(user);
    return userSaved;
  }

  async findAll(filter: FilterUser): Promise<Pagination<User>> {
    const { search_name, sort, orderBy, user_status } = filter;
    const userBuilder = this.userRepository.createQueryBuilder('user');

    if (user_status) {
      userBuilder.andWhere('user.user_status = :user_status', { user_status });
    }

    if (search_name) {
      userBuilder.andWhere(
        new Brackets((queryBuilderOne) => {
          queryBuilderOne
            .where('user.user_name like :user_name', {
              user_name: `%${search_name}%`,
            })
            .orWhere('user.user_email like :user_email', {
              user_email: `%${search_name}%`,
            });
        }),
      );
    }

    if (orderBy == SortingType.NAME)
      userBuilder.orderBy('user.user_name', `${sort === 'DESC' ? 'DESC' : 'ASC'}`);

    filter.limit = filter.limit ?? (await userBuilder.getMany()).length;
    return paginate<User>(userBuilder, filter);
  }

  async findByEmailAndId(user_id: number, user_email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.user_id != :user_id', { user_id })
      .andWhere('user.user_email like :user_email', {
        user_email: `%${user_email}%`,
      })
      .getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);

    if (id > ObjectSize.INTEGER) {
      throw new BadRequestException(`Número de id inválido`);
    }

    const { user_name, user_email } = updateUserDto;

    if (user_name.trim() == '' || user_name == undefined)
      throw new BadRequestException(`O nome não pode estar vazio`);

    const isRegistered = await this.findById(id);
    if (!isRegistered) throw new NotFoundException(`Usuário não existe`);

    const user = await this.userRepository.preload({
      user_id: id,
      ...updateUserDto,
    });

    if (user_name) {
      user.user_name = user_name.toUpperCase().trim();
    }

    if (user.user_email) {
      if (isRegistered.user_email != user_email) {
        const isRegisteredName = await this.findByEmailAndId(user.user_id, user_email);
        if (isRegisteredName) {
          throw new BadRequestException('Email já cadastrado');
        }
      }
    }

    await this.userRepository.save(user);
    return this.findById(id);
  }

  async findById(id: number): Promise<User> {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);
    if (id > ObjectSize.INTEGER) {
      throw new BadRequestException(`Número de id inválido`);
    }

    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.user_id = :user_id', { user_id: id })
      .getOne();
  }

  async changeStatus(user_id: number) {
    Validations.getInstance().validateWithRegex(`${user_id}`, ValidType.IS_NUMBER);

    if (user_id > ObjectSize.INTEGER) {
      throw new BadRequestException(`Número de id inválido`);
    }

    const userSaved = await this.findById(user_id);

    if (!userSaved) {
      throw new BadRequestException(`Usuário não existe`);
    }

    const { user_status: status } = userSaved;

    userSaved.user_status = status === true ? false : true;

    await this.userRepository.save(userSaved);

    const user = await this.findById(userSaved.user_id);

    if (user.user_status === true) {
      return {
        message: 'Usuário Ativado com Sucesso!',
        item: user,
      };
    } else {
      return {
        message: 'Usuário Desativado com Sucesso!',
        item: user,
      };
    }
  }
}
