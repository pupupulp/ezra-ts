import { IApplicationService } from '../../../interfaces/services/IApplicationService';

import { GithubRouter } from './routes/GithubRouter';
import { TYPES } from '../../../configs/types';

import express from 'express';
import http from 'http';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { IDatabaseService } from '../../../interfaces/services/IDatabaseService';

@injectable()
export class ApplicationService implements IApplicationService {
    private app: any;
    private version: string;
    private port: number;
    private databaseService: IDatabaseService;

    constructor(@inject(TYPES.DatabaseService) databaseService: IDatabaseService) {
        this.app = express();
        this.version = '/v1';
        this.port = 9003;
        this.databaseService = databaseService;
    }

    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.app.use(this.version, new GithubRouter(this.databaseService).initialize());

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