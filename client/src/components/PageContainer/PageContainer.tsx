import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import Navbar from "../Navbar";
import SectionDivider from "../SectionDivider";
import Credit from "../Credit";
import TitleBanner from "../TitleBanner";

interface Props {
    variant?: "navbar" | "jumbotron" | "showcase";
    children?: any;
}

const PageContainer: React.FC<Props> = (props: Props) => {
    return (
        <Box justifyItems="center" height="100%">
            {props.variant === "navbar" ? <Navbar /> : <></>}

            <Flex width="100%" justifyContent="center">
                <Stack
                    px={{ base: 8, lg: 16, xl: 16 }}
                    justifyContent="space-between"
                    width={{ base: "100%", xl: "80em" }}
                >
                    <Stack
                        pt={
                            props.variant === "jumbotron"
                                ? { base: 16, lg: 24 }
                                : 0
                        }
                    >
                        {props.variant === "jumbotron" ? (
                            <TitleBanner />
                        ) : (
                            <></>
                        )}
                        <Box py={{ base: 8, lg: 16, xl: 16 }}>
                            {props.children}
                        </Box>
                    </Stack>
                    {props.variant !== "showcase" ? (
                        <Box pt={{ base: 16, lg: 32 }}>
                            <SectionDivider />
                            <Credit />
                        </Box>
                    ) : (
                        <></>
                    )}
                </Stack>
            </Flex>
        </Box>
    );
};

export default PageContainer;
