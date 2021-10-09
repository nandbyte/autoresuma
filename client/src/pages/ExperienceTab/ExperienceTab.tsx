import React, { useEffect } from "react";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Stack, Button } from "@chakra-ui/react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ExperienceView from "../../components/ExperienceView";
import ExperienceForm from "../../components/ExperienceForm";
import ExperienceAddition from "../../components/ExperienceAddition";

import { FaPlus } from "react-icons/fa";
import { Redirect } from "react-router";

const ExperienceTab = () => {
    const { currentState, updating, loading, adding } = useTypedSelector(
        (state) => state.experiences
    );
    const { user } = useTypedSelector((state) => state.user);

    const { fetchExperiences, switchToAddExperienceMode } = useActions();

    useEffect(() => {
        fetchExperiences(user !== null ? user.id : "");
    }, []); //eslint-disable-line

    const { loggedIn } = useTypedSelector((state) => state.user);
    if (!loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    {currentState.length === 0 ? (
                        <Center>
                            <Heading variant="tab">
                                No Experience Added.
                            </Heading>
                        </Center>
                    ) : (
                        <></>
                    )}
                    {currentState.map((experience, index) => {
                        return (
                            <Box
                                key={
                                    experience.designation +
                                    experience.workplace
                                }
                                w="100%"
                                bgColor="gray.700"
                                color="white"
                                p={6}
                                borderRadius="md"
                            >
                                {updating[index] && !loading[index] ? (
                                    <ExperienceForm
                                        key={index}
                                        index={index}
                                        content={experience}
                                    />
                                ) : (
                                    <ExperienceView
                                        key={index}
                                        index={index}
                                        content={experience}
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
                            <ExperienceAddition />
                        </Box>
                    ) : (
                        <Center>
                            <Button
                                onClick={switchToAddExperienceMode}
                                leftIcon={<FaPlus />}
                            >
                                Add Experience
                            </Button>
                        </Center>
                    )}
                </Stack>
            </Box>
        </>
    );
};

export default ExperienceTab;
