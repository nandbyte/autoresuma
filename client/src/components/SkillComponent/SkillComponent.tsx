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

const SkillComponent: React.FC<Props> = (props: Props) => {
    return (
        <Box w="100%" bgColor="gray.700" color="white" p={6} borderRadius="md">
            <form>
                <Stack spacing={6}>
                    <Stack direction="row" justifyContent="space-between">
                        <Heading fontSize={{ base: "lg", xl: "xl" }}>
                            Frontend Web Development
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
                    <FormControl id="skill-type" isRequired>
                        <FormLabel>Skill Type</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Frontend Web Development"
                        />
                    </FormControl>
                    <FormControl id="skill-description" isRequired>
                        <FormLabel>Description</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Proficiency in HTML, CSS, JS, ReactJS"
                        />
                    </FormControl>
                    <FormControl id="level" isRequired>
                        <FormLabel>Level</FormLabel>
                        <Input
                            focusBorderColor="gray.300"
                            placeholder="Junior"
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

export default SkillComponent;
