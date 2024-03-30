import { User } from "../entities/user.entity";
import { UserDto } from "../types/dtos/user.dto.type";

export class UserMapper {
   
   convertToDto(user: User): UserDto {
      const userDto: UserDto = {
         id: user.id,
         name: user.name,
         surname: user.surname,
         email: user.email
      }
      return userDto;
   }
}