import { User } from '../entities/User';
import { IUserRepository } from '../interfaces/IUserRepository';

export class UserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    getByUsername(username: string): Promise<User> {
        return new Promise((resolve, reject) => {
            this.userRepository.getByUsername(username)
                .then((response: User) => {
                    resolve(response);
                })
                .catch((err: Error) => {
                    reject(err);
                });
        });
    }

    getAll(): Promise<Array<User>> {
        return new Promise((resolve, reject) => {
            this.userRepository.getAll()
                .then((response: Array<User>) => {
                    resolve(response);
                })
                .catch((err: Error) => {
                    reject(err);
                });
        });
    }
}