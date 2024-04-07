import { EntitySubscriberInterface, EventSubscriber, InsertEvent, SoftRemoveEvent } from "typeorm";
import { User } from "../entities/user.entity";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo() {
        return User;
    }

    beforeInsert(event: InsertEvent<User>) {
        event.entity.created_at = new Date()
        event.entity.updated_at = new Date()
    }

    beforeSoftRemove(event: SoftRemoveEvent<User>) {
        event.entity!.isActive = false;
    }
}