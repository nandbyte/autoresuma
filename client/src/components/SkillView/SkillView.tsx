import React from "react";
import { Heading } from "@chakra-ui/layout";
import {
    IconButton,
    Button,
    FormControl,
    FormLabel,
    Stack,
    SkeletonText,
} from "@chakra-ui/react";
import { Skill } from "../../state/types";
import { FaArrowDown, FaArrowUp, FaEdit } from "react-icons/fa";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface Props {
    index: number;
    content: Skill;
}

const SkillView: React.FC<Props> = (props: Props) => {
    const { loading, currentState } = useTypedSelector((state) => state.skills);
    const { user } = useTypedSelector((state) => state.user);

    const { switchToSkillForm, swapSkill } = useActions();

    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToSkillForm(props.index);
    };

    const moveUp: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        swapSkill(
            currentState[props.index - 1],
            currentState[props.index],
            user !== null ? user.id : ""
        );
    };

    const moveDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        swapSkill(
            currentState[props.index],
            currentState[props.index + 1],
            user !== null ? user.id : ""
        );
    };

    return (
        <Stack>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="column" pb={2}>
                    <Heading variant="tab">{props.content.description}</Heading>
                    <Heading fontSize="lg" color="gray.500">
                        {props.content.type}
                    </Heading>
                </Stack>
                <Stack direction="row">
                    <IconButton
                        disabled={props.index === 0}
                        onClick={moveUp}
                        aria-label="Move Up"
                        borderRadius="md"
                        icon={<FaArrowUp />}
                    />
                    <IconButton
                        disabled={props.index === currentState.length - 1}
                        onClick={moveDown}
                        aria-label="Move Down"
                        borderRadius="md"
                        icon={<FaArrowDown />}
                    />
                </Stack>
            </Stack>
            <form>
                <Stack spacing={6}>
                    <SkeletonText
                        noOfLines={3}
                        isLoaded={!loading[props.index]}
                    >
                        <FormControl id="skill-level">
                            <FormLabel>{props.content.level}</FormLabel>
                        </FormControl>
                    </SkeletonText>
                </Stack>
            </form>
            <Stack direction="row" pt={2}>
                <Button leftIcon={<FaEdit />} onClick={handleUpdate}>
                    Edit
                </Button>
            </Stack>
        </Stack>
    );
};

export default SkillView;
