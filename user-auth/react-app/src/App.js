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

// Google Analytics
// Initialize ReactGA with standardImplementation: true option.
// https://www.npmjs.com/package/react-ga?activeTab=readme
// https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react
import ReactGA from "react-ga";
ReactGA.initialize("UA-213353187-1");

function App() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
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
                    {ReactGA.pageview(
                        window.location.pathname + window.location.search
                    )}
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
