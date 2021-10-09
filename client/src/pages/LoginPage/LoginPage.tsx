import React, { useEffect } from "react";
import { Heading, Box } from "@chakra-ui/layout";

import PageContainer from "../../components/PageContainer";
import SubsectionDivider from "../../components/SubsectionDivider";
import LoginForm from "../../components/LoginForm";
import { Redirect } from 'react-router-dom'
import { useTypedSelector } from "../../hooks/useTypedSelector";

const LoginPage = () => {
    const { loggedIn } = useTypedSelector((state) => state.user);
    if (loggedIn) {
        return <Redirect to="/profile/bio" />
    }

    return (
        <PageContainer variant="jumbotron">
            <Heading textAlign={{ base: "left" }} fontWeight="black">
                Login
            </Heading>
            <SubsectionDivider />

            <Box
                w="100%"
                bgColor="gray.700"
                color="white"
                px={6}
                py={4}
                borderRadius="md"
            >
                <LoginForm />
            </Box>
        </PageContainer>
    );
};

export default LoginPage;
