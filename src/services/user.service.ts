import { User } from "../entities/user.entity";
import { UserMapper } from "../mappers/user.mapper";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
   constructor(
    private readonly userRepository: UserRepository,
    private readonly userMapper: UserMapper
    ) {}

   findById() {
    const user = new User();
    const userDto = this.userMapper.convertToDto(user);
   }

}