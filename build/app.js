"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependency_injector_1 = require("./configs/dependency-injector");
dependency_injector_1.dependencies.DatabaseService.initialize(dependency_injector_1.dependencies)
    .then(function () {
    dependency_injector_1.dependencies.ApplicationService.initialize(dependency_injector_1.dependencies)
        .catch(function (err) {
        console.error(err);
    });
})
    .catch(function (err) {
    console.error(err);
});
