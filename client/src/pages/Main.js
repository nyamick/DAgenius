import React, {useContext, useEffect} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import MusicList from "../components/MusicList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchMusic, fetchTypes} from "../http/musicAPI";
import Pages from "../components/Pages";
import {PLAYLIST_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import heart from "../assets/heart.png";

const Main = observer(() => {
    const {music} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => music.setTypes(data));
        fetchBrands().then(data => music.setBrands(data));
        fetchMusic(null, null, 1, 9).then(data => {
            music.setMusics(data.rows);
            music.setTotalCount(data.count);
        });
    }, []);

    useEffect(
        () => {
            if(music.selectedType === "all") {
                    fetchMusic(null, music.selectedBrand.id, music.page, 9).then(data => {
                        music.setMusics(data.rows);
                        music.setTotalCount(data.count);
                    });
                } else {
                    fetchMusic(music.selectedType.id, music.selectedBrand.id, music.page, 9).then(data => {
                        music.setMusics(data.rows);
                        music.setTotalCount(data.count);
                    });
                }
        }, [music.page, music.selectedType, music.selectedBrand],
    );

    const navigate = useNavigate()

    return (
        <Container>
            <Row className="mt-3">
                <Col md={2}>
                    <Button
                        className={"mr-3"}
                        variant={"outline-success"}
                        onClick={() => {navigate(PLAYLIST_ROUTE)}}
                    >
                        Мой плейлист
                        <Image src={heart} style={{width: "100%", maxWidth: 30}} alt="playlist"/>
                    </Button>
                </Col>
                <Col md={2}>
                    <BrandBar/>
                </Col>
                <Col md={8}>
                    <MusicList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Main;
