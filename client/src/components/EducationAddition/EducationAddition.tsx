import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import dummyId from "../../api/dummy";

interface Props {}

const EducationAddition: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.educations);

    const [certificateName, setDegree] = useState<string>("");

    const [passingYear, setYearOfPassing] = useState<number>(2000);

    const [result, setResult] = useState<number>(0.0);

    const [institution, setInstitution] = useState<string>("");

    const [subject, setSubject] = useState<string>("");

    const { addEducation, cancelAddEducation } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        cancelAddEducation();
    };

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        addEducation(
            {
                id: "0",
                certificateName,
                passingYear,
                result,
                institution,
                serial: currentState.length + 1,
                userId: dummyId,
            },
            dummyId
        );
    };

    return (
        <Stack spacing={6}>
            <form>
                <Stack spacing={6}>
                    <FormControl id="degree" isRequired>
                        <FormLabel>Degree</FormLabel>
                        <Input
                            placeholder="Bachelor of Science"
                            value={certificateName}
                            onChange={(event) => {
                                setDegree(event.target.value);
                            }}
                        />
                    </FormControl>

                    <FormControl id="year-of-passing" isRequired>
                        <FormLabel>Year of Passing</FormLabel>
                        <Input
                            placeholder="2000"
                            value={passingYear}
                            type="number"
                            onChange={(event) => {
                                setYearOfPassing(event.target.valueAsNumber);
                            }}
                        />
                    </FormControl>

                    <FormControl id="result" isRequired>
                        <FormLabel>Result</FormLabel>
                        <Input
                            placeholder="5.00"
                            value={result}
                            type="number"
                            onChange={(event) => {
                                setResult(event.target.valueAsNumber);
                            }}
                        />
                    </FormControl>

                    <FormControl id="institution" isRequired>
                        <FormLabel>Institution</FormLabel>
                        <Input
                            placeholder="Islamic University of Technology"
                            value={institution}
                            onChange={(event) => {
                                setInstitution(event.target.value);
                            }}
                        />
                    </FormControl>

                    <FormControl id="subject" isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            placeholder="Computer Science and Engineering"
                            value={subject}
                            onChange={(event) => {
                                setSubject(event.target.value);
                            }}
                        />
                    </FormControl>
                </Stack>
            </form>
            <Stack direction="row">
                <Button onClick={handleAdd}>Add</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </Stack>
        </Stack>
    );
};

export default EducationAddition;
