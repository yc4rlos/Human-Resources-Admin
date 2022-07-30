import { AuthService } from './auth.service';
import { Controller, Get, Post, UseGuards, Request, Body} from '@nestjs/common';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post('login')
    login(@Body() user: {email: string, password: string}) {
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    test(){
        return "All Ok!"
    }
}
