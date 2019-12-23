"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(params) {
        this.id = params.id;
        this.username = params.username;
        this.url = params.url;
        this.details = params.details;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getUrl = function () {
        return this.url;
    };
    User.prototype.getDetails = function () {
        return this.details;
    };
    return User;
}());
exports.User = User;
