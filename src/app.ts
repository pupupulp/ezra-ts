import { dependencies } from './configs/dependency-injector';

dependencies.DatabaseService.initialize(dependencies)
    .then(() => {
        dependencies.ApplicationService.initialize(dependencies)
    })
    .catch((err: Error) => {
        console.error(err);
    });