import React from "react";
import { Heading, Stack, Box } from "@chakra-ui/layout";

import Credit from "../../components/Credit";
import SectionDivider from "../../components/SectionDivider";
import Navbar from "../../components/Navbar";
import TabView, { TabObject } from "../../components/TabView/TabView";

import BioTab from "../BioTab";
import EducationTab from "../EducationTab";
import ProjectTab from "../ProjectTab";
import SkillTab from "../SkillTab";
import ExperienceTab from "../ExperienceTab";
import { Flex } from "@chakra-ui/react";
import SubsectionDivider from "../../components/SubsectionDivider";
import PageContainer from "../../components/PageContainer";

const tabs: Array<TabObject> = [
    {
        tabName: "Bio",
        tabPanel: <BioTab />,
        tabLink: "/profile/bio",
    },
    {
        tabName: "Education",
        tabPanel: <EducationTab />,
        tabLink: "/profile/education",
    },
    {
        tabName: "Projects",
        tabPanel: <ProjectTab />,
        tabLink: "/profile/projects",
    },

    {
        tabName: "Skill",
        tabPanel: <SkillTab />,
        tabLink: "/profile/skill",
    },
    {
        tabName: "Experience",
        tabPanel: <ExperienceTab />,
        tabLink: "/profile/experience",
    },
];

const ProfilePage = () => {
    return (
        <PageContainer>
            <Heading
                textAlign={{ base: "center", lg: "left" }}
                fontWeight="black"
            >
                Profile
            </Heading>
            <SubsectionDivider />
            <TabView tabList={tabs} />
        </PageContainer>
    );
};

export default ProfilePage;
