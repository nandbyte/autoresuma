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

import { FaSave, FaTimes } from "react-icons/fa";

import { countries } from "../../data/countries";

const BioForm = () => {
    const { currentState } = useTypedSelector((state) => state.bio);
    const { user } = useTypedSelector((state) => state.user);

    const [firstName, setFirstName] = useState<string>(
        currentState ? currentState.firstName : ""
    );
    const [lastName, setLastName] = useState<string>(
        currentState ? currentState.lastName : ""
    );

    const [title, setTitle] = useState<string>(
        currentState ? currentState.title : ""
    );

    const [githubLink, setGithubLink] = useState<string>(
        currentState ? currentState.githubLink : ""
    );

    const [linkedInLink, setLinkedInLink] = useState<string>(
        currentState ? currentState.linkedInLink : ""
    );

    const [address, setAddress] = useState<string>(
        currentState ? currentState.address : ""
    );

    const [zip, setZip] = useState<string>(
        currentState ? currentState.zip : ""
    );

    const [country, setCountry] = useState<string>(
        currentState ? currentState.country : ""
    );

    const { fetchBio, switchToBioView, saveBio } = useActions();

    useEffect(() => {
        fetchBio(user !== null ? user.id : "");
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
                zip,
                country,
                title,
                githubLink,
                linkedInLink,
                userId: user !== null ? user.id : "",
            },
            user !== null ? user.id : ""
        );
    };

    return (
        <form>
            <Stack spacing={6}>
                <FormControl id="first-name">
                    <FormLabel>First Name</FormLabel>
                    <Input
                        placeholder="John"
                        value={firstName}
                        onChange={(event) => {
                            setFirstName(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="last-name">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        placeholder="Doe"
                        value={lastName}
                        onChange={(event) => {
                            setLastName(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="job-title">
                    <FormLabel>Job Title</FormLabel>
                    <Input
                        placeholder="Junior Web Developer"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="github-user-name">
                    <FormLabel>Github Username</FormLabel>
                    <Input
                        placeholder="torvalds"
                        value={githubLink}
                        onChange={(event) => {
                            setGithubLink(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl id="linkedin-link">
                    <FormLabel>LinkedIn Profile Name</FormLabel>
                    <Input
                        placeholder="torvalds-linus"
                        value={linkedInLink}
                        onChange={(event) => {
                            setLinkedInLink(event.target.value);
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
                        colorScheme="gray"
                        value={country}
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }}
                    >
                        {countries.map((country) => {
                            return (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            );
                        })}
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
