import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@Controller('api/user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    @Roles('admin')
    @UseGuards(JwtAuthGuard, RolesGuard)
    getAllUser() {
        return this.userService.findAll()
    }

    @Get(':id')
    @Roles('admin', 'user')
    @UseGuards(JwtAuthGuard, RolesGuard)
    get(@Param() params) {
        return this.userService.findOneByID(params.id);
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Put()
    test(){
        return "tesst"
    }
}
