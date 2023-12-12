import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";


import {Context} from "../index";
import {Col, Image, Row} from "react-bootstrap";
import OneItemInPlaylist from "../components/oneItemInPlaylist";

import emptyPlaylist from "./../assets/emty.jpg";

const PlaylistPage = observer(() => {
    const {playlist} = useContext(Context);

    if(playlist.Playlist.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
                <Image src={emptyPlaylist}/>
                <div className="text-center mt-5" style={{fontSize: 28}}><b>Пустой плейлист</b></div>
            </div>
        )
    }

    return (
        <>
            <br/>
            <Row className="mt-3">
                <Col xs={12}>
                    {playlist.Playlist.map(music => <OneItemInPlaylist key={music.id} music={music}/>)}
                </Col>
            </Row>
        </>
    );
});

export default PlaylistPage;
