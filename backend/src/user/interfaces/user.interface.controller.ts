import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateUserDto } from '../dto/create-user.dto';
import { FilterUser } from '../dto/filter-user.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserController {
  create(createUserDto: CreateUserDto): Promise<User>;
  findAll(filter: FilterUser): Promise<Pagination<User>>;
  findOne(id: number): Promise<User>;
  update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
}
