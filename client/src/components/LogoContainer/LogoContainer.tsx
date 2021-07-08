import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

const LogoContainer = () => {
    return (
        <Box p={2}>
            <Heading
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="2xl"
                textTransform="lowercase"
                color={useColorModeValue("gray.900", "white")}
            >
                autorésuma
            </Heading>
        </Box>
    );
};

export default LogoContainer;

// Alternate Form:
// const image: string = useColorModeValue(
//     "/images/logo-light.png",
//     "/images/logo-dark.png"
// );

// return (
//     <Box m={2} p={2}>
//         <Image objectFit="cover" src={image} alt="Logo" w={48} />
//     </Box>
// );
