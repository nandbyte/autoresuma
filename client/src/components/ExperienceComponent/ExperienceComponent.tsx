import React from "react";
import { Box } from "@chakra-ui/layout";
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    IconButton,
} from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Props {}

const ExperienceComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box w="100%" bgColor="gray.700" color="white" p={6} borderRadius="md">
            <form>
                <Stack spacing={6}>
                    <Stack direction="row" justifyContent="space-between">
                        <Heading fontSize={{ base: "lg", xl: "xl" }}>
                            Junior Web Developer
                        </Heading>
                        <Stack direction="row">
                            <IconButton
                                aria-label="Move Up"
                                w="10px"
                                borderRadius="md"
                                icon={<FaArrowUp />}
                                backgroundColor="red.600"
                                _hover={{
                                    bg: "red.700",
                                }}
                            />
                            <IconButton
                                aria-label="Move Down"
                                w="10px"
                                borderRadius="md"
                                icon={<FaArrowDown />}
                                backgroundColor="red.600"
                                _hover={{
                                    bg: "red.700",
                                }}
                            />
                        </Stack>
                    </Stack>
                    <FormControl id="designation" isRequired>
                        <FormLabel>Designation</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Junior Web Developer"
                        />
                    </FormControl>
                    <FormControl id="description" isRequired>
                        <FormLabel>Description</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Web development with React and Redux"
                        />
                    </FormControl>
                    <FormControl id="workplace" isRequired>
                        <FormLabel>Workplace</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Google Ireland"
                        />
                    </FormControl>
                    <FormControl id="location" isRequired>
                        <FormLabel>Location</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Dublin, Ireland"
                        />
                    </FormControl>
                    <FormControl id="starting-date" isRequired>
                        <FormLabel>Starting Date</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Calendar"
                        />
                    </FormControl>
                    <FormControl id="ending-date" isRequired>
                        <FormLabel>Ending Date</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Calendar"
                        />
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

export default ExperienceComponent;
