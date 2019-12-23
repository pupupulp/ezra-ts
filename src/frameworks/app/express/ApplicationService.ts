import { IApplicationService } from '../../../interfaces/services/IApplicationService';
import { IDependencyInjector } from '../../../interfaces/IDependencyInjector';

import { GithubRouter } from './routes/GithubRouter';

import express from 'express';
import http from 'http';

export class ApplicationService implements IApplicationService {
    private app: any;
    private version: string;
    private port: number;

    constructor() {
        this.app = express();
        this.version = '/v1';
        this.port = 9003;
    }

    initialize(dependencies: IDependencyInjector): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.app.use(this.version, new GithubRouter(dependencies).initialize());

                const server: any = http.createServer(this.app);
                server.listen(this.port);

                server.on('error', (error: any) => {
                    if (error.syscall !== 'listen') { throw error; }
                
                    switch (error.code) {
                    case 'EACCES':
                        console.error('Port ' + this.port + ' requires elevated privileges');
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        console.error('Port ' + this.port + ' is already in use');
                        process.exit(1);
                        break;
                    default:
                        throw error;
                    }
                });
                
                server.on('listening', () => {
                    const address: any = server.address();
                    console.log('Listening on port ' + address.port);
                });

                resolve();
            } catch (err) {
                reject(err);
            }
        });
        
    }
 }