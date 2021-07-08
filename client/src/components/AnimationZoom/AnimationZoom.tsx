import React from "react";
import { Box } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
    children: any;
    delay?: number;
}

const defaultProps = {
    delay: 0,
};

const MotionBox = motion(Box);

const AnimationZoom = (props: Props) => {
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
            transition={{ delay: props.delay, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            {props.children}
        </MotionBox>
    );
};

AnimationZoom.defaultProps = defaultProps;

export default AnimationZoom;
