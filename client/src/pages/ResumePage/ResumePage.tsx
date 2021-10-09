import React from "react";
import { Box, Center, Heading, Stack } from "@chakra-ui/layout";
import { Alert, AlertIcon, Button } from "@chakra-ui/react";

import ResumeTemplate1 from "./templates/ResumeTemplate1";
import ResumeTemplate2 from "./templates/ResumeTemplate2";
import PageContainer from "../../components/PageContainer";
import { useReactToPrint } from "react-to-print";
import SubsectionDivider from "../../components/SubsectionDivider";
import ResumeTemplate3 from "./templates/ResumeTemplate3";
import { Redirect } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ResumePage = () => {
    const { loggedIn } = useTypedSelector((state) => state.user);

    const refResume1: any = React.createRef();
    const refResume2: any = React.createRef();
    const refResume3: any = React.createRef();

    const handlePrint1 = useReactToPrint({ content: () => refResume1.current });
    const handlePrint2 = useReactToPrint({ content: () => refResume2.current });
    const handlePrint3 = useReactToPrint({ content: () => refResume3.current });

    if (!loggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <PageContainer variant="navbar">
            <Heading textAlign={{ base: "left" }} fontWeight="black">
                Resume
            </Heading>
            <SubsectionDivider />
            <Stack spacing="6" pt="12">
                <Stack spacing="12">
                    <Stack spacing="6">
                        <Heading fontSize={{ base: "lg", lg: "2xl" }}>
                            Awesome-CV Template
                        </Heading>

                        <Alert status="info" color="black" borderRadius={"md"}>
                            <AlertIcon />
                            Easy to read and descriptive resume based on the
                            awesome-cv template from GitHub.
                        </Alert>

                        <Center>
                            <Box
                                borderWidth={2}
                                bgColor="white"
                                color="black"
                                width="8.3in"
                                height="11.7in"
                                borderColor="gray.200"
                            >
                                <Box ref={refResume1}>
                                    <ResumeTemplate1 />
                                </Box>
                            </Box>
                        </Center>
                        <Center>
                            <Button onClick={handlePrint1}>
                                Download as PDF
                            </Button>
                        </Center>
                    </Stack>
                    <SubsectionDivider />{" "}
                    <Stack spacing="6">
                        <Heading fontSize={{ base: "lg", lg: "2xl" }}>
                            Modern-Deedy Template
                        </Heading>

                        <Alert status="info" color="black" borderRadius={"md"}>
                            <AlertIcon />
                            Clean and compact resume pointing out important
                            information.
                        </Alert>

                        <Center>
                            <Box
                                borderWidth={2}
                                bgColor="white"
                                color="black"
                                width="8.3in"
                                height="11.7in"
                                borderColor="gray.200"
                            >
                                <Box ref={refResume2}>
                                    <ResumeTemplate2 />
                                </Box>
                            </Box>
                        </Center>
                        <Center>
                            <Button onClick={handlePrint2}>
                                Download as PDF
                            </Button>
                        </Center>
                    </Stack>
                    <SubsectionDivider />
                    <Stack spacing="6">
                        <Heading fontSize={{ base: "lg", lg: "2xl" }}>
                            FaangPath Template
                        </Heading>

                        <Alert status="info" color="black" borderRadius={"md"}>
                            <AlertIcon />
                            Created by the recruiters from the Fortune 500
                            companies, this template is a great mix of style and
                            information.
                        </Alert>

                        <Center>
                            <Box
                                borderWidth={2}
                                bgColor="white"
                                color="black"
                                width="8.3in"
                                height="11.7in"
                                borderColor="gray.200"
                            >
                                <Box ref={refResume3}>
                                    <ResumeTemplate3 />
                                </Box>
                            </Box>
                        </Center>
                        <Center>
                            <Button onClick={handlePrint3}>
                                Download as PDF
                            </Button>
                        </Center>
                    </Stack>
                </Stack>
            </Stack>
        </PageContainer>
    );
};

export default ResumePage;
