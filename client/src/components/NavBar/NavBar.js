import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

import {Context} from "../../index";

import {Container, Navbar} from "react-bootstrap";
import {MAIN_ROUTE} from "../../utils/consts";
import TrueAuth from "./preesent-components/trueAuth";
import FalseAuth from "./preesent-components/falseAuth";

const NavBar = observer(() => {
    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "lightgreen"}} to={MAIN_ROUTE}>Spotify</NavLink>
                {user.isAuth ? <TrueAuth/> : <FalseAuth/>}
            </Container>
        </Navbar>
    );
});

export default NavBar;
