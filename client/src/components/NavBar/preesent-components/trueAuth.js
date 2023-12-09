import {Button, Nav} from "react-bootstrap";
import React, {useContext} from "react";
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, ORDERS_ROUTE} from "../../../utils/consts";
import BasketNavBar from "../BasketNavBar";
import AdminPanel from "../AdminPanel";

const TrueAuth = () => {
    const {user, basket} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        basket.resetBasket();
    }

    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            <AdminPanel/>
            <BasketNavBar/>
            {user.isAuth && user.User.role === "ADMIN" && <Button
                className={"mr-3"}
                variant={"outline-light"}
                onClick={() => {navigate(ORDERS_ROUTE)}}
            >
                Заказы
            </Button>}
            <Button
                variant={"outline-light"}
                onClick={() => logOut()}
            >
                Выйти
            </Button>
        </Nav>
    );
};

export default TrueAuth;
