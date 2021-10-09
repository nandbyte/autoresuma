import React, { useEffect } from "react";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Stack, Button } from "@chakra-ui/react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import EducationView from "../../components/EducationView";
import EducationForm from "../../components/EducationForm";
import EducationAddition from "../../components/EducationAddition";

import { FaPlus } from "react-icons/fa";
import { Redirect } from "react-router";

const EducationTab = () => {
    const { currentState, updating, loading, adding } = useTypedSelector(
        (state) => state.educations
    );
    const { user } = useTypedSelector((state) => state.user);

    const { fetchEducations, switchToAddEducationMode } = useActions();

    useEffect(() => {
        fetchEducations(user !== null ? user.id : "");
    }, []);
    
    const { loggedIn } = useTypedSelector((state) => state.user);
    if (!loggedIn) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    {currentState.length === 0 ? (
                        <Center>
                            <Heading variant="tab">No Education Added.</Heading>
                        </Center>
                    ) : (
                        <></>
                    )}
                    {currentState.map((education, index) => {
                        return (
                            <Box
                                key={
                                    education.certificateName +
                                    education.passingYear
                                }
                                w="100%"
                                bgColor="gray.700"
                                color="white"
                                p={6}
                                borderRadius="md"
                            >
                                {updating[index] && !loading[index] ? (
                                    <EducationForm
                                        key={index}
                                        index={index}
                                        content={education}
                                    />
                                ) : (
                                    <EducationView
                                        key={index}
                                        index={index}
                                        content={education}
                                    />
                                )}
                            </Box>
                        );
                    })}
                    {adding === true ? (
                        <Box
                            w="100%"
                            bgColor="gray.700"
                            color="white"
                            p={6}
                            borderRadius="md"
                        >
                            <EducationAddition />
                        </Box>
                    ) : (
                        <Center>
                            <Button
                                onClick={switchToAddEducationMode}
                                leftIcon={<FaPlus />}
                            >
                                Add Education
                            </Button>
                        </Center>
                    )}
                </Stack>
            </Box>
        </>
    );
};

export default EducationTab;
