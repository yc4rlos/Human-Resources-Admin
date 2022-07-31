import { GqlAuthGuard } from './../auth/gql-auth.guard';
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/inputs/create-user.input";
import { DeleteUserInput } from "./dto/inputs/delete-user-input";
import { UpdateUserInput } from "./dto/inputs/update-user.input";
import { UserDTO } from "./dto/user.dto";
import { UsersService } from "./users.service";
import { UserListDTO } from './dto/userList.dto';

@Resolver(() => UserDTO)
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService
  ) { }

  @Query(() => UserDTO, { name: 'user', nullable: true })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args() getUserArgs: GetUserArgs): Promise<UserDTO> {
    return await this.usersService.findOne(getUserArgs);
  }

  @Query(() => UserListDTO, { name: 'users', nullable: true })
  // @UseGuards(GqlAuthGuard)
  async findUsers(@Args() getUsersArgs?: GetUsersArgs): Promise<UserListDTO> {
    return await this.usersService.findAll(getUsersArgs);
  }

  @Mutation(() => UserDTO)
  @UseGuards(GqlAuthGuard)
  async createUser(@Args('createUserData') createUserInput: CreateUserInput): Promise<UserDTO> {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => UserDTO)
  @UseGuards(GqlAuthGuard)
  async updateUser(@Args('updateUserData') updateUserInput: UpdateUserInput): Promise<UserDTO> {
    return await this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserDTO)
  @UseGuards(GqlAuthGuard)
  async deleteUser(@Args('deleteUserData') deleteUserInput: DeleteUserInput): Promise<any> {
    return await this.usersService.remove(deleteUserInput.id);
  }

}