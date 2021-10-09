import React from "react";
import { Box, Center, Flex, HStack, Stack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoContainer from "../LogoContainer";
import NavLink from "../NavLink";

interface LinkObject {
    name: string;
    href: string;
}

const Links: ReadonlyArray<LinkObject> = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile/tab" },
    { name: "Resume", href: "/resume" },
];

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const CrossIcon = (
        <Center h="100%" w="100%">
            <FaTimes />
        </Center>
    );

    const BarIcon = (
        <Center h="100%" w="100%">
            <FaBars />
        </Center>
    );

    return (
        <Box bg={useColorModeValue("gray.900", "gray.900")} shadow={"md"}>
            <Flex w="100%" justifyContent="space-around">
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={{ base: "100%", xl: "80em" }}
                    px={{ base: 8, lg: 16, xl: 16 }}
                >
                    <Box display={{ base: "flex", lg: "none" }} w={8} />
                    <LogoContainer />
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", lg: "flex" }}
                    >
                        {Links.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                hoverTextColor={"primary.700"}
                                hoverBgColor={"primary.50"}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <IconButton
                            size="md"
                            fontSize="lg"
                            variant="ghost"
                            color="current"
                            icon={isOpen ? CrossIcon : BarIcon}
                            aria-label={"Open Navigation Menu"}
                            display={{ lg: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </HStack>
                    <IconButton
                        size="md"
                        fontSize="lg"
                        variant="ghost"
                        color="current"
                        w={8}
                        icon={isOpen ? CrossIcon : BarIcon}
                        aria-label={"Open Navigation Menu"}
                        display={{ lg: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>
            </Flex>
            {isOpen ? (
                <Box pb={4} display={{ lg: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                hoverTextColor={"primary.700"}
                                hoverBgColor={"primary.50"}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
