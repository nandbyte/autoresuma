import { ButtonProps } from "@chakra-ui/button";

const Button = {
    baseStyle: (props: ButtonProps) => ({
        w: { base: "50%", lg: "25%" },
        fontWeight: "normal",
    }),
    variants: {
        solid: (props: ButtonProps) => ({
            color: "white",
            backgroundColor: "red.600",
            _hover: {
                bg: "red.700",
            },
        }),
    },
};

export default Button;
