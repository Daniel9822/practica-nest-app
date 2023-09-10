import { Injectable, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { NOT_ROLE } from "src/decorator/notRole.decorator";
import { ROLES_KEY } from "src/decorator/roles.decorator";
import { Role } from "src/enums/role.enum";

@Injectable()
export class RoleGuard {
  constructor(private reflector: Reflector) {}

  canActivate(contex: ExecutionContext): boolean {
    const notRole = this.reflector.getAllAndOverride<boolean>(NOT_ROLE, [
      contex.getHandler(),
      contex.getClass(),
    ]);

    if (notRole) {
      return true;
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      contex.getHandler(),
      contex.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = contex.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}
