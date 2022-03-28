import './Footbar.css';
import React from 'react';
import {observer} from "mobx-react-lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faYoutube, faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";
import {CONTACTS, SHIPPINGPAYMANT, SHOP_ROUTE, SIZES} from "../utils/consts";
import {NavLink} from "react-router-dom";

const Footbar = observer(() => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Об интернет-магазине</h6>
                        <p className="text-justify">
                            Принт футболок на заказ.
                            Постоянные складские запасы текстильной продукции, футболки, поло, майки, регланы, кенгуру.
                            Индивидуальный подход.
                            Современный стиль.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Контакты</h6>
                        <ul className="footer-links">
                            <li>LifeCell: <a href="/">+38(063)565-90-70</a></li>
                            <li>MTC: <a href="/">+38(066)372-71-02</a></li>
                            <li>Email: <a href="mailto:linusik5@yandex.ru">linusik5@yandex.ru</a></li>
                            <li>Skype: <a href="skype:exxus_master?add">exxus_master</a></li>
                            <li>Telegram: <a href="tg://resolve?domain=@Exxuslee">@exxuslee</a></li>
                            <li>Viber: <a href="viber://chat?number=%2B380663727102">+38(066)372-71-02</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Быстрые ссылки</h6>
                        <ul className="footer-links">
                            <li><NavLink to={SHOP_ROUTE}>Главная</NavLink></li>
                            <li><NavLink to={SIZES}>Размеры одежды</NavLink></li>
                            <li><NavLink to={SHIPPINGPAYMANT}>Доставка и оплата</NavLink></li>
                            <li><NavLink to={CONTACTS}>Контакты</NavLink></li>
                            <li><NavLink to={CONTACTS}>Политика конфидицеальности</NavLink></li>
                            <li><NavLink to={CONTACTS}>Sitemap</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <a href="exxuslee@gmail.com"> exxuslee@gmail.com</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="/"><FontAwesomeIcon icon={faViber}/></a></li>
                            <li><a className="twitter" href="/"><FontAwesomeIcon icon={faTelegram}/></a></li>
                            <li><a className="dribbble" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a className="linkedin" href="/"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
});
export default Footbar;


