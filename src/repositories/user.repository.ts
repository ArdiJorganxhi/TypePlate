import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../config/data-source";

export class UserRepository {
    private repository = AppDataSource.getRepository(User)

    findAll() {
        return this.repository.find()
    }

    findById(id: number) {
        return this.repository.findOne({
            where: {
                id: id
            }
        })
    }
    
    save(user: User) {
        return this.repository.save(user)
    }
}
