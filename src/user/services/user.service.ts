import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) { }
    async findAll(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async findOneByID(id: number): Promise<User> {
        return await this.userRepo.findOne(id)
    }

    async findOneByName(name: string): Promise<User> {
        return await this.userRepo.findOne({ username: name })
    }

    async create(user: CreateUserDto): Promise<User> {
        const hashPassword = bcrypt.hashSync(user.password, parseInt(process.env.SALTROUNDS))
        user.password = hashPassword

        return await this.userRepo.save(user)
    }
}
