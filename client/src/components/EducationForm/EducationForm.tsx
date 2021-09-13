import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Education } from "../../state/types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { saveEducation } from "../../state/action-creators";

interface Props {
    index: number;
    content: Education;
}

const EducationForm: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.educations);

    const [degree, setDegree] = useState<string>(
        currentState ? currentState[props.index].degree : ""
    );

    const [yearOfPassing, setYearOfPassing] = useState<number>(
        currentState ? currentState[props.index].yearOfPassing : 2000
    );

    const [result, setResult] = useState<string>(
        currentState ? currentState[props.index].result : ""
    );

    const [institution, setInstitution] = useState<string>(
        currentState ? currentState[props.index].institution : ""
    );

    const [subject, setSubject] = useState<string>(
        currentState ? currentState[props.index].subject : ""
    );

    const { switchToEducationView } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToEducationView(props.index);
    };

    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        saveEducation({
            serial: props.index,
            degree,
            yearOfPassing,
            result,
            institution,
            subject,
        });
    };

    return (
        <Stack spacing={6}>
            <form>
                <Stack spacing={6}>
                    <FormControl id="degree" isRequired>
                        <FormLabel>Degree</FormLabel>
                        <Input
                            placeholder="Bachelor of Science"
                            value={degree}
                            onChange={(event) => {
                                setDegree(event.target.value);
                            }}
                        />
                    </FormControl>

                    <FormControl id="year-of-passing" isRequired>
                        <FormLabel>Year of Passing</FormLabel>
                        <Input
                            placeholder="2000"
                            value={yearOfPassing}
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
                            onChange={(event) => {
                                setResult(event.target.value);
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
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </Stack>
        </Stack>
    );
};

export default EducationForm;
