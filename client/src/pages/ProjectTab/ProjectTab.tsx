import React, { useEffect } from "react";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Stack, Button } from "@chakra-ui/react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ProjectView from "../../components/ProjectView";
import ProjectForm from "../../components/ProjectForm";
import ProjectAddition from "../../components/ProjectAddition";

import { FaPlus } from "react-icons/fa";

const ProjectTab = () => {
    const { currentState, updating, loading, adding } = useTypedSelector(
        (state) => state.projects
    );
    const { user } = useTypedSelector((state) => state.user);

    const { fetchProjects, switchToAddProjectMode } = useActions();

    useEffect(() => {
        fetchProjects(user !== null ? user.id : "");
    }, []);

    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    {currentState.length === 0 ? (
                        <Center>
                            <Heading variant="tab">No Projects Added.</Heading>
                        </Center>
                    ) : (
                        <></>
                    )}
                    {currentState.map((project, index) => {
                        return (
                            <Box
                                key={project.title + project.serial}
                                w="100%"
                                bgColor="gray.700"
                                color="white"
                                p={6}
                                borderRadius="md"
                            >
                                {updating[index] && !loading[index] ? (
                                    <ProjectForm
                                        key={index}
                                        index={index}
                                        content={project}
                                    />
                                ) : (
                                    <ProjectView
                                        key={index}
                                        index={index}
                                        content={project}
                                    />
                                )}
                            </Box>
                        );
                    })}
                    {adding === true ? (
                        <Box
                            w="100%"
                            bgColor="gray.700"
                            color="white"
                            p={6}
                            borderRadius="md"
                        >
                            <ProjectAddition />
                        </Box>
                    ) : (
                        <Center>
                            <Button
                                onClick={switchToAddProjectMode}
                                leftIcon={<FaPlus />}
                            >
                                Add Project
                            </Button>
                        </Center>
                    )}
                </Stack>
            </Box>
        </>
    );
};

export default ProjectTab;
