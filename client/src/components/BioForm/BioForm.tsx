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
    const [zipCode, setZipCode] = useState<string>(
        currentState ? currentState.zipCode : ""
    );

    const { fetchBio, switchToBioView, saveBio } = useActions();

    useEffect(() => {
        console.log("Here at Bio Form");
        fetchBio();
    }, []);

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToBioView();
    };
    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        saveBio({
            firstName,
            lastName,
            address,
            country,
            zipCode,
        });
    };

    return (
        <form>
            <Stack spacing={6}>
                <FormControl id="first-name">
                    <FormLabel>First Name</FormLabel>
                    <Input
                        focusBorderColor="gray.300"
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
                        focusBorderColor="gray.300"
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
                        focusBorderColor="gray.300"
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
                        focusBorderColor="gray.300"
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
                        focusBorderColor="gray.300"
                        placeholder="ZIP code"
                        value={zipCode}
                        onChange={(event) => {
                            setZipCode(event.target.value);
                        }}
                    />
                </FormControl>
                <Stack direction="row">
                    <Button
                        backgroundColor="red.600"
                        _hover={{
                            bg: "red.700",
                        }}
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                    <Button
                        backgroundColor="red.600"
                        _hover={{
                            bg: "red.700",
                        }}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default BioForm;
