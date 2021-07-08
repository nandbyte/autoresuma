import { useColorModeValue } from "@chakra-ui/color-mode";
import { Heading, Link } from "@chakra-ui/layout";
import React from "react";

const NavLink = (props: any) => {
    return (
        <Link
            px={3}
            py={2}
            rounded={"md"}
            fontWeight="bold"
            _hover={{
                textDecoration: "none",
                color: useColorModeValue(
                    props.hoverTextColor,
                    props.hoverBgColor
                ),
                bg: useColorModeValue(props.hoverBgColor, props.hoverTextColor),
            }}
            href={props.href}
        >
            <Heading fontSize="lg"> {props.children}</Heading>
        </Link>
    );
};

export default NavLink;
