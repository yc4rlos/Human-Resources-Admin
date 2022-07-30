import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { UpdateUserInput } from './dto/inputs/update-user.input';
import { UserDTO } from './dto/user.dto';
import { UserListDTO } from './dto/userList.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private usersRepository: Repository<UserDTO>
  ) { }

  create(createUserInput: CreateUserInput): Promise<UserDTO> {
    return this.usersRepository.save(createUserInput);
  }

  async findAll(args?: GetUsersArgs): Promise<UserListDTO> {
    let query = "";
    const keys = Object.keys(args);
    const values = Object.values(args);
    let counter = 1;

    keys.forEach((key, index) => {

      if (key != 'take' && key != 'count' && key != 'page') {
        if (values[index]) {
          if (counter != 1) {
            query += " and "
          }
          query += `LOWER(user.${key}) like '%${values[index]}%'`
          counter++;
        }
      }
    });

    const skipCount = args.page > 1 ? ((args.page -1) * args.take) : 0;

    const users = await this.usersRepository.createQueryBuilder("user")
      .select().where(query).skip(skipCount).take(args?.take).getMany();

    users.map(user => {
      delete user.password;
    });

    const count = await this.usersRepository.createQueryBuilder("users")
      .select().getCount();

    const totalPages = args.take ? Math.round(count / Number(args?.take)) : 0;

    return { users, count, totalPages, currentPage: args.page || 1 };
  }

  async findOne(args: GetUserArgs, keepPassword = false): Promise<UserDTO> {
    const user = await this.usersRepository.findOne({ where: { ...args } });

    if (!keepPassword) delete user.password;
    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<UserDTO> {
    await this.usersRepository.update(id, updateUserInput);

    const user = await this.usersRepository.findOne({ where: { id } });
    delete user.password;
    return user;
  }

  remove(id: number) {
    return this.usersRepository.softDelete(id);
  }
}
