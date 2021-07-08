import React from "react";
import { Box } from "@chakra-ui/layout";
import AnimationAppear from "../AnimationAppear";

interface Props {}

const SectionDivider = (props: Props) => {
    const sectionGap = { base: 24, md: 48, lg: 60, xl: 72 };

    return (
        <AnimationAppear duration={1}>
            <Box mt={sectionGap}>
                <hr
                    style={{
                        border: 0,
                        height: "2px",
                        background: "#edf2f7",
                    }}
                ></hr>
            </Box>
        </AnimationAppear>
    );
};

export default SectionDivider;
