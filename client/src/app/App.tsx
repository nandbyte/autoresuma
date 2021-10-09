import React from "react";

// Styling and theming
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

// Disable box shadow for non-keyboard interactions
import "focus-visible/dist/focus-visible";

// Routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// State
import { Provider } from "react-redux";
import { store } from "../state";

// Pages
import ResumePage from "../pages/ResumePage/ResumePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShowcasePage from "../pages/ShowcasePage";

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route exact path="/resume">
                        <ResumePage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/register">
                        <RegisterPage />
                    </Route>
                    <Route exact path="/showcase">
                        <ShowcasePage />
                    </Route>
                </Router>
            </Provider>
        </ChakraProvider>
    );
};

export default App;
