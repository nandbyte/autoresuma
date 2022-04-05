import React from "react";

import { Text, Heading, Box, Stack, Center } from "@chakra-ui/layout";

import { Image } from "@chakra-ui/image";

import { Link as RouterLink } from "react-router-dom";

import AnimationZoom from "../../components/AnimationZoom";

import PageContainer from "../../components/PageContainer";

import { Redirect } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { Button } from "@chakra-ui/react";

const HomePage = () => {
    const { loggedIn } = useTypedSelector((state) => state.user);

    if (loggedIn) {
        return <Redirect to="/profile/bio" />;
    }

    return (
        <PageContainer variant="showcase">
            <Box textAlign="left" pt={{ base: 12, lg: 24 }}>
                <Center>
                    <AnimationZoom>
                        <Heading
                            textAlign={"center"}
                            fontSize={{ base: "3xl", md: "6xl" }}
                            fontWeight="bold"
                        >
                            autorésuma
                        </Heading>

                        <Box py={{ base: 12 }}>
                            <Text
                                textAlign={"center"}
                                fontSize={{ base: "md", md: "3xl" }}
                                color="gray.300"
                            >
                                Create professional résumé with high quality
                                templates
                            </Text>
                        </Box>
                    </AnimationZoom>{" "}
                </Center>
            </Box>

            <Box width="100%">
                <Stack direction={"row"} justifyContent="center">
                    <Button as={RouterLink} to="/login">
                        Login
                    </Button>{" "}
                    <Button as={RouterLink} to="/register">
                        Register
                    </Button>
                </Stack>
            </Box>

            <Stack direction="row" justifyContent="space-evenly" pt="48">
                <Image
                    px={{ base: 4, md: 8, lg: 8 }}
                    justifySelf="flex-end"
                    height="512px"
                    objectFit="cover"
                    src={"images/cv_image_2.png"}
                ></Image>

                <Image
                    px={{ base: 4, md: 8, lg: 8 }}
                    justifySelf="flex-start"
                    height="512px"
                    objectFit="cover"
                    src={"images/cv_image.png"}
                ></Image>
            </Stack>
        </PageContainer>
    );
};

export default HomePage;
