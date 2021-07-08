import { Heading, Text, Box } from "@chakra-ui/layout";
import React from "react";
import SubsectionDivider from "../../components/SubsectionDivider";

const EducationTab = () => {
    return (
        <>
            <Box py={6}>
                <Heading fontSize={24}>Education</Heading>
                <SubsectionDivider />
            </Box>
            <Text mt={4}>Work in Progress</Text>
        </>
    );
};

export default EducationTab;
