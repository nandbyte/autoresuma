import React, { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Select,
    Button,
} from "@chakra-ui/react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import dummyId from "../../api/dummy";
import { FaSave, FaTimes } from "react-icons/fa";

const BioForm = () => {
    const { currentState } = useTypedSelector((state) => state.bio);

    const [firstName, setFirstName] = useState<string>(
        currentState ? currentState.firstName : ""
    );
    const [lastName, setLastName] = useState<string>(
        currentState ? currentState.lastName : ""
    );
    const [address, setAddress] = useState<string>(
        currentState ? currentState.address : ""
    );
    const [country, setCountry] = useState<string>(
        currentState ? currentState.country : ""
    );
    const [zip, setZip] = useState<string>(
        currentState ? currentState.zip : ""
    );

    const { fetchBio, switchToBioView, saveBio } = useActions();

    useEffect(() => {
        fetchBio(dummyId);
    }, []);

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToBioView();
    };

    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        saveBio(
            {
                id: currentState === null ? "0" : currentState.id,
                firstName,
                lastName,
                address,
                country,
                zip,
                userId: dummyId,
            },
            dummyId
        );
    };

    return (
        <form>
            <Stack spacing={6}>
                <FormControl id="first-name">
                    <FormLabel>First Name</FormLabel>
                    <Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={(event) => {
                            setFirstName(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="last-name">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => {
                            setLastName(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="address">
                    <FormLabel>Address</FormLabel>
                    <Input
                        placeholder="Address"
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="country">
                    <FormLabel>Country</FormLabel>
                    <Select
                        placeholder="Select country"
                        value={country}
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }}
                    >
                        <option>Bangladesh</option>
                        <option>United States</option>
                    </Select>
                </FormControl>
                <FormControl id="zip-code">
                    <FormLabel>ZIP Code</FormLabel>
                    <Input
                        placeholder="ZIP code"
                        value={zip}
                        onChange={(event) => {
                            setZip(event.target.value);
                        }}
                    />
                </FormControl>
                <Stack direction="row">
                    <Button leftIcon={<FaSave />} onClick={handleSave}>
                        Save
                    </Button>
                    <Button leftIcon={<FaTimes />} onClick={handleCancel}>
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default BioForm;
