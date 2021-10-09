import React, { useEffect, useState } from "react";
import { Box, Heading, Link, Stack, Text } from "@chakra-ui/layout";

import PageContainer from "../../components/PageContainer";
import SubsectionDivider from "../../components/SubsectionDivider";
import axios from "axios";
import { useParams } from "react-router";
import { apiRoot } from "../../data/api";

const ShowcasePage = () => {
    const params: any = useParams();

    const [records, setRecords] = useState<any>(undefined);

    useEffect(() => {
        axios
            .get(apiRoot + "v1/showcase/" + params.userId)
            .then((response) => setRecords(response.data))
            .catch((error) => console.log(error));
    }, [params]);

    return (
        <PageContainer variant="showcase">
            <Heading
                textAlign={{ base: "left" }}
                fontWeight="black"
                pt={8}
            ></Heading>
            {console.log(records)}
            <Stack pt="12">
                {records !== undefined ? (
                    <>
                        <Heading
                            fontSize={{ base: "4xl", lg: "6xl" }}
                            fontWeight="bold"
                            pt={2}
                        >
                            {records.recordBio[0].firstName}{" "}
                            {records.recordBio[0].lastName}
                        </Heading>
                        <Text
                            fontSize={{ base: "2xl", lg: "3xl" }}
                            fontWeight="normal"
                            pt={2}
                        >
                            {records.recordBio[0].jobTitle}
                        </Text>
                        <Heading
                            textAlign={{ base: "left" }}
                            fontWeight="black"
                            pt={12}
                        >
                            Education
                        </Heading>
                        <SubsectionDivider />
                        <Stack spacing={8}>
                            {records.recordEducation.map((education: any) => {
                                return (
                                    <Box>
                                        <Text
                                            fontSize={{ base: "xl", lg: "2xl" }}
                                            fontWeight="bold"
                                        >
                                            {education.certificateName}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            {education.institution}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            Result: CGPA {education.result}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            Passed: {education.passingYear}
                                        </Text>
                                    </Box>
                                );
                            })}
                        </Stack>
                        <Heading
                            textAlign={{ base: "left" }}
                            fontWeight="black"
                            pt={12}
                        >
                            Skills
                        </Heading>
                        <SubsectionDivider />{" "}
                        <Heading
                            fontSize={{
                                base: "xl",
                                lg: "2xl",
                            }}
                            textAlign={{ base: "left" }}
                            fontWeight="bold"
                        >
                            Proficient in:
                        </Heading>
                        <Stack spacing={2}>
                            {records.recordSkill
                                .filter(
                                    (skill: any) => skill.level === "Proficient"
                                )
                                .map((skill: any) => {
                                    return (
                                        <Box>
                                            <Text
                                                fontSize={{
                                                    base: "md",
                                                    lg: "lg",
                                                }}
                                            >
                                                {skill.description} (
                                                {skill.type})
                                            </Text>
                                        </Box>
                                    );
                                })}
                        </Stack>{" "}
                        <Heading
                            pt={12}
                            fontSize={{ base: "xl", lg: "2xl" }}
                            textAlign={{ base: "left" }}
                            fontWeight="bold"
                        >
                            Familiar with:
                        </Heading>
                        <Stack spacing={2}>
                            {records.recordSkill
                                .filter(
                                    (skill: any) => skill.level === "Familiar"
                                )
                                .map((skill: any) => {
                                    return (
                                        <Box>
                                            <Text
                                                fontSize={{
                                                    base: "md",
                                                    lg: "lg",
                                                }}
                                            >
                                                {skill.description} (
                                                {skill.type})
                                            </Text>
                                        </Box>
                                    );
                                })}
                        </Stack>
                        <Heading
                            textAlign={{ base: "left" }}
                            fontWeight="black"
                            pt={12}
                        >
                            Projects
                        </Heading>
                        <SubsectionDivider />
                        <Stack spacing={8}>
                            {records.recordProject.map((project: any) => {
                                return (
                                    <Box>
                                        <Text
                                            fontSize={{ base: "xl", lg: "2xl" }}
                                            fontWeight="bold"
                                        >
                                            {project.title}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            Type: {project.type}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            {project.description}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            Tech Stack: {project.language}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            GitHub Link:
                                            <Link
                                                fontSize={{
                                                    base: "md",
                                                    lg: "lg",
                                                }}
                                                href={project.githubLink}
                                            >
                                                {project.githubLink}
                                            </Link>
                                        </Text>
                                    </Box>
                                );
                            })}
                        </Stack>
                        <Heading
                            textAlign={{ base: "left" }}
                            fontWeight="black"
                            pt={12}
                        >
                            Work Experience
                        </Heading>
                        <SubsectionDivider />
                        <Stack spacing={8}>
                            {records.recordExperience.map((experience: any) => {
                                return (
                                    <Box>
                                        <Text
                                            fontSize={{ base: "xl", lg: "2xl" }}
                                            fontWeight="bold"
                                        >
                                            {experience.designation}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            Company: {experience.workplace}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            {experience.description}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "md", lg: "lg" }}
                                        >
                                            Time: {experience.dateFrom} to{" "}
                                            {experience.dateTo}
                                        </Text>
                                    </Box>
                                );
                            })}
                        </Stack>
                    </>
                ) : (
                    <></>
                )}
            </Stack>
        </PageContainer>
    );
};

export default ShowcasePage;
