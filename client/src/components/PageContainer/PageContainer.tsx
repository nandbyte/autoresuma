import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import Navbar from "../Navbar";
import SectionDivider from "../SectionDivider";
import Credit from "../Credit";

interface Props {
    children?: any;
}

const PageContainer: React.FC<Props> = (props: Props) => {
    return (
        <Box justifyItems="center" height="100%">
            <Navbar />
            <Flex width="100%" justifyContent="center">
                <Stack
                    px={{ base: 8, lg: 16, xl: 16 }}
                    justifyContent="space-between"
                    width={{ base: "100%", xl: "80em" }}
                >
                    <Box py={{ base: 8, lg: 16, xl: 16 }}>{props.children}</Box>
                    <Box>
                        <SectionDivider />
                        <Credit />
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};

export default PageContainer;
