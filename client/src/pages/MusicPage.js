import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {addMusicToPlaylist, fetchOneMusic} from "../http/musicAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ReactImageMagnify from 'react-image-magnify';
import blankHeart from '../assets/heartEmpty.png'
import Heart from '../assets/heart.png'
import heart from "../assets/heart.png";


const MusicPage = observer(() => {
    const {user, playlist} = useContext(Context);
    const [music, setMusic] = useState({info: []});
    const {id} = useParams();


    useEffect( () => {
        fetchOneMusic(id).then(data => setMusic(data));

    },[id]);

    const isMusicInPlaylist = () => {
        const findDevice = playlist.Playlist.findIndex(item => Number(item.id) === Number(music.id));
        return findDevice < 0;
    }

    const addMusicInPlaylist = (music) => {
        if(user.isAuth) {
            addMusicToPlaylist(music).then(() => playlist.setPlaylist(music, true))
        } else {
            playlist.setPlaylist(music);
        }
    }

    return (
        <Container className="mt-3">
            <Row className="bg-white" style={{fontSize: 32, border: '5px solid green'}}>
                <Col md={4} className="mt-4">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: process.env.REACT_APP_API_URL + music.img
                        },
                        largeImage: {
                            src: process.env.REACT_APP_API_URL + music.img,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32}}
                    >
                        <h3>трек:</h3>
                        <div>{music.name}</div>
                        { isMusicInPlaylist() ?
                            <Button variant="outline-dark" onClick={() => addMusicInPlaylist(music)}>
                                Добавить в плейлист
                                <Image src={blankHeart} style={{width: "100%", maxWidth: 30}} alt="playlist"/>
                            </Button>
                            :
                            <Button variant="outline-dark" disabled>
                                У вас в плейлисте
                                <Image src={heart} style={{width: "100%", maxWidth: 30}} alt="playlist"/>
                            </Button>
                        }

                    </Card>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32}}
                    >
                        <h3>Автор:</h3>
                        <div>{music.author}</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
});

export default MusicPage;