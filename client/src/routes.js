import {
    ADMIN_ROUTE,
    PLAYLIST_ROUTE, DEVICE_EDIT_ROUTE,
    MUSIC_ROUTE,
    LOGIN_ROUTE, ORDERING_ROUTE,
    ORDERS_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    CONTACTS,
    SIZES,
    SHIPPINGPAYMANT
} from './utils/consts';

import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import MusicPage from "./pages/MusicPage";
import PlaylistPage from "./pages/PlaylistPage";
import MusicEditPage from "./pages/MusicEditPage";

export const authRouters = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: DEVICE_EDIT_ROUTE + '/:id',
        Component: MusicEditPage
    },

];

export const publicRouters = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MUSIC_ROUTE + '/:id',
        Component: MusicPage
    },
    {
        path: PLAYLIST_ROUTE,
        Component: PlaylistPage
    },
];
