import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(()  => {
    const {music} = useContext(Context);
    return (
        <Row className="d-flex">
            {music.types.map(type =>
                <Card
                    style={{cursor: "pointer"}}
                    border={type.id === music.selectedBrand.id ? "success" : "light"}
                    key={type.id}
                    className="p-3"
                    onClick={() => music.setSelectedBrand(type)}
                >
                    {type.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
