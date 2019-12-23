import express, { Router } from 'express';
import { IDatabaseService } from '../../../../interfaces/services/IDatabaseService';
import { UserController } from '../controllers/UserController';

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