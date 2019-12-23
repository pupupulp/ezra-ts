"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserUseCase_1 = require("../../../../use-cases/UserUseCase");
var UserController = /** @class */ (function () {
    function UserController(userRepository) {
        this.userRepository = userRepository;
        this.userAction = new UserUseCase_1.UserUseCase(this.userRepository);
    }
    UserController.prototype.getUserByUserName = function (req, res, next) {
        this.userAction.getByUsername(req.params.username)
            .then(function (user) {
            res.json(user);
        })
            .catch(function (err) {
            next(err);
        });
    };
    UserController.prototype.getAll = function (req, res, next) {
        this.userAction.getAll()
            .then(function (users) {
            res.json(users);
        })
            .catch(function (err) {
            next(err);
        });
    };
    return UserController;
}());
exports.UserController = UserController;
