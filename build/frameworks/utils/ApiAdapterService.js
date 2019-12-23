"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var ApiAdapterService = /** @class */ (function () {
    function ApiAdapterService() {
    }
    ApiAdapterService.prototype.initialize = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                var apiAdapter = axios_1.default.create({ baseURL: url });
                resolve(apiAdapter);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return ApiAdapterService;
}());
exports.ApiAdapterService = ApiAdapterService;
