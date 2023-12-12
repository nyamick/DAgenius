import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import MusicItem from "./MusicItem";

const MusicList = observer(() => {
    const {music} = useContext(Context);

    return (
        <Row className="d-flex">
            {music.musics.map(music =>
                <MusicItem key={music.id} music={music}/>
            )}
        </Row>
    );
});

export default MusicList;
