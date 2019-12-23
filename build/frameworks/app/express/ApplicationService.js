"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var github_service_1 = require("./routes/github-service");
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var ApplicationService = /** @class */ (function () {
    function ApplicationService() {
        this.app = express_1.default();
        this.version = '/v1';
        this.port = 9003;
    }
    ApplicationService.prototype.initialize = function (dependencies) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.app.use(_this.version, github_service_1.routes(dependencies));
                var server_1 = http_1.default.createServer(_this.app);
                server_1.listen(_this.port);
                server_1.on('error', function (error) {
                    if (error.syscall !== 'listen') {
                        throw error;
                    }
                    switch (error.code) {
                        case 'EACCES':
                            console.error('Port ' + _this.port + ' requires elevated privileges');
                            process.exit(1);
                            break;
                        case 'EADDRINUSE':
                            console.error('Port ' + _this.port + ' is already in use');
                            process.exit(1);
                            break;
                        default:
                            throw error;
                    }
                });
                server_1.on('listening', function () {
                    var address = server_1.address();
                    console.log('Listening on port ' + address.port);
                });
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
