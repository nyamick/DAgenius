import React from 'react';
import {Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const ShippingPaymant = observer(() => {
    return (
        <Container
            style={{height: window.innerHeight - 296}}
        >
            <Row className="d-flex justify-content-center align-items-center mb-2">
                <h1>Доставка и оплата</h1>
            </Row>
            <Row>
                <h2>Доступные способы оплаты</h2>
            </Row>
            <Row>
                <h6>Безналичный расчет (для физических и юридических лиц).<br/>
                    Банковский перевод через отделение банка.<br/>
                    Оплата на карту ПриватБанка через Приват24.<br/><br/>
                    Предоплата.<br/>
                    Мы приступаем к выполнению заказа только после 100% предоплаты его стоимости.<br/>
                    <br/>
                </h6>
            </Row>
            <Row>
                <h2>Доставка</h2>
            </Row>
            <Row>
                <h6>
                    Срок доставки заказа - зависит от перевозчика.<br/>
                    Доставка готового заказа по Киеву: курьерские службы, Новая почта. Так же вы можете самостоятельно забрать товар из нашего офиса или прислать за ним курьера.<br/>
                    Стоимость доставки по Киеву – 50 грн.<br/>
                    Доставка заказа по Украине: Новая почта.<br/>
                    Стоимость доставки по Украине определяется тарифами перевозчика.<br/>
                </h6>
            </Row>
        </Container>
    );
});

export default ShippingPaymant;
