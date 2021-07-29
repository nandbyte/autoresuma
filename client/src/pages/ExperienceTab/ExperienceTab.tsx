import React from "react";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import ExperienceComponent from "../../components/ExperienceComponent";

const ExperienceTab = () => {
    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    <ExperienceComponent />
                    <ExperienceComponent />
                    <ExperienceComponent />
                </Stack>
            </Box>
        </>
    );
};

export default ExperienceTab;
