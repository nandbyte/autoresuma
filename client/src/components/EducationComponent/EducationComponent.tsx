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

const EducationComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box w="100%" bgColor="gray.700" color="white" p={6} borderRadius="md">
            <form>
                <Stack spacing={6}>
                    <Stack direction="row" justifyContent="space-between">
                        <Heading fontSize={{ base: "lg", xl: "xl" }}>
                            Bachelor of Science
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
                    <FormControl id="certificate-name" isRequired>
                        <FormLabel>Certificate</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Bachelor of Science"
                        />
                    </FormControl>
                    <FormControl id="year-of-passing" isRequired>
                        <FormLabel>Year of Passing</FormLabel>
                        <Input focusBorderColor="gray.300" placeholder="2020" />
                    </FormControl>
                    <FormControl id="result" isRequired>
                        <FormLabel>Result</FormLabel>
                        <Input focusBorderColor="gray.300" placeholder="5.00" />
                    </FormControl>
                    <FormControl id="institution" isRequired>
                        <FormLabel>Institution</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Islamic University of Technology"
                        />
                    </FormControl>
                    <FormControl id="subject" isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Computer Science and Engineering"
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

export default EducationComponent;
