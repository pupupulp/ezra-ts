import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { _ } from '../../../di/inject';
import { User } from '../../../entities/User';
import { IUserRepository } from '../../../interfaces/IUserRepository';
import { IApiAdapterService } from '../../../interfaces/services/IApiAdapterService';
import { IDatabaseService } from '../../../interfaces/services/IDatabaseService';
import { GithubUserRepository } from './GithubUserRepository';

@injectable()
export class DatabaseService implements IDatabaseService {
    private userRepository: IUserRepository;
    private apiAdapter: IApiAdapterService;


    constructor(@inject(_.ApiAdapterService) apiAdapter: IApiAdapterService) {
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