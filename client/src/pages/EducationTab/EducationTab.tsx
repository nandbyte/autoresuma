import React from "react";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import EducationComponent from "../../components/EducationComponent";

const EducationTab = () => {
    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    <EducationComponent />
                    <EducationComponent />
                    <EducationComponent />
                </Stack>
            </Box>
        </>
    );
};

export default EducationTab;
