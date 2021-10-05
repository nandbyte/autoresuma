import { TextProps } from "@chakra-ui/layout";

const Heading = {
    variants: {
        tab: (props: TextProps) => ({
            fontSize: ["xl", "xl", "xl", "2xl"],
        }),
        label: (props: TextProps) => ({
            fontSize: ["lg", "lg", "lg", "lg"],
        }),
    },
};

export default Heading;
