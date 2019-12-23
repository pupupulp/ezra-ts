import { User } from '../../../entities/User';
import { IUserRepository } from '../../../interfaces/IUserRepository';

export class GithubUserRepository implements IUserRepository {
    private users: Array<User>;

    constructor() {
        this.users = [];
    }

    add(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                this.users.push(user);
                resolve(user);
            } catch(err) {
                reject(err);
            }
        });
    }

    getByUsername(username: string): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                const user: User|undefined = this.users.find((u:User) => u.getUsername() === username);
                resolve(user);
            } catch(err) {
                reject(err);
            }
        });
    }

    getAll(): Promise<Array<User>> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.users);
            } catch(err) {
                reject(err);
            }
        })
    }
}