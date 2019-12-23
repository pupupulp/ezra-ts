import { IDatabaseService } from '../../../interfaces/services/IDatabaseService';
import { IApiAdapterService } from '../../../interfaces/services/IApiAdapterService';
import { IUserRepository } from '../../../interfaces/IUserRepository';

import { User } from '../../../entities/User';
import { GithubUserRepository } from './GithubUserRepository';
import { TYPES } from '../../../configs/types';

import 'reflect-metadata';
import { injectable, inject } from 'inversify';

@injectable()
export class DatabaseService implements IDatabaseService {
    private userRepository: IUserRepository;
    private apiAdapter: IApiAdapterService;


    constructor(@inject(TYPES.ApiAdapterService) apiAdapter: IApiAdapterService) {
        this.userRepository = new GithubUserRepository();
        this.apiAdapter = apiAdapter;
    }

    initialize(): Promise<void> {

        return new Promise((resolve, reject) => {
            try {
                this.seed()
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    }

    seed() {
        this.apiAdapter.initialize('https://api.github.com')
            .then(async adapter => {
                await adapter.get('/users')
                    .then((resp: any) => {
                        const githubUsers: Array<object> = resp.data;

                        githubUsers.map((user: any) => {
                            this.userRepository.add(new User({
                                id: user.id,
                                username: user.login,
                                url: user.html_url,
                                details: {
                                    ...user
                                }
                            }));
                        });
                    });
            });
    }

    getUserRepository(): IUserRepository {
        return this.userRepository
    }
}