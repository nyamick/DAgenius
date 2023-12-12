import React, {useContext} from 'react';
import {Button, Image, Nav} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const AdminPanel = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    if (user.User.role === 'ADMIN') {
        return (
            <div className="d-flex align-items-center mr-3">
                <Button
                    className={"mr-3"}
                    variant={"outline-success"}
                    onClick={() => {navigate(ADMIN_ROUTE)}}
                >
                    Админ панель
                </Button>
            </div>
        );
    } else return (
        <div className="d-flex align-items-center mr-3">
        </div>
    )


});
export default AdminPanel;


