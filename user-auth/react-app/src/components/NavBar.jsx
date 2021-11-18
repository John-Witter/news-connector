import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { login } from "../store/session";
import { Event } from "./Google Analytics/GoogleAnalytics";
import "./navbar.css";
import "./content.css";

const NavBar = () => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const demoUser = async (e) => {
        e.preventDefault();
        const email = "demo@aa.io";
        const password = "password";
        await dispatch(login(email, password));
        window.location.reload();
    };

    // remove navbar once user logs in
    // logout button will be rendered with title
    // if (user) return (null)

    return (
        <nav className="navContainer">
            <ul className="navbar">
                {!user && (
                    <li>
                        <NavLink
                            className="authLink"
                            to="/login"
                            exact={true}
                            activeClassName="active"
                            onClick={() =>
                                Event(
                                    "LOGIN LINK",
                                    "Link to login clicked",
                                    "NAV_BAR"
                                )
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                )}
                {!user && (
                    <li>
                        <NavLink
                            className="authLink"
                            to="/sign-up"
                            exact={true}
                            activeClassName="active"
                            onClick={() =>
                                Event(
                                    "SIGNUP LINK",
                                    "Link to signup clicked",
                                    "NAV_BAR"
                                )
                            }
                        >
                            Sign Up
                        </NavLink>
                    </li>
                )}
                {user && (
                    <li>
                        <LogoutButton
                            onClick={() =>
                                Event(
                                    "LOGOUT LINK",
                                    "Link to logout clicked",
                                    "NAV_BAR"
                                )
                            }
                        />
                    </li>
                )}
                {!user && (
                    <li
                        className="demoBtn"
                        onClick={(e) => {
                            Event(
                                "DEMO LINK",
                                "Link to demo clicked",
                                "NAV_BAR"
                            );
                            demoUser(e);
                        }}
                    >
                        Demo User
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
