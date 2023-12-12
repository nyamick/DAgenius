import React, {useContext} from 'react';
import {Image} from "react-bootstrap";
import heart from "../../assets/heart.png";
import {NavLink} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {PLAYLIST_ROUTE} from "../../utils/consts";

const PlaylistNavBar = observer(() => {
    const {playlist} = useContext(Context);

    return (
        <div className="d-flex align-items-center mr-3">
            <NavLink to={PLAYLIST_ROUTE} className="d-flex align-items-center">
                <Image src={heart} style={{width: "100%", maxWidth: 30}} alt="playlist"/>
            </NavLink>
        </div>
    );
});
export default PlaylistNavBar;


