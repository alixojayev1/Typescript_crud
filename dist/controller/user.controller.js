"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDelete = exports.userPut = exports.userPost = exports.userGet = void 0;
const user_model_1 = require("../model/user.model");
const userGet = async (req, res) => {
    try {
        const data = await user_model_1.UserModel.findAll();
        return res.send(data);
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};
exports.userGet = userGet;
const userPost = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await user_model_1.UserModel.create({ username, password });
        return res.status(200).json({ newUser, msg: "Yangi malumotlar qo'shildi " });
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};
exports.userPost = userPost;
const userPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;
        const user = await user_model_1.UserModel.update({ username, password }, { where: { id } });
        return res.status(200).json({ user, msg: "Malumotlar o'zgartirildi " });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
exports.userPut = userPut;
const userDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await user_model_1.UserModel.destroy({ where: { id: req.params.id } });
        if (!user) {
            return res.status(404).json({ message: 'Bunday id mavjud emas' });
        }
        return res.status(200).json({ user, msg: "Malumotlar o'chirildi" });
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};
exports.userDelete = userDelete;
