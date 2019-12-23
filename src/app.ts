import 'reflect-metadata';
import { container } from './di/container';
import { _ } from './di/inject';
import { IApplicationService } from './interfaces/services/IApplicationService';
import { IDatabaseService } from './interfaces/services/IDatabaseService';

container.get<IDatabaseService>(_.DatabaseService).initialize()
    .then(() => {
        container.get<IApplicationService>(_.ApplicationService).initialize()
    })
    .catch((err: Error) => {
        console.error(err);
    });