import {Button, Nav} from "react-bootstrap";
import React, {useContext} from "react";
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, PLAYLIST_ROUTE} from "../../../utils/consts";
import PlaylistNavBar from "../PlaylistNavBar";
import AdminPanel from "../AdminPanel";

const TrueAuth = () => {
    const {user, playlist} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        playlist.resetPlaylist();
    }

    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            <AdminPanel/>
            <Button
                variant={"outline-success"}
                onClick={() => logOut()}
            >
                Выйти
            </Button>
        </Nav>
    );
};

export default TrueAuth;
