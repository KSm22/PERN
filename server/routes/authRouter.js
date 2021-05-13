const Router = require('express');
const router = new Router;
const controller = require('../controllers/authController');
const {check} = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration',
    [
        check('email', 'Поле email не может быть пустым').isEmail(),
        check('password', 'Пароль не может быть короче 4 символов').isLength({min: 4, max: 12})
    ],
    controller.registration);
router.post('/login', controller.login);
router.get('/auth',
    authMiddleware,
    controller.auth);


module.exports = router;
