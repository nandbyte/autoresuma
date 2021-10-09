import React, { useEffect } from "react";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Stack, Button } from "@chakra-ui/react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SkillView from "../../components/SkillView";
import SkillForm from "../../components/SkillForm";
import SkillAddition from "../../components/SkillAddition";

import { FaPlus } from "react-icons/fa";

const SkillTab = () => {
    const { currentState, updating, loading, adding } = useTypedSelector(
        (state) => state.skills
    );
    const { user } = useTypedSelector((state) => state.user);

    const { fetchSkills, switchToAddSkillMode } = useActions();

    useEffect(() => {
        fetchSkills(user !== null ? user.id : "");
    }, []); //eslint-disable-line

    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    {currentState.length === 0 ? (
                        <Center>
                            <Heading variant="tab">No Skill Added.</Heading>
                        </Center>
                    ) : (
                        <></>
                    )}
                    {currentState.map((skill, index) => {
                        return (
                            <Box
                                key={skill.description + skill.type}
                                w="100%"
                                bgColor="gray.700"
                                color="white"
                                p={6}
                                borderRadius="md"
                            >
                                {updating[index] && !loading[index] ? (
                                    <SkillForm
                                        key={index}
                                        index={index}
                                        content={skill}
                                    />
                                ) : (
                                    <SkillView
                                        key={index}
                                        index={index}
                                        content={skill}
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
                            <SkillAddition />
                        </Box>
                    ) : (
                        <Center>
                            <Button
                                onClick={switchToAddSkillMode}
                                leftIcon={<FaPlus />}
                            >
                                Add Skill
                            </Button>
                        </Center>
                    )}
                </Stack>
            </Box>
        </>
    );
};

export default SkillTab;
