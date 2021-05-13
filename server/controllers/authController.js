require('dotenv').config();
const { User, File } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const fileService = require('../services/fileService');


const generateAccessToken = (id, email, role) => {
    const payload = {
        id, email, role
    };
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "24h"});
};

class AuthController {
    async registration(req, res) {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors});
            }

            const {email, password} = req.body;
            const candidate = await User.findOne({where: {email}});

            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким логином уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 5);
            const user = await User.create({email, password: hashPassword, role: "ADMIN"});
            await fileService.createDir(new File({userId: user.id, name: ''}));
            return res.json({message: 'Пользователь зарегистрирован'});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'authorization error'});
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({where: {email}});
            if (!user) {
                return res.status(400).json({message: `Пользователь ${email} не найден`});
            }

            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: 'Неверный пароль'});
            }

            const token = generateAccessToken(user.id, user.email, user.role);
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            });
        } catch (e) {

        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({where: {id: req.user.id}});

            const token = generateAccessToken(user.id, user.email, user.role);
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            });
        } catch (e) {

        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (e) {

        }
    }
}

module.exports = new AuthController();
