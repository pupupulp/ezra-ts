import { IDependencyInjector } from '../../../../interfaces/IDependencyInjector';
import { IDatabaseService } from '../../../../interfaces/services/IDatabaseService';

import { UserController } from '../controllers/UserController';

import express from 'express';

const routes = (dependencies: IDependencyInjector) => {
    const router: any = express.Router();
    const databaseService: IDatabaseService = dependencies.DatabaseService;
    const controller: UserController = new UserController(databaseService.getUserRepository());

    router.route('/users/:username')
        .get(controller.getUserByUserName);

    router.route('/users')
        .get(controller.getAll);
    
    return router;
}

export { routes };