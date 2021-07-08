import React from "react";
import { Box } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
    children: any;
    delay?: number;
    duration?: number;
}

const defaultProps = {
    delay: 0,
    duration: 0.5,
};

const MotionBox = motion(Box);

const AnimationAppear = (props: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <MotionBox
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ delay: props.delay, duration: props.duration }}
            variants={{
                hidden: { width: 0 },
                visible: { width: "100%" },
            }}
        >
            {props.children}
        </MotionBox>
    );
};

AnimationAppear.defaultProps = defaultProps;

export default AnimationAppear;
