import React from "react";
import { Text, Heading, Box, Link, Flex } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import Credit from "../../components/Credit";
import SectionDivider from "../../components/SectionDivider";
import Navbar from "../../components/Navbar";
import SubsectionDivider from "../../components/SubsectionDivider";

const ResumePage = () => {
    return (
        <Box justifyItems="center">
            <Navbar />
            <Flex width="100%" justifyContent="center">
                <Stack
                    px={{ base: 8, xl: 16 }}
                    justifyContent="space-between"
                    width={{ base: "100%", xl: "80em" }}
                >
                    <Box pt={{ base: 8, xl: 16 }}>
                        <Heading
                            textAlign={{ base: "center", lg: "left" }}
                            fontWeight="black"
                        >
                            Resume
                        </Heading>
                        <SubsectionDivider />
                    </Box>

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
                        <Link fontSize="lg" color="gray.200" fontWeight="bold">
                            Download as PDF
                        </Link>
                        <Link fontSize="lg" color="gray.200" fontWeight="bold">
                            Download as PNG
                        </Link>
                        <Link fontSize="lg" color="gray.200" fontWeight="bold">
                            Download as TEX
                        </Link>

                        <Text fontSize="md" pt={4}>
                            Want to update your information?{" "}
                            <Link
                                as={RouterLink}
                                fontSize="md"
                                color="gray.200"
                                fontWeight="bold"
                                to="/profile"
                            >
                                Go to Profile.
                            </Link>
                        </Text>
                    </Stack>

                    <Box textAlign="center" pt={36}>
                        <SectionDivider />
                        <Credit />
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};

export default ResumePage;
