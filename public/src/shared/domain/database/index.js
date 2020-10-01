"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knex_2 = __importDefault(require("@config/knex"));
var connection = knex_1.default(knex_2.default);
exports.default = connection;
