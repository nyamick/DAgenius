const {Playlist, PlaylistMusic} = require('./../models/models');
const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    try {
        const {id} = req.params;
        const user = req.user;
        const userPlaylist = await Playlist.findOne({where: {userId: user.id}});
        const musicItem = await PlaylistMusic.findOne({where: {playlistId: userPlaylist.id, musicId: id}});

        if(musicItem) {
            return next();
        }
        return res.json("Music didn't find in playlist of user");
    } catch (e) {
        res.json(e);
    }
};
