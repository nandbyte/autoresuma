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

const ProjectComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box w="100%" bgColor="gray.700" color="white" p={6} borderRadius="md">
            <form>
                <Stack spacing={6}>
                    <Stack direction="row" justifyContent="space-between">
                        <Heading fontSize={{ base: "lg", xl: "xl" }}>
                            Autoresuma
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
                    <FormControl id="project-title" isRequired>
                        <FormLabel>Project Title</FormLabel>
                        <Input placeholder="Google" />
                    </FormControl>
                    <FormControl id="project-description" isRequired>
                        <FormLabel>Project Description</FormLabel>
                        <Input placeholder="Search Engine" />
                    </FormControl>
                    <FormControl id="language">
                        <FormLabel>Language</FormLabel>
                        <Input placeholder="C++, JS" />
                    </FormControl>
                    <FormControl id="technology">
                        <FormLabel>Technology</FormLabel>
                        <Input placeholder="Flutter, Firebase" />
                    </FormControl>
                    <FormControl id="github-link">
                        <FormLabel>Github Link</FormLabel>
                        <Input placeholder="https://github.com/nandbyte/autoresuma" />
                    </FormControl>
                    <FormControl id="date">
                        <FormLabel>Date of Completion</FormLabel>
                        <Input placeholder="December, 2020" />
                    </FormControl>
                    <Stack direction="row">
                        <Button>Update</Button>
                        <Button>Save</Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default ProjectComponent;
