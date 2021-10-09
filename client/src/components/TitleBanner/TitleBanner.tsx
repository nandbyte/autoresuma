import React from "react";
import { Box, Heading, Center, Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";

interface Props {}

const TitleBanner: React.FC<Props> = (props: Props) => {
    return (
        <Box>
            <Center>
                <Link
                    as={RouterLink}
                    to="/"
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    <Heading
                        fontSize={{ base: 36, md: 48, lg: 64 }}
                        fontWeight="black"
                    >
                        autorésuma
                    </Heading>
                </Link>
            </Center>
        </Box>
    );
};

export default TitleBanner;
