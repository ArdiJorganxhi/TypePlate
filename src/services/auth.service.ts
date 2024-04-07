import { Register } from "../types/requests/user.register.type";
import { UserBuilder } from "../entities/builders/user.builder";
import bcrypt, { hash } from 'bcryptjs';
import { Login } from "../types/requests/user.login.type";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import { IdentityUser } from "../types/auth/identity.user";
import { generateToken } from "./token.service";



const userRepository = AppDataSource.getRepository(User);

export const registerService = async (registerRequest: Register) => {
    const hashedPassword = await bcrypt.hash(registerRequest.password, 10);
    const user = new UserBuilder()
       .name(registerRequest.name)
       .surname(registerRequest.surname)
       .email(registerRequest.email)
       .password(hashedPassword)
       .build()

    await userRepository.save(user)
}

export const loginService = async (loginRequest: Login): Promise<String> => {
     const user = await userRepository.findOne({where: {email: loginRequest.email}});
     if(!user) {
        throw new Error("User not found!")
     }
    const comparePasswords = bcrypt.hash(loginRequest.password, user.password);

    if(!comparePasswords) {
        throw new Error("Passwords do not match!");
    }

    const identityUser: IdentityUser = {
        id: user.id,
        email: user.email
    }
    return generateToken(identityUser);
}
