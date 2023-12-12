import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footbar from "./components/Footbar";
import {Container, Spinner} from "react-bootstrap";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {getMusicFromPlaylist} from "./http/musicAPI";
import "./bgstyle.css"

const App = observer(() => {
    const {user, playlist} = useContext(Context);
    const [loading, setLoading] = useState(false);

    //check authorization
    useEffect(() => {
        if(localStorage.getItem('token')) {
            setLoading(true);
            check().then(data => {
                user.setUser(data);
                user.setIsAuth(true);
            }).finally(() => {
                setLoading(false);
            })
        }
    }, [user]);


    //Loading Basket
    useEffect(() => {
       if(user.isAuth === false) {
           playlist.setDeleteAllMusicFromPlaylist();
           const savedPlaylist = JSON.parse(localStorage.getItem("playlist"));
           for (let key in savedPlaylist) {
               playlist.setPlaylist(savedPlaylist[key]);
           }
           console.log("Not Added")
       } else if(user.isAuth === true){
           playlist.setDeleteAllMusicFromPlaylist();
           getMusicFromPlaylist().then(data => {
               for (let key in data) {
                   playlist.setPlaylist(data[key], true);

               }
               console.log("Added")
           })
       }
    }, [playlist, user.isAuth]);

    if(loading) {
        return <Spinner animation="grow"/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <Container className="bgstyle">
                <AppRouter/>
            </Container>
            <Footbar/>
        </BrowserRouter>
    );
});
export default App;
