import { IDatabaseService } from '../../../interfaces/services/IDatabaseService';
import { IDependencyInjector } from '../../../interfaces/IDependencyInjector';
import { IApiAdapterService } from '../../../interfaces/services/IApiAdapterService';
import { IUserRepository } from '../../../interfaces/IUserRepository';

import { User } from '../../../entities/User';
import { GithubUserRepository } from './GithubUserRepository';

export class DatabaseService implements IDatabaseService {
    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new GithubUserRepository();
    }

    initialize(dependencies: IDependencyInjector): Promise<void> {

        return new Promise((resolve, reject) => {
            try {
                this.seed(dependencies.ApiAdapterService)
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    }

    seed(apiAdapter: IApiAdapterService) {
        apiAdapter.initialize('https://api.github.com')
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