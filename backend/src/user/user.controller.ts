import { Controller, Get, Post, Body, Param, UseGuards, Put, Query, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUser } from './dto/filter-user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { IUserController } from './interfaces/user.interface.controller';
import { DashFilterUser } from './dto/dash-filter.dto';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController implements IUserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Create user',
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: 'List all users with pagination',
  })
  @Get()
  async findAll(@Query() filter: FilterUser): Promise<Pagination<User>> {
    return await this.userService.findAll(filter);
  }

  @ApiOperation({
    summary: 'List all users with status filter',
  })
  @Get('/dashboard')
  async findAllDash(@Query() filter: DashFilterUser) {
    return await this.userService.findAllDash(filter);
  }

  @ApiOperation({
    summary: 'List user by ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findById(id);
  }

  @ApiOperation({
    summary: 'Update user by ID',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({
    summary: 'Change user status',
  })
  @Patch('/status/:id')
  async changeStatus(@Param('id') id: string) {
    return this.userService.changeStatus(+id);
  }
}
