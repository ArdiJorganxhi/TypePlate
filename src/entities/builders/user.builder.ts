import { User } from "../user.entity";

export class UserBuilder {
    private user: User

    constructor() {
        this.user = new User();
    }

    name(name: string): this {
        this.user.name = name;
        return this;
    }

    surname(surname: string): this {
        this.user.surname = surname;
        return this;
    }

    email(email: string): this {
        this.user.email = email;
        return this;
    }

    password(password: string): this {
        this.user.password = password;
        return this;
    }

    build() {
        return this.user
    }
}