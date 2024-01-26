import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // El objeto context proporciona información
    // sobre la solicitud entrante y el entorno de ejecución.
    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);

    //implementar tu lógica de autenticación o autorización.
    // Por ejemplo, verificar si el usuario está autenticado.

    // Si la validación es exitosa, devuelve true, permitiendo el acceso.
    // Si la validación falla, devuelve false, denegando el acceso.

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
