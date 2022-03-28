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
            <li>LifeCell: <a href="/">+38(063)565-90-70</a></li>
            <li>MTC: <a href="/">+38(066)372-71-02</a></li>
            <li>Email: <a href="mailto:linusik5@yandex.ru">linusik5@yandex.ru</a></li>
            <li>Skype: <a href="skype:exxus_master?add">exxus_master</a></li>
            <li>Telegram: <a href="tg://resolve?domain=@Exxuslee">@exxuslee</a></li>
            <li>Viber: <a href="viber://chat?number=%2B380663727102">+38(066)372-71-02</a></li>
        </ul>
        </Container>
    );
});

export default Contacts;
