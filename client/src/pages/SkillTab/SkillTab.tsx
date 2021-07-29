import React from "react";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import SkillComponent from "../../components/SkillComponent";

const SkillTab = () => {
    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    <SkillComponent />
                    <SkillComponent />
                    <SkillComponent />
                </Stack>
            </Box>
        </>
    );
};

export default SkillTab;
