import React from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Contacts = observer(() => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 296}}
        >
            <ul className="footer-links">
                <li>Телефон: <a href="/">+7(950)0600600</a></li>
                <li>WhatsApp: <a href="/">+7(950)0600600</a></li>
                <li>Viber: <a href="/">+7(950)0600600</a></li>
                <li>Email: <a href="mailto:electron@mail.ru">electron@mail.ru</a></li>
                <li>Zoom: <a href="/">zoom</a></li>
                <li>Telegram: <a href="tg://resolve?domain=@electron">@electron</a></li>
        </ul>
        </Container>
    );
});

export default Contacts;
