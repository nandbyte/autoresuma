import React from "react";
import { Box } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
    children: any;
    direction: "up" | "down" | "left" | "right";
    delay?: number;
}

const defaultProps = {
    delay: 0,
};

const MotionBox = motion(Box);

const AnimationSlide = (props: Props) => {
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
            initial={props.direction}
            transition={{ delay: props.delay, duration: 0.5 }}
            variants={{
                up: { opacity: 0, y: -100 },
                down: { opacity: 0, y: 100 },
                left: { opacity: 0, x: -200 },
                right: { opacity: 0, x: 200 },

                visible: { opacity: 1, x: 0, y: 0 },
            }}
        >
            {props.children}
        </MotionBox>
    );
};

AnimationSlide.defaultProps = defaultProps;

export default AnimationSlide;
