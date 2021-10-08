import React, { useEffect } from "react";
import {
    FormControl,
    FormLabel,
    Stack,
    Button,
    Heading,
} from "@chakra-ui/react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import { FaEdit } from "react-icons/fa";

const BioView = () => {
    const { currentState } = useTypedSelector((state) => state.bio);
    const { user } = useTypedSelector((state) => state.user);

    const { fetchBio, switchToBioForm } = useActions();

    useEffect(() => {
        fetchBio(user !== null ? user.id : "");
    }, []);

    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToBioForm();
    };

    return (
        <form>
            <Stack spacing={6}>
                <Heading variant="tab">Biodata</Heading>

                <FormControl id="first-name">
                    <FormLabel>
                        <Heading variant="label">First Name</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.firstName !== null
                                ? currentState.firstName
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="last-name">
                    <FormLabel>
                        <Heading variant="label">Last Name</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.lastName !== null
                                ? currentState.lastName
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="job-title">
                    <FormLabel>
                        <Heading variant="label">Job Title</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.jobTitle !== null
                                ? currentState.jobTitle
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="github-link">
                    <FormLabel>
                        <Heading variant="label">GitHub Username</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.githubLink !== null
                                ? currentState.githubLink
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="linkedin-link">
                    <FormLabel>
                        <Heading variant="label">LinkedIn Profile Name</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.linkedInLink !== null
                                ? currentState.linkedInLink
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="address">
                    <FormLabel>
                        <Heading variant="label">Address</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.address !== null
                                ? currentState.address
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="zip-code">
                    <FormLabel>
                        <Heading variant="label">ZIP Code</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.zip !== null
                                ? currentState.zip
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <FormControl id="country">
                    <FormLabel>
                        <Heading variant="label">Country</Heading>
                    </FormLabel>
                    <FormLabel>
                        {currentState !== null
                            ? currentState.country !== null
                                ? currentState.country
                                : "-"
                            : "-"}
                    </FormLabel>
                </FormControl>

                <Stack direction="row">
                    <Button leftIcon={<FaEdit />} onClick={handleUpdate}>
                        Edit
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default BioView;
