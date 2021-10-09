import React from "react";
import { Box, Center, Heading, Stack } from "@chakra-ui/layout";
import { Alert, AlertIcon, Button } from "@chakra-ui/react";

import PageContainer from "../../components/PageContainer";
import SubsectionDivider from "../../components/SubsectionDivider";

const ShowcasePage = () => {
    return (
        <PageContainer variant="showcase">
            <Heading textAlign={{ base: "left" }} fontWeight="black">
                Showcase
            </Heading>
            <SubsectionDivider />
            <Stack spacing="6" pt="12"></Stack>
        </PageContainer>
    );
};

export default ShowcasePage;
