const {Playlist, PlaylistMusic, Music} = require('./../models/models');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

class PlaylistController {
    async addMusic(req, res) {
        try {
            const {id} = req.body;
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.SECRET_KEY);
            const playlist = await Playlist.findOne({where: {userId: user.id}});

            await PlaylistMusic.create({playlistId : playlist.id, musicId: id});
            return res.json("Product added in card");
        } catch (e) {
            console.error(e);
        }
    }

    async getMusic(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.SECRET_KEY);
            const {id} = await Playlist.findOne({where: {userId: user.id}});
            const playlist = await PlaylistMusic.findAll({where: {playlistId: id}});

            const playlistArr = [];
            for(let i = 0; i < playlist.length; i++) {
                const playlistMusic = await Music.findOne({
                    where: {
                        id: playlist[i].musicId,

                    }
                });
                playlistArr.push(playlistMusic);
            }

            return res.json(playlistArr);
        } catch (e) {
            console.error(e);
        }
    }

    async deleteMusic(req, res) {
        try {
            const {id} = req.params;
            const user = req.user;

            await Playlist.findOne({where: {userId: user.id}}).then(async userPlaylist => {
                if(userPlaylist.userId === user.id) {
                    await PlaylistMusic.destroy({where: {playlistId: userPlaylist.id, musicId: id}})
                }
                return res.json(`You haven't access for delete the music(${id}) from playlist that didn't belong to you`);
            });
            return res.json("Product deleted form your card");
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new PlaylistController();
