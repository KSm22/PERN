require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: "Пользователь не авторизован"});
            }

            const {role} = jwt.verify(token, process.env.SECRET_KEY);

            let hasRole = false;
            if (role === "ADMIN") {
                hasRole = true;
            }

            if (role !== "ADMIN") {
                return res.json({message: "У вас нет доступа"})
            }
            next();
        } catch (e) {
            console.log(e);
            return res.status(403).json({message: "Пользователь не авторизован"});
        }
    }
};
