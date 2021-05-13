const Router = require('express');
const router = new Router;
const roleMiddleware = require('../middleware/roleMiddleware');
const controller = require('../controllers/usersController');

router.get('/users', roleMiddleware(), controller.getUsers);
router.get('/delete/:id', controller.deleteUser);

module.exports = router;
