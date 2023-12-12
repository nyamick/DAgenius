const Router = require('express');
const router = new Router();
const musicRouter = require('./musicRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const playlistRouter = require('./playlistRouter');

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/music', musicRouter)
router.use('/playlist', playlistRouter)

module.exports = router;
