"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./config/index");
const user_router_1 = require("./router/user.router");
async function myCrud() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    try {
        await index_1.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.use(user_router_1.userRouter);
    app.listen(1010, () => {
        console.log("create database 1010");
    });
}
myCrud();
