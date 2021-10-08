import React from "react";

// Styling and theming
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

// Disable box shadow for non-keyboard interactions
import "focus-visible/dist/focus-visible";

// Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResumePage from "../pages/ResumePage/ResumePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "../state";
import LoginPage from "../pages/LoginPage";

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
                </Router>
            </Provider>
        </ChakraProvider>
    );
};

export default App;
