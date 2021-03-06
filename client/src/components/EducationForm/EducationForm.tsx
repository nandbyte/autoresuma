import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Education } from "../../state/types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { FaSave, FaTimes, FaTrash } from "react-icons/fa";

interface Props {
    index: number;
    content: Education;
}

const EducationForm: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.educations);
    const { user } = useTypedSelector((state) => state.user);

    const [certificateName, setDegree] = useState<string>(
        currentState ? currentState[props.index].certificateName : ""
    );

    const [passingYear, setYearOfPassing] = useState<number>(
        currentState ? currentState[props.index].passingYear : 2010
    );

    const [result, setResult] = useState<number>(
        currentState ? currentState[props.index].result : 5.0
    );

    const [institution, setInstitution] = useState<string>(
        currentState ? currentState[props.index].institution : ""
    );

    const { switchToEducationView, updateEducation, deleteEducation } =
        useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToEducationView(props.index);
    };
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        deleteEducation(
            currentState,
            props.index,
            currentState[props.index],
            user !== null ? user.id : ""
        );
    };

    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        updateEducation(
            props.index,
            {
                id: currentState[props.index].id,
                certificateName,
                passingYear,
                result,
                institution,
                serial: props.index,
                userId: user !== null ? user.id : "",
            },
            user !== null ? user.id : ""
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
                        <FormLabel>Result (CGPA)</FormLabel>
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
                </Stack>
            </form>
            <Stack direction="row">
                <Button
                    disabled={
                        certificateName === "" ||
                        institution === "" ||
                        isNaN(passingYear) ||
                        isNaN(result)
                    }
                    leftIcon={<FaSave />}
                    onClick={handleSave}
                >
                    Save
                </Button>
                <Button leftIcon={<FaTrash />} onClick={handleDelete}>
                    Delete
                </Button>
                <Button leftIcon={<FaTimes />} onClick={handleCancel}>
                    Cancel
                </Button>
            </Stack>
        </Stack>
    );
};

export default EducationForm;
