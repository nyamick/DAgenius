import './Footbar.css';
import React from 'react';
import {observer} from "mobx-react-lite";

const Footbar = observer(() => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by Nyamify</p>
                    </div>
                </div>
            </div>
        </footer>
    )
});
export default Footbar;


