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

import dummyId from "../../api/dummy";
import { FaPlus, FaTimes } from "react-icons/fa";

interface Props {}

const ProjectAddition: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.projects);

    const [title, setTitle] = useState<string>("");

    const [type, setType] = useState<string>("");

    const [description, setDescription] = useState<string>("");

    const [date, setDate] = useState<string>("");

    const [language, setLanguage] = useState<string>("");

    const [githubLink, setGithubLink] = useState<string>("");

    const { addProject, cancelAddProject } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        cancelAddProject();
    };

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        addProject(
            {
                id: "0",
                title,
                description,
                type,
                date,
                githubLink,
                language,
                serial: currentState.length,
                userId: dummyId,
            },
            dummyId
        );
    };

    return (
        <Stack spacing={6}>
            <Heading variant="tab">Add New Project</Heading>
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

export default ProjectAddition;
