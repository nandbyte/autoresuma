import React, { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { FaPlus, FaTimes } from "react-icons/fa";

interface Props {}

const SkillAddition: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.skills);
    const { user } = useTypedSelector((state) => state.user);

    const [type, setType] = useState<string>("");

    const [description, setDescription] = useState<string>("");

    const [level, setLevel] = useState<string>("");

    const { addSkill, cancelAddSkill } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        cancelAddSkill();
    };

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        addSkill(
            {
                id: "0",
                type,
                description,
                level,
                serial: currentState.length,
                userId: user !== null ? user.id : "",
            },
            user !== null ? user.id : ""
        );
    };

    return (
        <Stack spacing={6}>
            <Heading variant="tab">Add New Skill</Heading>
            <form>
                <Stack spacing={6}>
                    <FormControl id="skill-title" isRequired>
                        <FormLabel>Skill Type</FormLabel>
                        <Input
                            placeholder="Programming"
                            value={type}
                            onChange={(event) => {
                                setType(event.target.value);
                            }}
                        />
                    </FormControl>

                    <FormControl id="skill-description">
                        <FormLabel>Description</FormLabel>
                        <Input
                            placeholder="C++ Engine Development"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                    </FormControl>

                    <FormControl id="skill-level" isRequired>
                        <FormLabel>Proficiency Level</FormLabel>
                        <Input
                            placeholder="Lead"
                            value={level}
                            onChange={(event) => {
                                setLevel(event.target.value);
                            }}
                        />
                    </FormControl>
                </Stack>
            </form>
            <Stack direction="row">
                <Button
                    disabled={type === "" || description === "" || level === ""}
                    leftIcon={<FaPlus />}
                    onClick={handleAdd}
                >
                    Add
                </Button>
                <Button leftIcon={<FaTimes />} onClick={handleCancel}>
                    Cancel
                </Button>
            </Stack>
        </Stack>
    );
};

export default SkillAddition;
