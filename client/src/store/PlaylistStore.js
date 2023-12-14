 import {makeAutoObservable} from "mobx";
import {deleteMusicFromPlaylist} from "../http/musicAPI";

export default class PlaylistStoreStore {
    constructor() {
        this._playlist = [];
        makeAutoObservable(this);
    }

    async setDeleteItemPlaylist(music, isAuth = false) {
        if(isAuth) {
            await deleteMusicFromPlaylist(music.id).then(() => {
                this._playlist = this._playlist.filter(item => item.id !== music.id);
            });
        } else {
            this._playlist = this._playlist.filter(item => item.id !== music.id);

            localStorage.setItem("playlist", JSON.stringify(this._playlist));
        }
    }

    setPlaylist(item, isAuth = false) {
        const checkMusicInPlaylist = this._playlist.findIndex(music => music.id === item?.id);
        if(checkMusicInPlaylist < 0) {
            this._playlist = [...this._playlist, { count: 1, ...item}];
        }

        if(!isAuth) {
            localStorage.setItem("playlist", JSON.stringify(this._playlist));
        }
    }

    setDeleteAllMusicFromPlaylist() {
        return this._playlist = [];
    }

    setCountDevice(deviceId, action, isAuth = false) {
        const itemInd = this._playlist.findIndex(item => item.id === deviceId);
        const itemInState = this._playlist.find(device => device.id === deviceId);
        if (action === "+") {
            const newItem = {
                ...itemInState,
                count: ++itemInState.count
            }
            this._playlist = [...this._playlist.slice(0, itemInd), newItem, ...this._playlist.slice(itemInd + 1)]
        } else {
            const newItem = {
                ...itemInState,
                count: itemInState.count === 1 ? 1 : --itemInState.count
            }
            this._playlist = [...this._playlist.slice(0, itemInd), newItem, ...this._playlist.slice(itemInd + 1)]
        }

        if(!isAuth) {
            localStorage.setItem("playlist", JSON.stringify(this._playlist));
        }
    }

    resetPlaylist() {
        this._playlist = [];
        localStorage.removeItem("playlist");
    }


    get Playlist() {
        return this._playlist;
    }
}
