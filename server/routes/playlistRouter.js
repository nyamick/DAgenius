const Router = require('express');
const router = new Router();
const playlistController = require('../controllers/playlistController');
const authMiddleware = require('./../middleware/authMiddleware');
const checkDeleteMusicFromPlaylist = require('../middleware/checkDeleteMusicFromPlaylistMiddleware');

router
    .post('/', authMiddleware, playlistController.addMusic)
    .get('/', authMiddleware, playlistController.getMusic)
    .delete('/:id', authMiddleware, checkDeleteMusicFromPlaylist, playlistController.deleteMusic);

module.exports = router;
