import React from "react";
import { Text, Heading, Box, Link, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link as RouterLink } from "react-router-dom";
import AnimationZoom from "../../components/AnimationZoom";
import PageContainer from "../../components/PageContainer";
import { Redirect } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HomePage = () => {
    const { loggedIn } = useTypedSelector((state) => state.user);
    if (loggedIn) {
        return <Redirect to="/profile/bio" />;
    }
    return (
        <PageContainer>
            <Box textAlign="left" pt={{ base: 12, lg: 24 }}>
                <AnimationZoom>
                    <Heading
                        fontSize={{ base: "3xl", md: "6xl" }}
                        fontWeight="bold"
                    >
                        autorésuma
                    </Heading>
                    <Box py={{ base: 12 }}>
                        <Text
                            fontSize={{ base: "md", md: "3xl" }}
                            color="gray.300"
                            textAlign="left"
                        >
                            Create professional résumé with high quality
                            templates
                        </Text>
                    </Box>
                </AnimationZoom>

                <Link
                    px={12}
                    py={2}
                    as={RouterLink}
                    backgroundColor="red.600"
                    _hover={{
                        bg: "red.700",
                    }}
                    fontSize="2xl"
                    to="/login"
                >
                    Create Resume
                </Link>
            </Box>

            <Stack direction="row" justifyContent="space-around" pt="48">
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
