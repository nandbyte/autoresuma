import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Project } from "../../state/types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";

interface Props {
    index: number;
    content: Project;
}

const ProjectForm: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.projects);
    const { user } = useTypedSelector((state) => state.user);

    const [title, setTitle] = useState<string>(
        currentState ? currentState[props.index].title : ""
    );

    const [type, setType] = useState<string>(
        currentState ? currentState[props.index].type : ""
    );

    const [description, setDescription] = useState<string>(
        currentState ? currentState[props.index].description : ""
    );

    const [date, setDate] = useState<string>(
        currentState ? currentState[props.index].date : ""
    );

    const [language, setLanguage] = useState<string>(
        currentState ? currentState[props.index].language : ""
    );

    const [githubLink, setGithubLink] = useState<string>(
        currentState ? currentState[props.index].githubLink : ""
    );

    const { switchToProjectView, updateProject, deleteProject } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToProjectView(props.index);
    };
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        deleteProject(
            currentState,
            props.index,
            currentState[props.index],
            user !== null ? user.id : ""
        );
    };

    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        updateProject(
            props.index,
            {
                id: currentState[props.index].id,
                title,
                description,
                type,
                date,
                githubLink,
                language,
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
                    <FormControl id="project-title" isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="V8 Engine"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="project-type" isRequired>
                        <FormLabel>Type/Field</FormLabel>
                        <Input
                            placeholder="Engine"
                            value={type}
                            onChange={(event) => {
                                setType(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="project-description">
                        <FormLabel>Description</FormLabel>
                        <Input
                            placeholder="JavaScript and WebAssembly Engine written in C++"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="project-language" isRequired>
                        <FormLabel>Technology Used</FormLabel>
                        <Input
                            placeholder="C++, JS, Python"
                            value={language}
                            onChange={(event) => {
                                setLanguage(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="project-github-link">
                        <FormLabel>GitHub Link</FormLabel>
                        <Input
                            placeholder="https://github.com/v8/v8"
                            value={githubLink}
                            onChange={(event) => {
                                setGithubLink(event.target.value);
                            }}
                        />
                    </FormControl>

                    <FormControl id="project-date" isRequired>
                        <FormLabel>Completion Date</FormLabel>
                        <Input
                            placeholder="September, 2008 - Ongoing"
                            value={date}
                            onChange={(event) => {
                                setDate(event.target.value);
                            }}
                        />
                    </FormControl>
                </Stack>
            </form>
            <Stack direction="row">
                <Button
                    disabled={
                        title === "" ||
                        type === "" ||
                        language === "" ||
                        date === ""
                    }
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

export default ProjectForm;
