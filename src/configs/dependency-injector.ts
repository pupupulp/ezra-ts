import { IDependencyInjector } from '../interfaces/IDependencyInjector';

import { DatabaseService } from '../frameworks/databases/github/DatabaseService';
import { ApplicationService } from '../frameworks/app/express/ApplicationService';
import { ApiAdapterService } from '../frameworks/utils/ApiAdapterService';

const dependencies: IDependencyInjector = {
    DatabaseService : new DatabaseService(),
    ApplicationService : new ApplicationService(),
    ApiAdapterService : new ApiAdapterService(),
};

export { dependencies };