import { DatabaseService } from '../frameworks/databases/github/DatabaseService';
import { ApplicationService } from '../frameworks/app/express/ApplicationService';
import { ApiAdapterService } from '../frameworks/utils/ApiAdapterService';
import { TYPES } from './types';

import 'reflect-metadata';
import { Container } from 'inversify';

const container = new Container();

container
    .bind(TYPES.DatabaseService)
    .to(DatabaseService)
    .inSingletonScope();

container
    .bind(TYPES.ApplicationService)
    .to(ApplicationService)
    .inSingletonScope();

container
    .bind(TYPES.ApiAdapterService)
    .to(ApiAdapterService)
    .inSingletonScope();

export { container };