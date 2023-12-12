import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {music} = useContext(Context);

    const getAllMusics = () => {
        music.setSelectedType("all");
        music.setSelectedBrand("all");
    }

    return (
        <ListGroup>
            <ListGroup.Item
                style={{cursor: "pointer"}}
                active={"all" === music.selectedType}
                onClick={getAllMusics}
            >
                All
            </ListGroup.Item>
            {music.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={type.id === music.selectedType.id}
                    key={type.id}
                    onClick={() => music.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
