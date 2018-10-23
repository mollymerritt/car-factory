import { User } from '../models/user.model';

export class CarRequest {
    id: string;
    user: User;
    dateRequested: Date;
}
