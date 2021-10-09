import { InputProps } from "@chakra-ui/input";

const Input = {
    variants: {
        outline: (props: InputProps) => ({
            fontWeight: "bold",
        }),
    },
    defaultProps: {
        focusBorderColor: "red.50",
    },
};

export default Input;
