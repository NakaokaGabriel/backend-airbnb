"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
require('dotenv/config');
module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
    migrations: {
        tableName: 'migrations',
        directory: path_1.resolve(__dirname, 'src', 'shared', 'domain', 'database', 'migrations'),
    },
    seeds: {
        tableName: 'seeders',
        directory: path_1.resolve(__dirname, 'src', 'shared', 'domain', 'database', 'seeds'),
    },
};
