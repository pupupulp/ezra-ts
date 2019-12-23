import { IDependencyInjector } from '../../../../interfaces/IDependencyInjector';
import { IDatabaseService } from '../../../../interfaces/services/IDatabaseService';

import { UserController } from '../controllers/UserController';

import express, { Router } from 'express';

export class GithubRouter {
    private router: Router;
    private databaseService: IDatabaseService;
    private userController: UserController;

    constructor(dependencies: IDependencyInjector) {
        this.router = express.Router();
        this.databaseService = dependencies.DatabaseService;
        this.userController = new UserController(this.databaseService.getUserRepository());

        return this;
    }

    initialize() {
        this.router.route('/users/:username')
            .get(this.userController.getUserByUserName);

        this.router.route('/users')
            .get(this.userController.getAll);
        
        return this.router;
    }
}