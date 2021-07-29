import React, { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/react";

import BioForm from "../../components/BioForm";
import BioView from "../../components/BioView";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const BioTab = () => {
    const { loading, updating } = useTypedSelector((state) => state.bio);

    return (
        <Box
            w="100%"
            bgColor="gray.700"
            color="white"
            p={6}
            borderRadius="md"
            my={6}
        >
            {!updating ? <BioView /> : null}
            {updating ? <BioForm /> : null}
        </Box>
    );
};

export default BioTab;
