import React, { useEffect } from "react";
import { FormControl, FormLabel, Stack, Button, Text } from "@chakra-ui/react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const BioView = () => {
    const { loading, saving, savedState, currentState, error } =
        useTypedSelector((state) => state.bio);

    const { fetchBio, switchToBioForm } = useActions();

    useEffect(() => {
        fetchBio();
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
                <FormControl id="first-name">
                    <FormLabel>
                        <Text textDecoration="underline">First Name</Text>
                    </FormLabel>
                    <FormLabel>{currentState?.firstName}</FormLabel>
                </FormControl>
                <FormControl id="last-name">
                    <FormLabel>
                        <Text textDecoration="underline">Last Name</Text>
                    </FormLabel>
                    <FormLabel>{currentState?.lastName} </FormLabel>
                </FormControl>
                <FormControl id="address">
                    <FormLabel>
                        <Text textDecoration="underline">Address</Text>
                    </FormLabel>
                    <FormLabel> {currentState?.address} </FormLabel>
                </FormControl>
                <FormControl id="country">
                    <FormLabel>
                        <Text textDecoration="underline">Country</Text>
                    </FormLabel>
                    <FormLabel> {currentState?.country} </FormLabel>
                </FormControl>
                <FormControl id="zip-code">
                    <FormLabel>
                        <Text textDecoration="underline">ZIP Code</Text>
                    </FormLabel>
                    <FormLabel>{savedState?.zipCode}</FormLabel>
                </FormControl>
                <Stack direction="row">
                    <Button
                        backgroundColor="red.600"
                        _hover={{
                            bg: "red.700",
                        }}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default BioView;
