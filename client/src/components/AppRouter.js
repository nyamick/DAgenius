import React, { useContext, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { authRouters, publicRouters } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'));
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname));
        };
    }, []); // Empty dependency array means the effect runs once, similar to componentDidMount

    return (
        <Routes>
            {user.isAuth &&
                authRouters.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRouters.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
