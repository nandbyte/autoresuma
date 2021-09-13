import React, { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import EducationView from "../../components/EducationView";
import EducationForm from "../../components/EducationForm";

const EducationTab = () => {
    const { currentState, updating } = useTypedSelector(
        (state) => state.educations
    );

    const { fetchEducations } = useActions();

    useEffect(() => {
        fetchEducations();
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
                                {updating[index] === true ? (
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
                </Stack>
            </Box>
        </>
    );
};

export default EducationTab;
