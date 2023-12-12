import React, {useContext} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";

const OneItemInPlaylist = ({music}) => {
    const {playlist, user} = useContext(Context);

    return (
        <Card key={music.id} style={{width: "100%"}} className="mb-3">
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <Image src={process.env.REACT_APP_API_URL + music.img} style={{width: "100%", maxWidth: 250}} />
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <b>Title:</b> <NavLink to={`/music/${music.id}`}>{music.name}</NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-center">
                                {user.isAuth ? <Button variant="outline-dark" onClick={() => playlist.setDeleteItemPlaylist(music, true)}>Убрать из плейлиста</Button>
                                    : <Button variant="outline-dark" onClick={() => playlist.setDeleteItemPlaylist(music)}>Убрать из плейлиста</Button>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
)};

export default OneItemInPlaylist;
