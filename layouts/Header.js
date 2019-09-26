import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../styles/Header.css'
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg';
import img6 from '../images/header6.jpg';

const Header = () => {

    return (
        <>
            <Switch>
                <Route path="/" render={() => (
                    <img src={img1} alt="heaven" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img2} alt="" />
                )} />
                <Route path="/about" render={() => (
                    <img src={img3} alt="" />
                )} />
                <Route path="/register" render={() => (
                    <img src={img4} alt="" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img5} alt="" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img6} alt="heaven" />
                )} />
                <Route render={() => (
                    <img src={img1} alt="heaven" />
                )} />
            </Switch>

        </>
    );
}

export default Header;