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

const ExperienceAddition: React.FC<Props> = (props: Props) => {
    const { currentState } = useTypedSelector((state) => state.experiences);
    const { user } = useTypedSelector((state) => state.user);

    const [designation, setDesignation] = useState<string>("");

    const [workplace, setWorkplace] = useState<string>("");

    const [description, setDescription] = useState<string>("");

    const [location, setLocation] = useState<string>("");

    const [dateFrom, setDateFrom] = useState<string>("");

    const [dateTo, setDateTo] = useState<string>("");

    const { addExperience, cancelAddExperience } = useActions();

    const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        cancelAddExperience();
    };

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        addExperience(
            {
                id: "0",
                designation,
                workplace,
                description,
                location,
                dateFrom,
                dateTo,
                serial: currentState.length,
                userId: user !== null ? user.id : "",
            },
            user !== null ? user.id : ""
        );
    };

    return (
        <Stack spacing={6}>
            <Heading variant="tab">Add New Experience</Heading>
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
                        <FormLabel>Workplace</FormLabel>
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
                        <FormLabel>Location</FormLabel>
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

export default ExperienceAddition;
