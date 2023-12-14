const { Op } = require("sequelize");
const uuid = require('uuid');
const path = require('path');
const {Music, Type, Brand, PlaylistMusic} = require('../models/models');
const apiError = require('./../error/apiError');

class MusicController {
    async create(req, res, next) {
        try {
            let {name, author, brandId, typeId} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const music = await Music.create({
                name,
                author,
                brandId,
                typeId,
                img: fileName
            });

            return res.json(music);
        } catch (e) {
            next(apiError.badRequest(e.message));
        }

    }

    async getAll(req, res,next) {
        try {
            let {brandId, typeId, limit, page} = req.query;
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let musics;
            if (!brandId && !typeId) {
                musics = await Music.findAndCountAll({
                    include: [
                        {model: Brand},
                        {model: Type},
                    ],
                    limit,
                    offset})
            }
            if (brandId && !typeId) {
                musics = await Music.findAndCountAll({
                    where:{brandId},
                    include: [
                        {model: Brand},
                        {model: Type},
                    ],
                    limit,
                    offset
                })}
            if (!brandId && typeId) {
                musics = await Music.findAndCountAll({
                    where:{typeId},
                    include: [
                        {model: Brand},
                        {model: Type},
                    ],
                    limit,
                    offset
                })}
            if (brandId && typeId) {
                musics = await Music.findAndCountAll({
                    where:{typeId, brandId},
                    include: [
                        {model: Brand},
                        {model: Type},
                    ],
                    limit,
                    offset
                })}
            return res.json(musics)
        } catch (e) {
            next(apiError.badRequest(e.message));
        }
    }

    async getSearchAllMusicsByName(req, res, next) {
        try {
            let {limit, page, name, filter} = req.query;

            page = page || 1;
            limit = limit || 100;
            let offset = page * limit - limit
            if(filter === "All") {
                const musics =  await Music.findAndCountAll({
                    attributes: ["name", "author", "img", "id"],
                    where:
                        {
                            name: {
                                [Op.like]: `%${name}%`
                            }
                        },
                    include: [
                        {
                            attributes: ["name"],
                            model: Brand
                        },
                        {
                            attributes: ["name"],
                            model: Type
                        },
                    ],
                    limit,
                    offset,
                })

                return res.json(musics);
            } else {
                const musics =  await Music.findAndCountAll({
                    attributes: ["name", "author", "img", "id", "brandId", "typeId"],
                    where:
                        {
                            name: {
                                [Op.like]: `%${name}%`
                            },
                            [Op.or]: [
                                {
                                    brandId: null,
                                },
                                {
                                    typeId: null,
                                },
                            ],
                        },
                    include: [
                        {
                            attributes: ["name"],
                            model: Brand
                        },
                        {
                            attributes: ["name"],
                            model: Type
                        },
                    ],
                    limit,
                    offset,
                })


                return res.json(musics);
            }
        } catch (e) {
            next(apiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            let musics = await Music.findOne({
                where: {id},
                include: [
                    {model: Type},
                    {model: Brand},
                ]
            });
            return res.json(musics);
        } catch (e) {
            next(apiError.badRequest(e.message));
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await Music.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        await Music.destroy({where:{id}}).then(() => {
                            return res.json("Music deleted");
                        })
                    } else {
                        return res.json("This Music doesn't exist");
                    }

                    await PlaylistMusic.destroy({where:{musicId: id}})
                })
        } catch (e) {
            return res.json(e);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const {brandId, typeId, name, author} = req.body;

            await Music.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        let newVal = {};
                        brandId ? newVal.brandId = brandId : false;
                        typeId ? newVal.typeId = typeId : false;
                        name ? newVal.name = name : false;
                        author ? newVal.author = author : false;

                        if(req.files) {
                            const {img} = req.files;
                            const type = img.mimetype.split('/')[1];
                            let fileName = uuid.v4() + `.${type}`;
                            await img.mv(path.resolve(__dirname, '..', 'static', fileName));
                            newVal.img = fileName;
                        }

                        await Music.update({
                            ...newVal
                        }, {where:{id}} ).then(() => {
                            return res.json("Music updated");
                        })
                    } else {
                        return res.json("This Music doesn't exist");
                    }
                })
            } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new MusicController();
