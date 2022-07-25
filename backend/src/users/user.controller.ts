import { Controller, Get } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController {
    constructor(private usersService: UsersService) { }

    @Get()
    async findAll(): Promise<UserDTO[]> {
        return await this.usersService.findAll();
    }
}