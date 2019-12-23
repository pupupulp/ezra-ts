"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserUseCase = /** @class */ (function () {
    function UserUseCase(userRepository) {
        this.userRepository = userRepository;
    }
    UserUseCase.prototype.getByUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userRepository.getByUsername(username)
                .then(function (response) {
                resolve(response);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    UserUseCase.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userRepository.getAll()
                .then(function (response) {
                resolve(response);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    return UserUseCase;
}());
exports.UserUseCase = UserUseCase;
