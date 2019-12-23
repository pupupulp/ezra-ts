// import { dependencies } from './configs/dependency-injector';

// dependencies.DatabaseService.initialize(dependencies)
//     .then(() => {
//         dependencies.ApplicationService.initialize(dependencies)
//     })
//     .catch((err: Error) => {
//         console.error(err);
//     });


import { container } from './configs/container';
import { TYPES } from './configs/types';
import { IDatabaseService } from './interfaces/services/IDatabaseService';
import { IApplicationService } from './interfaces/services/IApplicationService';

import 'reflect-metadata';

container.get<IDatabaseService>(TYPES.DatabaseService).initialize()
    .then(() => {
        container.get<IApplicationService>(TYPES.ApplicationService).initialize()
    })
    .catch((err: Error) => {
        console.error(err);
    });