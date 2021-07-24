import React from "react";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import ProjectComponent from "../../components/ProjectComponent";

const ProjectTab = () => {
    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                </Stack>
            </Box>
        </>
    );
};

export default ProjectTab;
