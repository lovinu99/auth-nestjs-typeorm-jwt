import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log(roles)
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log(user)
        if (roles.includes(user.role))
            return true;
        else
            return false;
    }
}