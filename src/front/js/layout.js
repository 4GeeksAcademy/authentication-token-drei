import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Private } from "./pages/private";
import { NotFount } from "./pages/notFound";
import { PruebaTypeShi } from "./pages/pruebaTypeShi";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div className="my-auto">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    {/* <Navbar /> */}
                    <Routes>
                        <Route element={<Home />} path="/home" />
                        <Route element={<PruebaTypeShi />} path="/prueba" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<NotFount />} path='*' />
                    </Routes>
                    {/* <Footer /> */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
