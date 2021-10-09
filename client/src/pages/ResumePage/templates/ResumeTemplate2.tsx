import React, { useEffect } from "react";
import "@fontsource/roboto";
import { Box, Text, Stack, Heading, Center, Link } from "@chakra-ui/layout";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const ResumeTemplate2 = () => {
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

    const subtitleColor = "black";
    const dateColor = "black";
    const urlColor = "black";

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
                                <Stack direction="row" align="center">
                                    <Text
                                        fontSize="xs"
                                        style={{ paddingRight: "3px" }}
                                    >
                                        {user !== null ? user?.email : ""}
                                    </Text>
                                    <Text fontSize="xs">|</Text>
                                    <Text
                                        fontSize="xs"
                                        style={{
                                            paddingRight: "3px",
                                            paddingLeft: "3px",
                                        }}
                                    >
                                        {"https://github.com/" +
                                            bio?.currentState?.githubLink +
                                            "/"}
                                    </Text>
                                    <Text fontSize="xs">|</Text>
                                    <Text
                                        fontSize="xs"
                                        style={{ paddingLeft: "3px" }}
                                    >
                                        {"https://www.linkedin.com/in/" +
                                            bio?.currentState?.linkedInLink +
                                            "/"}
                                    </Text>
                                </Stack>
                            </Center>
                        </Stack>
                    </Center>
                </Stack>
                {educations.currentState.length !== 0 ? (
                    <Stack id="resume-education">
                        <Stack
                            id="resume-education-header"
                            direction="row"
                            alignItems="flex-end"
                            spacing="0"
                        >
                            <Heading
                                fontSize="2xl"
                                textTransform="uppercase"
                                fontWeight="thin"
                            >
                                Education
                            </Heading>
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
                                            <Text
                                                fontSize="md"
                                                fontWeight="bold"
                                            >
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
                                                textTransform="uppercase"
                                            >
                                                {education.passingYear}
                                            </Text>
                                        </Box>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    </Stack>
                ) : (
                    <></>
                )}

                {experiences.currentState.length !== 0 ? (
                    <Stack id="resume-experience">
                        <Stack
                            id="resume-experience-header"
                            direction="row"
                            alignItems="flex-end"
                            spacing="0"
                        >
                            <Heading
                                fontSize="2xl"
                                textTransform="uppercase"
                                fontWeight="thin"
                            >
                                Work Experience
                            </Heading>
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
                                            <Stack
                                                direction="row"
                                                alignItems="flex-end"
                                            >
                                                <Text
                                                    color={subtitleColor}
                                                    fontSize="xs"
                                                    textTransform="uppercase"
                                                    fontWeight="bold"
                                                >
                                                    {experience.workplace}
                                                </Text>
                                                <Text fontSize="xs">|</Text>
                                                <Text
                                                    fontSize="xs"
                                                    textTransform="uppercase"
                                                >
                                                    {experience.designation}
                                                </Text>
                                            </Stack>
                                            <Text fontSize="xs">
                                                {experience.description}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text
                                                color={subtitleColor}
                                                fontSize="xs"
                                                textTransform="uppercase"
                                                align="right"
                                            >
                                                {experience.location}
                                            </Text>
                                            <Text
                                                color={dateColor}
                                                fontSize="xs"
                                                textTransform="uppercase"
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
                ) : (
                    <></>
                )}

                {projects.currentState.length !== 0 ? (
                    <Stack id="resume-project">
                        <Stack
                            id="resume-project-header"
                            direction="row"
                            alignItems="flex-end"
                            spacing="0"
                        >
                            <Heading
                                fontSize="2xl"
                                textTransform="uppercase"
                                fontWeight="thin"
                            >
                                Project
                            </Heading>
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
                                            <Stack
                                                direction="row"
                                                alignItems="baseline"
                                            >
                                                <Text
                                                    textTransform="uppercase"
                                                    fontSize="md"
                                                    fontWeight="bold"
                                                >
                                                    {project.title}
                                                </Text>
                                                <Text fontSize="xx-small">
                                                    |
                                                </Text>
                                                <Text
                                                    color={subtitleColor}
                                                    fontSize="xs"
                                                    textTransform="uppercase"
                                                >
                                                    {project.type}
                                                </Text>
                                            </Stack>
                                            <Text
                                                color={subtitleColor}
                                                fontSize="xs"
                                                textTransform="uppercase"
                                            >
                                                {project.description}
                                            </Text>

                                            <Text
                                                fontSize="xs"
                                                fontWeight="bold"
                                            >
                                                Technology used:{" "}
                                                {project.language}
                                            </Text>
                                            <Text fontSize="xs">
                                                GitHub Link:
                                                <Link
                                                    color={urlColor}
                                                    fontSize="xs"
                                                    p={2}
                                                    style={{
                                                        paddingLeft: "3px",
                                                    }}
                                                >
                                                    {project.githubLink}
                                                </Link>
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text
                                                color={dateColor}
                                                fontSize="xs"
                                                textTransform="uppercase"
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
                ) : (
                    <></>
                )}

                {skills.currentState.length !== 0 ? (
                    <Stack id="resume-skills">
                        <Stack
                            id="resume-skill-header"
                            direction="row"
                            alignItems="flex-end"
                            spacing="0"
                        >
                            <Heading
                                fontSize="2xl"
                                textTransform="uppercase"
                                fontWeight="thin"
                            >
                                Skill
                            </Heading>
                        </Stack>

                        <Box>
                            <Text
                                fontSize="md"
                                fontWeight="bold"
                                textTransform="uppercase"
                            >
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
                                            <Text fontSize="sm">
                                                {skill.description} (
                                                {skill.type})
                                            </Text>
                                        </Stack>
                                    );
                                })}
                        </Box>
                        <Box>
                            <Text
                                fontSize="md"
                                fontWeight="bold"
                                textTransform="uppercase"
                            >
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
                                            <Text fontSize="sm">
                                                {skill.description} (
                                                {skill.type})
                                            </Text>
                                        </Stack>
                                    );
                                })}
                        </Box>
                    </Stack>
                ) : (
                    <></>
                )}
            </Stack>
        </Box>
    );
};

export default ResumeTemplate2;
