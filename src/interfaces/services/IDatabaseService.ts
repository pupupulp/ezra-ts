import { IDependencyInjector } from '../IDependencyInjector';
import { IUserRepository } from '../IUserRepository';

export interface IDatabaseService {
    initialize(dependencies: IDependencyInjector): Promise<void>;
    getUserRepository(): IUserRepository;
}