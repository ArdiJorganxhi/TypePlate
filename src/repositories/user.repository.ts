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

    findByEmail(email: string) {
        return this.repository.findOne({
            where: {
                email: email
            }
        })
    }
    
    save(user: User) {
        return this.repository.save(user)
    }
}
