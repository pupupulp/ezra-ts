import { NextFunction, Request, Response } from 'express';
import { User } from '../../../../entities/User';
import { IUserRepository } from '../../../../interfaces/IUserRepository';
import { UserUseCase } from '../../../../use-cases/UserUseCase';

export class UserController {
    private userRepository: IUserRepository;
    private userAction: UserUseCase;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
        this.userAction = new UserUseCase(this.userRepository);
    }

    getUserByUserName = (req: Request, res: Response, next: NextFunction) => {
        this.userAction.getByUsername(req.params.username)
            .then((user: User) => {
                res.json(user);
            })
            .catch((err: Error) => {
                next(err);
            });
    }

    getAll = (req: Request, res: Response, next: NextFunction) => {
        this.userAction.getAll()
            .then((users: Array<User>) => {
                res.json(users);
            })
            .catch((err: Error) => {
                next(err);
            });
    }
}