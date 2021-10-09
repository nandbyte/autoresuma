import React, { useEffect } from "react";
import "@fontsource/roboto";
import {
    Box,
    Text,
    Stack,
    Heading,
    Center,
    UnorderedList,
    ListItem,
} from "@chakra-ui/layout";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const ResumeTemplate3 = () => {
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
            <Stack id="resume-body" spacing="4">
                <Stack id="resume-header" spacing="1.5">
                    <Center>
                        <Stack spacing={1}>
                            <Center>
                                <Heading
                                    fontSize="3xl"
                                    textTransform="uppercase"
                                >
                                    {bio?.currentState?.firstName}{" "}
                                    {bio?.currentState?.lastName}
                                </Heading>
                            </Center>
                            <Center>
                                <Text fontSize="xs">
                                    {bio?.currentState?.address}
                                </Text>
                            </Center>
                            <Center>
                                <Stack direction="row" align="center">
                                    <Text
                                        fontSize="xs"
                                        color={urlColor}
                                        fontWeight="bold"
                                        style={{ paddingRight: "3px" }}
                                    >
                                        {user !== null ? user?.email : ""}
                                    </Text>
                                    <Text fontSize="xs">|</Text>
                                    <Text
                                        fontSize="xs"
                                        color={urlColor}
                                        fontWeight="bold"
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
                                        color={urlColor}
                                        fontWeight="bold"
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
                        <Stack id="resume-education-header">
                            <Heading
                                fontSize="lg"
                                textTransform="uppercase"
                                fontWeight="thin"
                            >
                                Education
                            </Heading>
                            <Box width="100%">
                                <hr
                                    style={{
                                        border: 0,
                                        height: "1px",
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
                                            <Text
                                                fontSize="md"
                                                fontWeight="bold"
                                            >
                                                {education.certificateName}
                                            </Text>
                                            <Text
                                                color={subtitleColor}
                                                fontSize="md"
                                            >
                                                {education.institution}
                                            </Text>
                                            <Text fontSize="md">
                                                CGPA {education.result}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text
                                                color={dateColor}
                                                fontSize="md"
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

                {skills.currentState.length !== 0 ? (
                    <Stack id="resume-skills">
                        <Heading
                            fontSize="lg"
                            textTransform="uppercase"
                            fontWeight="thin"
                        >
                            Skills
                        </Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "1px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>

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
                                            <Text fontSize="sm">
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

                {experiences.currentState.length !== 0 ? (
                    <Stack id="resume-experience">
                        <Heading
                            fontSize="lg"
                            textTransform="uppercase"
                            fontWeight="thin"
                        >
                            Experience
                        </Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "1px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>
                        <Stack id="resume-experience-body" spacing="4">
                            {experiences.currentState.map((experience) => {
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
                                                {experience.designation}
                                            </Text>
                                            <Text
                                                color={subtitleColor}
                                                fontSize="md"
                                            >
                                                {experience.workplace}
                                            </Text>
                                            <UnorderedList>
                                                <ListItem>
                                                    <Text fontSize="md">
                                                        {experience.description}
                                                    </Text>
                                                </ListItem>
                                            </UnorderedList>
                                        </Box>
                                        <Box>
                                            {" "}
                                            <Text
                                                color={dateColor}
                                                fontSize="md"
                                                align="right"
                                            >
                                                {experience.dateFrom} to{" "}
                                                {experience.dateTo}
                                            </Text>
                                            <Text
                                                color={subtitleColor}
                                                fontStyle="oblique"
                                                fontSize="md"
                                                align="right"
                                            >
                                                {experience.location}
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
                        <Heading
                            fontSize="lg"
                            textTransform="uppercase"
                            fontWeight="thin"
                        >
                            Projects
                        </Heading>
                        <Box width="100%">
                            <hr
                                style={{
                                    border: 0,
                                    height: "1px",
                                    background: "#000000",
                                }}
                            ></hr>
                        </Box>
                        <Stack id="resume-project-body" spacing="4">
                            {projects.currentState.map((project) => {
                                return (
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                    >
                                        <Box>
                                            <Stack direction="column">
                                                <Text
                                                    fontSize="md"
                                                    fontWeight="bold"
                                                >
                                                    {project.title}
                                                </Text>

                                                <Text
                                                    color={subtitleColor}
                                                    fontSize="md"
                                                >
                                                    {project.type}
                                                </Text>
                                            </Stack>
                                            <Text
                                                color={subtitleColor}
                                                fontSize="md"
                                            >
                                                {project.description}
                                            </Text>

                                            <Text
                                                fontSize="md"
                                                fontWeight="bold"
                                            >
                                                Technology used:{" "}
                                                {project.language}
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
            </Stack>
        </Box>
    );
};

export default ResumeTemplate3;
