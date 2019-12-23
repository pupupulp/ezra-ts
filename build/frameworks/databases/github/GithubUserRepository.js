"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubUserRepository = /** @class */ (function () {
    function GithubUserRepository() {
        this.users = [];
    }
    GithubUserRepository.prototype.add = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.users.push(user);
                resolve(user);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    GithubUserRepository.prototype.getByUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var user = _this.users.find(function (u) { return u.getUsername() === username; });
                resolve(user);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    GithubUserRepository.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                resolve(_this.users);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return GithubUserRepository;
}());
exports.GithubUserRepository = GithubUserRepository;
