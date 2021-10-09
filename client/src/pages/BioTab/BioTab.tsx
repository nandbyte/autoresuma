import React from "react";
import { Box, Stack, Heading, Link } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/react";

import BioForm from "../../components/BioForm";
import BioView from "../../components/BioView";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Redirect } from "react-router";

const BioTab = () => {
    const { updating } = useTypedSelector((state) => state.bio);

    const { loggedIn, user } = useTypedSelector((state) => state.user);
    if (!loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Stack spacing="12">
            <Box
                w="100%"
                bgColor="gray.700"
                color="white"
                p={6}
                borderRadius="md"
                my={6}
            >
                {!updating ? <BioView /> : null}
                {updating ? <BioForm /> : null}
            </Box>
            <Box
                w="100%"
                bgColor="gray.700"
                color="white"
                p={6}
                borderRadius="md"
                my={6}
            >
                <FormControl id="showcase-name">
                    <FormLabel>
                        <Heading variant="label">Showcase Link</Heading>
                    </FormLabel>
                    <Link
                        fontSize={"md"}
                        style={{ paddingLeft: "0px" }}
                        href={"http://localhost:3001/showcase/" + user?.id}
                    >
                        {"http://localhost:3001/showcase/" + user?.id}
                    </Link>
                </FormControl>
            </Box>
        </Stack>
    );
};

export default BioTab;
