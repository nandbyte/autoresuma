import React from "react";
import { Box } from "@chakra-ui/layout";
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Select,
    Button,
} from "@chakra-ui/react";

const BioTab = () => {
    return (
        <Box
            w="100%"
            bgColor="gray.700"
            color="white"
            p={6}
            borderRadius="md"
            my={6}
        >
            <form>
                <Stack spacing={6}>
                    <FormControl id="first-name" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input ringColor="red.500" placeholder="First Name" />
                    </FormControl>
                    <FormControl id="last-name" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="First Name" />
                    </FormControl>
                    <FormControl id="address">
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Address" />
                    </FormControl>
                    <FormControl id="country">
                        <FormLabel>Country</FormLabel>
                        <Select placeholder="Select country">
                            <option>Bangladesh</option>
                            <option>United States</option>
                        </Select>
                    </FormControl>
                    <FormControl id="zip-code">
                        <FormLabel>ZIP Code</FormLabel>
                        <Input placeholder="ZIP code" />
                    </FormControl>
                    <Stack direction="row">
                        <Button
                            backgroundColor="red.600"
                            _hover={{
                                bg: "red.700",
                            }}
                        >
                            Update
                        </Button>
                        <Button
                            backgroundColor="red.600"
                            _hover={{
                                bg: "red.700",
                            }}
                        >
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default BioTab;
