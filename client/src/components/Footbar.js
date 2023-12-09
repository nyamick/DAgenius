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
                            Магазин электроники в подвале сайта предлагает широкий выбор товаров:<br/>
                            - Продажа электроники и аксессуаров.<br/>
                            - Постоянное наличие товаров на складе: смартфоны, ноутбуки, планшеты, аксессуары.<br/>
                            - Индивидуальный подход к каждому клиенту.<br/>
                            - Современные технологии.<br/>
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Контакты</h6>
                        <ul className="footer-links">
                            <li>Телефон: <a href="/">+7(950)0600600</a></li>
                            <li>WhatsApp: <a href="/">+7(950)0600600</a></li>
                            <li>Viber: <a href="/">+7(950)0600600</a></li>
                            <li>Email: <a href="mailto:electron@mail.ru">electron@mail.ru</a></li>
                            <li>Zoom: <a href="/">zoom</a></li>
                            <li>Telegram: <a href="tg://resolve?domain=@electron">@electron</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Быстрые ссылки</h6>
                        <ul className="footer-links">
                            <li><NavLink to={SHOP_ROUTE}>Главная</NavLink></li>
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


