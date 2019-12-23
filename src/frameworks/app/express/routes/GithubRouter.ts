import { IDatabaseService } from '../../../../interfaces/services/IDatabaseService';

import { UserController } from '../controllers/UserController';
// import { TYPES } from '../../../../configs/types';

// import 'reflect-metadata';
// import { injectable, inject } from 'inversify'
import express, { Router } from 'express';

// @injectable()
export class GithubRouter {
    private router: Router;
    private userController: UserController;

    constructor(databaseService: IDatabaseService) {
        this.router = express.Router();
        this.userController = new UserController(databaseService.getUserRepository());

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