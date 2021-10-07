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

import dummyId from "../../api/dummy";
import { FaEdit } from "react-icons/fa";

const BioView = () => {
    const { loading, saving, savedState, currentState, error } =
        useTypedSelector((state) => state.bio);

    const { fetchBio, switchToBioForm } = useActions();

    useEffect(() => {
        fetchBio(dummyId);
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
                    <FormLabel>{currentState?.firstName}</FormLabel>
                </FormControl>
                <FormControl id="last-name">
                    <FormLabel>
                        <Heading variant="label">Last Name</Heading>
                    </FormLabel>
                    <FormLabel>{currentState?.lastName} </FormLabel>
                </FormControl>
                <FormControl id="address">
                    <FormLabel>
                        <Heading variant="label">Address</Heading>
                    </FormLabel>
                    <FormLabel> {currentState?.address === ""} </FormLabel>
                </FormControl>
                <FormControl id="country">
                    <FormLabel>
                        <Heading variant="label">Country</Heading>
                    </FormLabel>
                    <FormLabel> {currentState?.country} </FormLabel>
                </FormControl>
                <FormControl id="zip-code">
                    <FormLabel>
                        <Heading variant="label">ZIP Code</Heading>
                    </FormLabel>
                    <FormLabel>{savedState?.zip}</FormLabel>
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
