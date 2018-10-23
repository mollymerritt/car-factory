import { User } from '../models/user.model';

export class CarRequest {
    id: number;
    user: User;
    dateRequested: Date;
}
