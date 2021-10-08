import React from "react";
import { Heading, Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props {}

const LoggedIn: React.FC<Props> = (props: Props) => {
    return (
        <Stack spacing={6} p={4}>
            <Stack spacing={{ base: 8 }}>
                <Heading fontSize="lg" fontWeight="normal">
                    You are already logged in.
                    <Link
                        as={RouterLink}
                        textDecoration="underline"
                        fontSize="lg"
                        _hover={{
                            fontWeight: "bold",
                        }}
                        to="/profile/bio"
                    >
                        Click here
                    </Link>
                    to go to your profile.
                </Heading>
            </Stack>
        </Stack>
    );
};

export default LoggedIn;
