import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import UserStore from "./store/UserStore";
import MusicStore from "./store/MusicStore";
import PlaylistStoreStore from "./store/PlaylistStore";

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            music: new MusicStore(),
            playlist: new PlaylistStoreStore(),
        }
    }>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
