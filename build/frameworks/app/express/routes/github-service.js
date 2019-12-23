"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("../controllers/UserController");
var express_1 = __importDefault(require("express"));
var routes = function (dependencies) {
    var router = express_1.default.Router();
    var databaseService = dependencies.DatabaseService;
    var controller = new UserController_1.UserController(databaseService.getUserRepository());
    router.route('/users/:username')
        .get(controller.getUserByUserName);
    router.route('/users')
        .get(controller.getAll);
    return router;
};
exports.routes = routes;
