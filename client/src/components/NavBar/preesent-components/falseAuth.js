import React from "react";

import {Button, Nav} from "react-bootstrap";
import {LOGIN_ROUTE} from "../../../utils/consts";
import {NavLink} from "react-router-dom";
import PlaylistNavBar from "../PlaylistNavBar";

const FalseAuth = () => {
    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outline-success"}>Авторизация</Button>
            </NavLink>
        </Nav>
    );
};

export default FalseAuth;
