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

const overrides = {
    config,
    styles,
    fonts,
    colors,

    // Other foundational style overrides go here
    components: {
        Button,
        Link,
        // Other components go here
    },
};
export default extendTheme(overrides);
