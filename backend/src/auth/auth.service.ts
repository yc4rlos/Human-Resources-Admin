import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(data: { email: string, password: string }) {
        const user = await this.usersService.findOne({ email: data.email }, true);
        if (user && user.password == data.password) {
            delete user.password;
            return user;
        } else {
            return null
        }
    }

    async login(user: { email: string, password: string }) {
        const payload = await this.validateUser(user);

        if (payload) {
            return {
                access_token: this.jwtService.sign({ ...payload })
            }
        } else {
            throw new UnauthorizedException();
        }

    }
}
