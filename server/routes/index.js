"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_route_1 = require("../api/todo/route/todo-route");
var index_1 = require("../commons/static/index");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_route_1.TodoRoutes.init(router);
        console.log('ROUTES', index_1.StaticDispatcher);
        router
            .route("*")
            .get(index_1.StaticDispatcher.sendIndex);
        app.use("/", router);
    };
    return Routes;
}());
exports.Routes = Routes;
