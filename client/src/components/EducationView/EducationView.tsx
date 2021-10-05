import React, { useEffect } from "react";
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
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface Props {
    index: number;
    content: Education;
}

const EducationView: React.FC<Props> = (props: Props) => {
    const { loading, updating, currentState } = useTypedSelector(
        (state) => state.educations
    );

    const { switchToEducationForm } = useActions();

    const handleUpdate = () => {
        switchToEducationForm(props.index);
    };

    return (
        <Stack>
            <Stack direction="row" justifyContent="space-between">
                <Heading variant="tab">{props.content.certificateName}</Heading>
                <Stack direction="row">
                    <IconButton
                        aria-label="Move Up"
                        borderRadius="md"
                        icon={<FaArrowUp />}
                    />
                    <IconButton
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
                                <Heading variant="label">Result</Heading>
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
            <Stack direction="row">
                <Button onClick={handleUpdate}>Update</Button>
            </Stack>
        </Stack>
    );
};

export default EducationView;
