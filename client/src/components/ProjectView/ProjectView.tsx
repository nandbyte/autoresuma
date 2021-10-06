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
import { Project } from "../../state/types";
import { FaArrowDown, FaArrowUp, FaEdit } from "react-icons/fa";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import dummyId from "../../api/dummy";

interface Props {
    index: number;
    content: Project;
}

const ProjectView: React.FC<Props> = (props: Props) => {
    const { loading, currentState } = useTypedSelector(
        (state) => state.projects
    );

    const { switchToProjectForm, swapProject } = useActions();

    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToProjectForm(props.index);
    };

    const moveUp: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        swapProject(
            currentState[props.index - 1],
            currentState[props.index],
            dummyId
        );
    };
    const moveDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        swapProject(
            currentState[props.index],
            currentState[props.index + 1],
            dummyId
        );
    };

    return (
        <Stack>
            <Stack direction="row" justifyContent="space-between">
                <Heading variant="tab">{props.content.title}</Heading>
                <Heading fontSize="lg" color="gray.500">
                    {props.content.type}
                </Heading>
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
                        <FormControl id="project-description">
                            <FormLabel>
                                <Heading variant="label">Description</Heading>
                            </FormLabel>
                            <FormLabel>{props.content.description}</FormLabel>
                        </FormControl>
                    </SkeletonText>
                    <SkeletonText
                        noOfLines={3}
                        isLoaded={!loading[props.index]}
                    >
                        <FormControl id="project-language">
                            <FormLabel>
                                <Heading variant="label">
                                    Technology Used
                                </Heading>
                            </FormLabel>
                            <FormLabel>{props.content.language}</FormLabel>
                        </FormControl>
                    </SkeletonText>
                    <SkeletonText
                        noOfLines={3}
                        isLoaded={!loading[props.index]}
                    >
                        <FormControl id="project-date">
                            <FormLabel>
                                <Heading variant="label">
                                    Completion Date
                                </Heading>
                            </FormLabel>
                            <FormLabel>{props.content.date}</FormLabel>
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

export default ProjectView;
