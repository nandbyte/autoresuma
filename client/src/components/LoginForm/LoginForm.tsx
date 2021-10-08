import React, { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

import { useActions } from "../../hooks/useActions";

interface Props {}

const LoginForm: React.FC<Props> = (props: Props) => {
    const { logIn } = useActions();

    const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        logIn(email, password);
    };

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    return (
        <Stack spacing={6} p={4}>
            <form>
                <Stack spacing={{ base: 8 }}>
                    <FormControl id="login-email">
                        <FormLabel>
                            <Heading
                                fontSize={{
                                    base: "xl",
                                    lg: "2xl",
                                }}
                                py={4}
                            >
                                Email
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="gaben@nomail.com"
                            size="lg"
                            fontFamily="Montserrat"
                            value={email}
                            type="email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="login-password">
                        <FormLabel>
                            <Heading
                                fontSize={{
                                    base: "xl",
                                    lg: "2xl",
                                }}
                                py={4}
                            >
                                Password
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="**********"
                            size="lg"
                            fontFamily="Montserrat"
                            value={password}
                            type="password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </FormControl>
                </Stack>
            </form>
            <Stack direction="column" spacing="4" py={4}>
                <Button
                    onClick={handleLogin}
                    leftIcon={<FaSignInAlt />}
                    fontSize="lg"
                    disabled={email === "" || password === ""}
                >
                    Login
                </Button>
                <Heading fontSize="lg" fontWeight="normal">
                    Don't have an account?
                    <Link
                        as={RouterLink}
                        textDecoration="underline"
                        fontSize="lg"
                        _hover={{
                            fontWeight: "bold",
                        }}
                        to="/profile/bio"
                    >
                        Register
                    </Link>
                </Heading>
            </Stack>
        </Stack>
    );
};

export default LoginForm;
