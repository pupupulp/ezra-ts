import express from 'express';
import http from 'http';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { _ } from '../../../di/inject';
import { IApplicationService } from '../../../interfaces/services/IApplicationService';
import { IDatabaseService } from '../../../interfaces/services/IDatabaseService';
import { GithubRouter } from './routes/GithubRouter';

@injectable()
export class ApplicationService implements IApplicationService {
    private databaseService: IDatabaseService;
    private app: any;
    private version: string;
    private port: number;

    constructor(@inject(_.DatabaseService) databaseService: IDatabaseService) {
        this.databaseService = databaseService;
        this.app = express();
        this.version = '/v1';
        this.port = 9003;
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