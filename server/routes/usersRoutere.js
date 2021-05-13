const Router = require('express');
const router = new Router;
const roleMiddleware = require('../middleware/roleMiddleware');
const controller = require('../controllers/usersController');

router.get('/users', roleMiddleware(), controller.getUsers);
router.post('/:id/delete', roleMiddleware(), controller.deleteUser);

module.exports = router;
