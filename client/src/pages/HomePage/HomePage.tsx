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
import AnimationZoom from "../../components/AnimationZoom";
import PageContainer from "../../components/PageContainer";

const HomePage = () => {
    return (
        <PageContainer>
            <Box textAlign="center" pt={{ base: 22, lg: 32 }}>
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
                    <SimpleGrid columns={2} gap={6} width="500px">
                        <Link
                            as={RouterLink}
                            backgroundColor="red.600"
                            _hover={{
                                bg: "red.700",
                            }}
                            to="/login"
                        >
                            Login
                        </Link>

                        <Link
                            as={RouterLink}
                            backgroundColor="red.600"
                            _hover={{
                                bg: "red.700",
                            }}
                            to="/register"
                        >
                            Register
                        </Link>
                    </SimpleGrid>
                </Center>
            </Box>
        </PageContainer>
    );
};

export default HomePage;
