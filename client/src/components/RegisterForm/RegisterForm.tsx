import React, { useState } from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

import { useActions } from "../../hooks/useActions";

interface Props {}

const RegisterForm: React.FC<Props> = (props: Props) => {
    const { register } = useActions();

    const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();

        const emailRegexPattern =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (password !== confirmPassword) {
            setError("The passwords do not match.");
        } else if (!emailRegexPattern.test(email)) {
            setError("Please provide a valid email address.");
        } else {
            setError("");
            register({
                id: "0",
                firstName,
                lastName,
                email,
                password,
            });
        }
    };

    const [firstName, setFirstName] = useState<string>("");

    const [lastName, setLastName] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    return (
        <Stack spacing={6} p={4}>
            <form>
                <Stack spacing={{ base: 8 }}>
                    {error !== "" ? (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle
                                mr={2}
                                fontSize={{ lg: "lg" }}
                                color="gray.900"
                            >
                                {error}
                            </AlertTitle>
                        </Alert>
                    ) : (
                        <></>
                    )}
                    <FormControl id="register-first-name">
                        <FormLabel>
                            <Heading
                                fontSize={{
                                    base: "xl",
                                    lg: "2xl",
                                }}
                                py={4}
                            >
                                First Name
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="John"
                            size="lg"
                            fontFamily="Montserrat"
                            value={firstName}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        />
                    </FormControl>{" "}
                    <FormControl id="register-last-name">
                        <FormLabel>
                            <Heading
                                fontSize={{
                                    base: "xl",
                                    lg: "2xl",
                                }}
                                py={4}
                            >
                                Last Name
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="Doe"
                            size="lg"
                            fontFamily="Montserrat"
                            value={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="register-email">
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
                            placeholder="johndoe@nomail.com"
                            size="lg"
                            fontFamily="Montserrat"
                            value={email}
                            type="email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="register-password">
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
                    </FormControl>{" "}
                    <FormControl id="register-password-confirmation">
                        <FormLabel>
                            <Heading
                                fontSize={{
                                    base: "xl",
                                    lg: "2xl",
                                }}
                                py={4}
                            >
                                Confirm Password
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="**********"
                            size="lg"
                            fontFamily="Montserrat"
                            value={confirmPassword}
                            type="password"
                            onChange={(event) => {
                                setConfirmPassword(event.target.value);
                            }}
                        />
                    </FormControl>
                </Stack>
            </form>
            <Stack direction="column" spacing="4" py={4}>
                <Button
                    onClick={handleRegister}
                    leftIcon={<FaUserPlus />}
                    fontSize="lg"
                    disabled={
                        email === "" ||
                        password === "" ||
                        firstName === "" ||
                        confirmPassword === ""
                    }
                >
                    Register
                </Button>
                <Heading fontSize="lg" fontWeight="normal">
                    Already have an account?
                    <Link
                        as={RouterLink}
                        textDecoration="underline"
                        fontSize="lg"
                        _hover={{
                            fontWeight: "bold",
                        }}
                        to="/login"
                    >
                        Login
                    </Link>
                </Heading>
            </Stack>
        </Stack>
    );
};

export default RegisterForm;
