import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Content from "./components/content/Content";
import Interests from "./components/interests/Interests";
import Title from "./components/title/Title";
import SavedList from "./components/saved/SavedList";
import Weather from "./components/weather/Weather";
import { authenticate } from "./store/session";
import Footer from "./components/footer/Footer";
import {PageView, initGA} from '../src/components/Google Analytics/GoogleAnalytics.js'

function App() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();

        // initialize ReactGA
        initGA("UA-213353187-1");
        PageView();
    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/login" exact={true}>
                    <LoginForm />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SignUpForm />
                </Route>
                <Route path="/" exact={true}>
                    <Title />
                    <SavedList />
                    <Content />
                    <Interests />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
