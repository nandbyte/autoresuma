import React, { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { FaPlus, FaTimes } from "react-icons/fa";

interface Props {}

const EducationAddition: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.educations);
    const { user } = useTypedSelector((state) => state.user);

    const [certificateName, setCertificateName] = useState<string>("");

    const [passingYear, setPassingYear] = useState<number>(2010);

    const [result, setResult] = useState<number>(5.0);

    const [institution, setInstitution] = useState<string>("");

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
                serial: currentState.length,
                userId: user !== null ? user.id : "",
            },
            user !== null ? user.id : ""
        );
    };

    return (
        <Stack spacing={6}>
            <Heading variant="tab">Add New Education</Heading>
            <form>
                <Stack spacing={6}>
                    <FormControl id="degree" isRequired>
                        <FormLabel>Degree</FormLabel>
                        <Input
                            placeholder="Bachelor of Science"
                            value={certificateName}
                            onChange={(event) => {
                                setCertificateName(event.target.value);
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
                                setPassingYear(event.target.valueAsNumber);
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
                    leftIcon={<FaPlus />}
                    onClick={handleAdd}
                >
                    Add
                </Button>
                <Button leftIcon={<FaTimes />} onClick={handleCancel}>
                    Cancel
                </Button>
            </Stack>
        </Stack>
    );
};

export default EducationAddition;
