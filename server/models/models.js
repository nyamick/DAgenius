const sequelize = require('./../db/db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const Playlist = sequelize.define('playlist', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const PlaylistMusic = sequelize.define('playlist_musics', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    musicId: {type: DataTypes.INTEGER},
});

const Music = sequelize.define('music', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Playlist);
Playlist.belongsTo(User);

Playlist.hasMany(PlaylistMusic);
PlaylistMusic.belongsTo(Playlist);

Type.hasMany(Music);
Music.belongsTo(Type);

Brand.hasMany(Music);
Music.belongsTo(Brand);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});


module.exports = {
    User,
    Playlist,
    PlaylistMusic,
    Music,
    Type,
    Brand,
    TypeBrand,
}

