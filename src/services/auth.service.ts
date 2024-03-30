import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { Register } from "../types/requests/user.register.type";
import { UserBuilder } from "../entities/builders/user.builder";

export class AuthService {

private userRepository = new UserRepository()

async register(registerRequest: Register) {
    const user = new UserBuilder()
       .name(registerRequest.name)
       .surname(registerRequest.surname)
       .email(registerRequest.email)
       .password(registerRequest.password)
       .build()

    await this.userRepository.save(user)
}
}