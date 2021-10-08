import React from "react";
import { Heading, Box } from "@chakra-ui/layout";

import PageContainer from "../../components/PageContainer";
import SubsectionDivider from "../../components/SubsectionDivider";
import RegisterForm from "../../components/RegisterForm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Registered from "../../components/Registered";
import LoggedIn from "../../components/LoggedIn";

const RegisterPage = () => {
    const { loggedIn, user } = useTypedSelector((state) => state.user);

    return (
        <PageContainer variant="jumbotron">
            <Heading textAlign={{ base: "left" }} fontWeight="black">
                Register
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
                {loggedIn === true ? <LoggedIn /> : <></>}
                {loggedIn === false && user !== null ? <Registered /> : <></>}
                {loggedIn === false && user === null ? <RegisterForm /> : <></>}
            </Box>
        </PageContainer>
    );
};

export default RegisterPage;
