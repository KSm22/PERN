require('dotenv').config();
const { User, File } = require('../models/models');


class UsersController {

    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (e) {

        }
    }

    async deleteUser(req, res) {
        try {
            const user = await User.findOne({where: {id: req.params.id}});

            if (!user) {
                return res.status(400).json({message: `Пользователь не найден`});
            }

            user.destroy();
            // res.json({message: `Пользователь ${user.email} удалён`});
            res.redirect('http://localhost:3000/');
        } catch (e) {
            console.log(e)
        }
    }
}


module.exports = new UsersController();
