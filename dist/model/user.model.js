"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../config/index");
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
UserModel.init({
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: "users",
    sequelize: index_1.sequelize,
    createdAt: true,
    updatedAt: true
});
UserModel.sync({ alter: true });
