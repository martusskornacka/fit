import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductList from "../pages/ProductList";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPages";

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductList} />
                <Route path="/product/:id" component={ProductsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;