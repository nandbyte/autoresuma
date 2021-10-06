import React from "react";
import { Heading } from "@chakra-ui/layout";
import {
    IconButton,
    Button,
    FormControl,
    FormLabel,
    Stack,
    SkeletonText,
} from "@chakra-ui/react";
import { Education } from "../../state/types";
import { FaArrowDown, FaArrowUp, FaEdit } from "react-icons/fa";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import dummyId from "../../api/dummy";

interface Props {
    index: number;
    content: Education;
}

const EducationView: React.FC<Props> = (props: Props) => {
    const { loading, currentState } = useTypedSelector(
        (state) => state.educations
    );

    const { switchToEducationForm, swapEducation } = useActions();

    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToEducationForm(props.index);
    };

    const moveUp: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        swapEducation(
            currentState[props.index - 1],
            currentState[props.index],
            dummyId
        );
    };
    const moveDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        swapEducation(
            currentState[props.index],
            currentState[props.index + 1],
            dummyId
        );
    };

    return (
        <Stack>
            <Stack direction="row" justifyContent="space-between">
                <Heading variant="tab">{props.content.certificateName}</Heading>
                <Stack direction="row">
                    <IconButton
                        disabled={props.index === 0}
                        onClick={moveUp}
                        aria-label="Move Up"
                        borderRadius="md"
                        icon={<FaArrowUp />}
                    />
                    <IconButton
                        disabled={props.index === currentState.length - 1}
                        onClick={moveDown}
                        aria-label="Move Down"
                        borderRadius="md"
                        icon={<FaArrowDown />}
                    />
                </Stack>
            </Stack>
            <form>
                <Stack spacing={6}>
                    <SkeletonText
                        noOfLines={3}
                        isLoaded={!loading[props.index]}
                    >
                        <FormControl id="year-of-passing">
                            <FormLabel>
                                <Heading variant="label">
                                    Year of Passing
                                </Heading>
                            </FormLabel>
                            <FormLabel>{props.content.passingYear}</FormLabel>
                        </FormControl>
                    </SkeletonText>
                    <SkeletonText
                        noOfLines={3}
                        isLoaded={!loading[props.index]}
                    >
                        <FormControl id="result">
                            <FormLabel>
                                <Heading variant="label">Result (CGPA)</Heading>
                            </FormLabel>
                            <FormLabel>{props.content.result}</FormLabel>
                        </FormControl>
                    </SkeletonText>
                    <SkeletonText
                        noOfLines={3}
                        isLoaded={!loading[props.index]}
                    >
                        <FormControl id="institution">
                            <FormLabel>
                                <Heading variant="label">Institution</Heading>
                            </FormLabel>
                            <FormLabel>{props.content.institution}</FormLabel>
                        </FormControl>
                    </SkeletonText>
                </Stack>
            </form>
            <Stack direction="row" pt={2}>
                <Button leftIcon={<FaEdit />} onClick={handleUpdate}>
                    Edit
                </Button>
            </Stack>
        </Stack>
    );
};

export default EducationView;
