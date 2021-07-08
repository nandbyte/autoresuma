import React from "react";
import { Text, Heading, Box, Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import Credit from "../../components/Credit";
import SectionDivider from "../../components/SectionDivider";
import Navbar from "../../components/Navbar";
import SubsectionDivider from "../../components/SubsectionDivider";

const ResumePage = () => {
    return (
        <>
            <Navbar />
            <Stack
                h="100vh"
                px={{ base: 12, lg: 16, xl: 24 }}
                justifyContent="space-between"
            >
                <Box pt={{ base: 12, lg: 24 }}>
                    <Heading fontWeight="black">Résumé</Heading>
                    <SubsectionDivider />
                    <Box pb={{ base: 8 }}>
                        <Button
                            w={48}
                            backgroundColor="red.600"
                            _hover={{
                                bg: "red.700",
                            }}
                        >
                            Generate Résumé
                        </Button>
                    </Box>
                    <Stack>
                        <Link
                            fontSize={{ base: 16, lg: 24 }}
                            color="gray.200"
                            fontWeight="bold"
                        >
                            Download as PDF
                        </Link>
                        <Link
                            fontSize={{ base: 16, lg: 24 }}
                            color="gray.200"
                            fontWeight="bold"
                        >
                            Download as PNG
                        </Link>
                        <Link
                            fontSize={{ base: 16, lg: 24 }}
                            color="gray.200"
                            fontWeight="bold"
                        >
                            Download as TEX
                        </Link>

                        <Text fontSize={{ base: 16, lg: 24 }} pt={4}>
                            Want to update your information?{" "}
                            <Link
                                as={RouterLink}
                                fontSize={{ base: 16, lg: 24 }}
                                color="gray.200"
                                fontWeight="bold"
                                to="/profile"
                            >
                                Go to Profile.
                            </Link>
                        </Text>
                    </Stack>
                </Box>
                <Box textAlign="center">
                    <SectionDivider />
                    <Credit />
                </Box>
            </Stack>
        </>
    );
};

export default ResumePage;
