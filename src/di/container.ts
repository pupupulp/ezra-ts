import { Container } from 'inversify';
import 'reflect-metadata';
import { ApplicationService } from '../frameworks/app/express/ApplicationService';
import { DatabaseService } from '../frameworks/databases/github/DatabaseService';
import { ApiAdapterService } from '../frameworks/utils/ApiAdapterService';
import { _ } from './inject';

const container = new Container();

container
    .bind(_.DatabaseService)
    .to(DatabaseService)
    .inSingletonScope();

container
    .bind(_.ApplicationService)
    .to(ApplicationService)
    .inSingletonScope();

container
    .bind(_.ApiAdapterService)
    .to(ApiAdapterService)
    .inSingletonScope();

export { container };

