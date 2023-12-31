import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";

import {useNavigate} from 'react-router-dom';
import {MUSIC_ROUTE} from "../utils/consts";

const MusicItem = ({music}) => {
    const navigate = useNavigate();

    return (
        <Col md={12} className="mt-2 row" onClick={() => navigate(MUSIC_ROUTE + '/' + music.id)}>
            <Card
                className="p-2"
                style={{height: "100px",cursor: "pointer", width:"800px"}}
                border={"Light"}
            >
                <Row>
                    <Col md={3}>
                        <Image style={{width: "80px ", height:"80px"}} src={process.env.REACT_APP_API_URL + music.img}/>
                    </Col>
                    <Col md={3}>

                    </Col>
                    <Col md={3}>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className="text-black-50">{music && music.brand.name}</div>
                        </div>
                        <div>{music.name}</div>
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>

            </Card>
        </Col>
    );
};

export default MusicItem;
