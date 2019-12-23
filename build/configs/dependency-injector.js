"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseService_1 = require("../frameworks/databases/github/DatabaseService");
var ApplicationService_1 = require("../frameworks/app/express/ApplicationService");
var ApiAdapterService_1 = require("../frameworks/utils/ApiAdapterService");
var dependencies = {
    DatabaseService: new DatabaseService_1.DatabaseService(),
    ApplicationService: new ApplicationService_1.ApplicationService(),
    ApiAdapterService: new ApiAdapterService_1.ApiAdapterService(),
};
exports.dependencies = dependencies;
