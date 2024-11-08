import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/Home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Offers } from "./pages/Offers.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { LogIn } from "./pages/LogIn.jsx";
import { CreateOffer } from "./pages/CreateOffer.jsx";
import { ProfileDeveloper } from "./pages/ProfileDeveloper.jsx"
import { ProfileCompany } from "./pages/ProfileCompany.jsx";
import { SingleOffer } from "./pages/SingleOffer.jsx";
import { Users } from "./pages/Users.jsx"
import { MyJobApplies } from "./pages/MyJobApplies.jsx";
import { Bookmarks } from "./pages/Bookmarks.jsx";
import { MyOffersPosted } from "./pages/MyOffersPosted.jsx";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<ProfileDeveloper />} path="/profiledeveloper" />
                        <Route element={<ProfileCompany />} path="/profilecompany" />
                        <Route element={<ProfileDeveloper />} path="/profiledeveloper/:id" />
                        <Route element={<ProfileCompany />} path="/profilecompany/:id" />
                        <Route element={<Offers />} path="/offers" />
                        <Route element={<Users />} path="/users" />
                        <Route element={<SingleOffer />} path="/singleoffer/:id" />
                        <Route element={<About />} path="/about" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<LogIn />} path="/login" />
                        <Route element={<CreateOffer />} path="/createoffer" />
                        <Route element={<MyJobApplies />} path="/myjobapplies" />
                        <Route element={<Bookmarks />} path="/bookmarks" />
                        <Route element={<MyOffersPosted />} path="/myoffers" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
