"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (request, response) {
    return response.send('<h1>Hello world</h1>');
});
exports.default = routes;
