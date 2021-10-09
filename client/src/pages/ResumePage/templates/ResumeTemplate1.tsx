import React, { useEffect } from "react";
import "@fontsource/roboto";
import {
    Box,
    Text,
    Stack,
    Heading,
    Center,
    Link,
    SimpleGrid,
} from "@chakra-ui/layout";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const ResumeTemplate1 = () => {
    const { user } = useTypedSelector((state) => state.user);
    const { bio, educations, projects, experiences, skills } = useTypedSelector(
        (state) => state
    );

    const {
        fetchBio,
        fetchEducations,
        fetchProjects,
        fetchSkills,
        fetchExperiences,
    } = useActions();

    useEffect(() => {
        fetchBio(user !== null ? user.id : "");
        fetchEducations(user !== null ? user.id : "");
        fetchProjects(user !== null ? user.id : "");
        fetchSkills(user !== null ? user.id : "");
        fetchExperiences(user !== null ? user.id : "");

        console.log(localStorage.getItem("token"));
        console.log(educations.currentState);
    }, []); //eslint-disable-line

    const subtitleColor = "gray.500";
    const dateColor = "gray.500";
    const urlColor = "cyan.700";

    return (
        <Box
            id="resume"
            fontSize="sm"
            width="8.3in"
            height="11.7in"
            paddingLeft="0.50in"
            paddingRight="0.50in"
            paddingTop="0.50in"
            paddingBottom="0.50in"
            color="black"
        >
            <Stack id="resume-body" spacing="8">
                <Stack id="resume-header" spacing="1.5">
                    <Center>
                        <Stack spacing={1}>
                            <Center>
                                <Heading fontSize="4xl">
                                    {bio?.currentState?.firstName}{" "}
                                    {bio?.currentState?.lastName}
                                </Heading>
                            </Center>
                            <Center>
                                <Text fontSize="md">
                                    {bio?.currentState?.jobTitle}
                                </Text>
                            </Center>
                            <Center>
                                <Text fontSize="xx-small">
                                    {bio?.currentState?.address}
                                </Text>
                            </Center>
                            <Center>
                                <Stack direction="row" align="center">
                                    <Link
                                        color={urlColor}
                                        fontSize="xs"
                                        style={{ paddingRight: "3px" }}
                                    >
                                        <Stack
                                            direction="row"
                                            align="center"
                                            href={
                                                "mailto:" + user !== null
                                                    ? user?.email
                                                    : ""
                                            }
                                        >
                                            <FaEnvelope />
                                            <Text fontSize="xs">
                                                {user !== null
                                                    ? user?.email
                                                    : ""}
                                            </Text>
                                        </Stack>
                                    </Link>
                                    <Text fontSize="xs">|</Text>
                                    <Link
                                        color={urlColor}
                                        fontSize="xs"
                                        style={{
                                            paddingRight: "3px",
                                            paddingLeft: "3px",
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            align="center"
                                            href={
                                                "https://github.com/" +
                                                bio?.currentState?.githubLink +
                                                "/"
                                            }
                                        >
                                            <FaGithub />
                                            <Text fontSize="xs">
                                                {bio?.currentState?.githubLink}
                                            </Text>
                                        </Stack>
                                    </Link>
                                    <Text fontSize="xs">|</Text>
                                    <Link
                                        color={urlColor}
                                        fontSize="xs"
                                        style={{ paddingLeft: "3px" }}
                                        href={
                                            "https://www.linkedin.com/in/" +
                                            bio?.currentState?.linkedInLink +
                                            "/"
                                        }
                                    >
                                        <Stack direction="row" align="center">
                                            <FaLinkedin />
                                            <Text fontSize="xs">
                                                {
                                                    bio?.currentState
                                                        ?.linkedInLink
                                                }
                                            </Text>
                                        </Stack>
                                    </Link>
                                </Stack>
                            </Center>
                        </Stack>
                    </Center>
                </Stack>
                <Stack id="resume-education">
                    <Stack
                        id="resume-education-header"
                        direction="row"
                        alignItems="flex-end"
                        spacing="0"
                    >
                        <Heading fontSize="2xl">Education</Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "2px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>
                    </Stack>
                    <Stack id="resume-education-body" spacing="4">
                        {educations.currentState.map((education) => {
                            return (
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={4}
                                >
                                    <Box>
                                        <Text fontSize="md" fontWeight="bold">
                                            {education.certificateName}
                                        </Text>
                                        <Text
                                            color={subtitleColor}
                                            fontSize="xs"
                                            textTransform="uppercase"
                                        >
                                            {education.institution}
                                        </Text>
                                        <Text fontSize="xs">
                                            CGPA {education.result}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            color={dateColor}
                                            fontSize="xs"
                                            fontStyle="oblique"
                                        >
                                            {education.passingYear}
                                        </Text>
                                    </Box>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>

                <Stack id="resume-skills">
                    <Stack
                        id="resume-skill-header"
                        direction="row"
                        alignItems="flex-end"
                        spacing="0"
                    >
                        <Heading fontSize="2xl">Skill</Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "2px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>
                    </Stack>
                    <SimpleGrid id="resume-skill-body" columns={2}>
                        <Box>
                            <Text fontSize="md" fontWeight="bold">
                                Proficient in:
                            </Text>
                            {skills.currentState
                                .filter((skill) => skill.level === "Proficient")
                                .map((skill) => {
                                    return (
                                        <Stack
                                            key={skill.description}
                                            direction="row"
                                            justifyContent="space-between"
                                            spacing={4}
                                        >
                                            <Text fontSize="xs">
                                                {skill.description} (
                                                {skill.type})
                                            </Text>
                                        </Stack>
                                    );
                                })}
                        </Box>
                        <Box>
                            <Text fontSize="md" fontWeight="bold">
                                Familiar with:
                            </Text>
                            {skills.currentState
                                .filter((skill) => skill.level === "Familiar")
                                .map((skill) => {
                                    return (
                                        <Stack
                                            key={skill.description}
                                            direction="row"
                                            justifyContent="space-between"
                                            spacing={4}
                                        >
                                            <Text fontSize="xs">
                                                {skill.description} (
                                                {skill.type})
                                            </Text>
                                        </Stack>
                                    );
                                })}
                        </Box>
                    </SimpleGrid>
                </Stack>

                <Stack id="resume-project">
                    <Stack
                        id="resume-project-header"
                        direction="row"
                        alignItems="flex-end"
                        spacing="0"
                    >
                        <Heading fontSize="2xl">Project</Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "2px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>
                    </Stack>
                    <Stack id="resume-project-body" spacing="4">
                        {projects.currentState.map((project) => {
                            return (
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={4}
                                >
                                    <Box>
                                        <Text fontSize="md" fontWeight="bold">
                                            {project.title}
                                        </Text>
                                        <Text
                                            color={subtitleColor}
                                            fontSize="xs"
                                            textTransform="uppercase"
                                        >
                                            {project.description}
                                        </Text>

                                        <Text
                                            fontSize="xs"
                                            textDecoration="underline"
                                            fontWeight="bold"
                                        >
                                            Technology used: {project.language}
                                        </Text>
                                        <Text fontSize="xs">
                                            GitHub Link:
                                            <Link
                                                color={urlColor}
                                                fontSize="xs"
                                                p={2}
                                                style={{ paddingLeft: "3px" }}
                                            >
                                                {project.githubLink}
                                            </Link>
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            color={subtitleColor}
                                            fontSize="xs"
                                            fontStyle="oblique"
                                            align="right"
                                        >
                                            {project.type}
                                        </Text>
                                        <Text
                                            color={dateColor}
                                            fontSize="xs"
                                            fontStyle="oblique"
                                            align="right"
                                        >
                                            {project.date}
                                        </Text>
                                    </Box>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>

                <Stack id="resume-experience">
                    <Stack
                        id="resume-experience-header"
                        direction="row"
                        alignItems="flex-end"
                        spacing="0"
                    >
                        <Heading fontSize="2xl">Experience</Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "2px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>
                    </Stack>
                    <Stack id="resume-experience-body" spacing="4">
                        {experiences.currentState.map((experience) => {
                            return (
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={4}
                                >
                                    <Box>
                                        <Text fontSize="md" fontWeight="bold">
                                            {experience.designation}
                                        </Text>
                                        <Text
                                            color={subtitleColor}
                                            fontSize="xs"
                                            textTransform="uppercase"
                                        >
                                            {experience.workplace}
                                        </Text>
                                        <Text fontSize="xs">
                                            {experience.description}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            color={subtitleColor}
                                            fontSize="xs"
                                            fontStyle="oblique"
                                            align="right"
                                        >
                                            {experience.location}
                                        </Text>
                                        <Text
                                            color={dateColor}
                                            fontSize="xs"
                                            fontStyle="oblique"
                                            align="right"
                                        >
                                            {experience.dateFrom} to{" "}
                                            {experience.dateTo}
                                        </Text>
                                    </Box>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ResumeTemplate1;
