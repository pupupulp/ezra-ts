import { IDatabaseService } from './services/IDatabaseService';
import { IApplicationService } from './services/IApplicationService';
import { IApiAdapterService } from './services/IApiAdapterService';

export interface IDependencyInjector {
    DatabaseService: IDatabaseService,
    ApplicationService: IApplicationService,
    ApiAdapterService: IApiAdapterService,
}