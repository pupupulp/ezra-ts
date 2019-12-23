import { User } from '../entities/User';

export interface IUserRepository {
    add(user: User): Promise<User>;
    getByUsername(username: string): Promise<User>;
    getAll(): Promise<Array<User>>;
}