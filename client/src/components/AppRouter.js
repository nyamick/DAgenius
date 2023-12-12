import React, {useContext} from 'react';
import {Route, Navigate, Routes} from 'react-router-dom';

import {authRouters, publicRouters} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRouters.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            {publicRouters.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
