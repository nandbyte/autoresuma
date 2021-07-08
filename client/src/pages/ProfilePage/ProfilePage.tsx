import React from "react";
import { Heading, Stack, Box } from "@chakra-ui/layout";
import Navbar from "../../components/Navbar";
import TabView, { TabObject } from "../../components/TabView/TabView";
import Credit from "../../components/Credit";
import SectionDivider from "../../components/SectionDivider";

import EducationTab from "./EducationTab";
import BioTab from "./BioTab";
import SkillTab from "./SkillTab";
import ExperienceTab from "./ExperienceTab";

const tabs: Array<TabObject> = [
    {
        tabName: "Bio",
        tabPanel: <BioTab />,
    },
    {
        tabName: "Education",
        tabPanel: <EducationTab />,
    },
    {
        tabName: "Skill",
        tabPanel: <SkillTab />,
    },
    {
        tabName: "Experience",
        tabPanel: <ExperienceTab />,
    },
];

const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <Stack
                h="100vh"
                px={{ base: 12, lg: 16, xl: 24 }}
                justifyContent="space-between"
            >
                <Box py={{ base: 12, lg: 24 }}>
                    <Heading
                        pb={12}
                        textAlign={{ base: "center", lg: "left" }}
                        fontWeight="black"
                    >
                        Profile
                    </Heading>

                    <TabView tabList={tabs} />
                </Box>
                <Box>
                    <SectionDivider />
                    <Credit />
                </Box>
            </Stack>
        </>
    );
};

export default ProfilePage;
