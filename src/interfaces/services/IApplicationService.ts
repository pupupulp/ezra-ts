import { IDependencyInjector } from '../IDependencyInjector';

export interface IApplicationService {
    initialize(dependencies: IDependencyInjector): Promise<void>;
}