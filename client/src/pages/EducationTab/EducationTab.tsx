import React, { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { Stack, Button } from "@chakra-ui/react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import EducationView from "../../components/EducationView";
import EducationForm from "../../components/EducationForm";
import EducationAddition from "../../components/EducationAddition";

import dummyId from "../../api/dummy";

const EducationTab = () => {
    const { currentState, updating, loading, adding } = useTypedSelector(
        (state) => state.educations
    );

    const { fetchEducations } = useActions();

    useEffect(() => {
        fetchEducations(dummyId);
    }, []);

    return (
        <>
            <Box py={6}>
                <Stack spacing={12}>
                    {currentState.map((education, index) => {
                        return (
                            <Box
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
                    {adding ? (
                        <EducationAddition />
                    ) : (
                        <Button>Add Education</Button>
                    )}
                </Stack>
            </Box>
        </>
    );
};

export default EducationTab;
