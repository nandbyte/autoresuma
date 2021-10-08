import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Skill } from "../../state/types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { FaSave, FaTimes, FaTrash } from "react-icons/fa";

interface Props {
    index: number;
    content: Skill;
}

const SkillForm: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.skills);
    const { user } = useTypedSelector((state) => state.user);

    const [type, setType] = useState<string>(
        currentState ? currentState[props.index].type : ""
    );

    const [description, setDescription] = useState<string>(
        currentState ? currentState[props.index].description : ""
    );

    const [level, setLevel] = useState<string>(
        currentState ? currentState[props.index].level : ""
    );

    const { switchToSkillView, updateSkill, deleteSkill } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToSkillView(props.index);
    };
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        deleteSkill(
            currentState,
            props.index,
            currentState[props.index],
            user !== null ? user.id : ""
        );
    };

    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        updateSkill(
            props.index,
            {
                id: currentState[props.index].id,
                type,
                description,
                level,
                serial: props.index,
                userId: user !== null ? user.id : "",
            },
            user !== null ? user.id : ""
        );
    };

    return (
        <Stack spacing={6}>
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
                    leftIcon={<FaSave />}
                    onClick={handleSave}
                >
                    Save
                </Button>
                <Button leftIcon={<FaTrash />} onClick={handleDelete}>
                    Delete
                </Button>
                <Button leftIcon={<FaTimes />} onClick={handleCancel}>
                    Cancel
                </Button>
            </Stack>
        </Stack>
    );
};

export default SkillForm;
