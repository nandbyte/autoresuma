import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode("gray.800", "gray.800")(props),
        },
    }),
};

export default styles;
