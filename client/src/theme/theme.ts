import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";
import config from "./config";

// Foundational style overrides
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";

// Component style overrides
import Button from "./components/button";
import Link from "./components/link";
import Input from "./components/input";
import Heading from "./components/heading";

const overrides = {
    config,
    styles,
    fonts,
    colors,

    components: {
        Button,
        Link,
        Input,
        Heading,
    },
};

export default extendTheme(overrides);
