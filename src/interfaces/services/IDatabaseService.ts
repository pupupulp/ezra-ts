import { IUserRepository } from '../IUserRepository';

export interface IDatabaseService {
    initialize(): Promise<void>;
    getUserRepository(): IUserRepository;
}