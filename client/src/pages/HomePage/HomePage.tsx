import React from "react";
import {
    Text,
    Heading,
    Box,
    Center,
    Link,
    SimpleGrid,
} from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import Credit from "../../components/Credit";
import SectionDivider from "../../components/SectionDivider";
import AnimationZoom from "../../components/AnimationZoom";

const HomePage = () => {
    return (
        <Stack
            h="100vh"
            px={{ base: 12, lg: 16, xl: 24 }}
            justifyContent="space-between"
        >
            <Box textAlign="center" pt={{ base: 36, lg: 48 }}>
                <AnimationZoom>
                    <Heading
                        fontSize={{ base: 36, md: 64, lg: 96 }}
                        fontWeight="black"
                    >
                        autorésuma
                    </Heading>
                    <Box py={{ base: 12, lg: 36 }}>
                        <Text
                            fontSize={{ base: 14, md: 24, lg: 36 }}
                            color="gray.300"
                        >
                            Automatically create professional résumé
                        </Text>
                        <Text
                            fontSize={{ base: 14, md: 24, lg: 36 }}
                            color="gray.300"
                        >
                            to improve your programming career
                        </Text>
                    </Box>
                </AnimationZoom>
                <Center>
                    <SimpleGrid columns={2}>
                        <AnimationZoom>
                            <Link
                                as={RouterLink}
                                backgroundColor="red.600"
                                _hover={{
                                    bg: "red.700",
                                }}
                                to="/profile"
                            >
                                Login
                            </Link>
                        </AnimationZoom>
                        <AnimationZoom>
                            <Link
                                as={RouterLink}
                                backgroundColor="red.600"
                                _hover={{
                                    bg: "red.700",
                                }}
                                to="/profile"
                            >
                                Register
                            </Link>
                        </AnimationZoom>
                    </SimpleGrid>
                </Center>
            </Box>
            <Box textAlign="center">
                <SectionDivider />
                <Credit />
            </Box>
        </Stack>
    );
};

export default HomePage;
