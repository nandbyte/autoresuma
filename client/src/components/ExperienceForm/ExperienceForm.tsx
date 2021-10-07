import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Experience } from "../../state/types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import dummyId from "../../api/dummy";
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";

interface Props {
    index: number;
    content: Experience;
}

const ExperienceForm: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.experiences);

    const [designation, setDesignation] = useState<string>(
        currentState ? currentState[props.index].designation : ""
    );

    const [workplace, setWorkplace] = useState<string>(
        currentState ? currentState[props.index].workplace : ""
    );

    const [description, setDescription] = useState<string>(
        currentState ? currentState[props.index].description : ""
    );

    const [location, setLocation] = useState<string>(
        currentState ? currentState[props.index].location : ""
    );

    const [dateFrom, setDateFrom] = useState<string>(
        currentState ? currentState[props.index].dateFrom : ""
    );

    const [dateTo, setDateTo] = useState<string>(
        currentState ? currentState[props.index].dateTo : ""
    );

    const { switchToExperienceView, updateExperience, deleteExperience } =
        useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        switchToExperienceView(props.index);
    };
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        deleteExperience(
            currentState,
            props.index,
            currentState[props.index],
            dummyId
        );
    };

    const handleSave: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        updateExperience(
            props.index,
            {
                id: currentState[props.index].id,
                designation,
                workplace,
                description,
                location,
                dateFrom,
                dateTo,
                serial: props.index,
                userId: dummyId,
            },
            dummyId
        );
    };

    return (
        <Stack spacing={6}>
            <form>
                <Stack spacing={6}>
                    <FormControl id="experience-designation" isRequired>
                        <FormLabel>Designation</FormLabel>
                        <Input
                            placeholder="C++ Lead Software Developer"
                            value={designation}
                            onChange={(event) => {
                                setDesignation(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="experience-workplace" isRequired>
                        <FormLabel> Workplace</FormLabel>
                        <Input
                            placeholder="Google Inc."
                            value={workplace}
                            onChange={(event) => {
                                setWorkplace(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="experience-description">
                        <FormLabel>Description</FormLabel>
                        <Input
                            placeholder="Led a team of C++ software developers to develop the V8 Engine"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="experience-location" isRequired>
                        <FormLabel>Technology Used</FormLabel>
                        <Input
                            placeholder="Silicone Valley, USA"
                            value={location}
                            onChange={(event) => {
                                setLocation(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="experience-date-from" isRequired>
                        <FormLabel>Starting Date</FormLabel>
                        <Input
                            placeholder="https://github.com/v8/v8"
                            value={dateFrom}
                            type="date"
                            onChange={(event) => {
                                setDateFrom(event.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl id="experience-date-to">
                        <FormLabel>Ending Date</FormLabel>
                        <Input
                            placeholder="https://github.com/v8/v8"
                            value={dateTo}
                            type="date"
                            onChange={(event) => {
                                setDateTo(event.target.value);
                            }}
                        />
                    </FormControl>
                </Stack>
            </form>
            <Stack direction="row">
                <Button
                    disabled={
                        designation === "" ||
                        workplace === "" ||
                        location === "" ||
                        dateFrom === ""
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

export default ExperienceForm;
