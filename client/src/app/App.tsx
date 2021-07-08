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

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>
                <Route exact path="/resume">
                    <ResumePage />
                </Route>
            </Router>
        </ChakraProvider>
    );
};

export default App;
