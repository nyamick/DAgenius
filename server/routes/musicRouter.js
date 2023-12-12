const Router = require('express');
const router = new Router();
const musicController = require('../controllers/musicController');
const checkRole = require('../middleware/checkRoleMiddleware');

router
    .post('/', musicController.create)
    .get('/', musicController.getAll)
    .get('/search', musicController.getSearchAllMusicsByName)
    .get('/:id', musicController.getOne)
    .delete('/:id', checkRole("ADMIN"), musicController.delete)
    .put('/:id', checkRole("ADMIN"), musicController.update)

module.exports = router;
