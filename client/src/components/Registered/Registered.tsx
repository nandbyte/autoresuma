import React from "react";
import { Heading, Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props {}

const Registered: React.FC<Props> = (props: Props) => {
    return (
        <Stack spacing={6} p={4}>
            <Stack spacing={{ base: 8 }}>
                <Heading fontSize="lg" fontWeight="normal">
                    Registration Successful. Please
                    <Link
                        as={RouterLink}
                        textDecoration="underline"
                        fontSize="lg"
                        _hover={{
                            fontWeight: "bold",
                        }}
                        to="/login"
                    >
                        log in.
                    </Link>
                </Heading>
            </Stack>
        </Stack>
    );
};

export default Registered;
