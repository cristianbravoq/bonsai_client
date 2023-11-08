import { motion, Variants, useAnimation, PanInfo } from "framer-motion";
import "./courseCard.scss";
import { ICardProps } from "./SliderCourses";
import { useState } from "react";

const cardVariants: Variants = {
    onscreen: {
        scale: 1,
        y: -5,
        rotate: 5,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
    onmouseover: {
        scale: [1, 1.05, 1.03],
        rotate: 0,
        zIndex: 3,
        transition: {
            scale: { duration: 0.6, ease: "easeOut" },
            zIndex: { delay: 0.2 },
        },
    },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export function CourseCard({ emoji, hueA, hueB, index }: ICardProps) {
    const controls = useAnimation();
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;


    let hasExecuted = false;
    const handlePan = (event: MouseEvent, info: PanInfo) => {
        console.log(info.offset.x)
        if (!hasExecuted) {
            if (info.offset.x > 120) {
                setTimeout(() => {
                    alert("Derecha");
                }, 800);
                hasExecuted = true;
            }
            if (info.offset.x < -120) {
                setTimeout(() => {
                    alert("Izquierda");
                }, 800);
                hasExecuted = true;
            }
        }
    };

    return (
        <motion.div
            className="card-container"
            whileInView="onscreen"
            whileHover="onmouseover"
            viewport={{ once: true, amount: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onPan={handlePan}
            style={
                window.innerWidth > 800
                    ? {
                        position: "absolute",
                        top: `${130 * index}px`,
                        left: `${70 * index}px`,
                    }
                    : { margin: "20px 0" }
            }
        >
            <div className="splash" style={{ background }} />
            <motion.div className="card" variants={cardVariants} animate={controls}>
                <p style={{ userSelect: "none" }}>Subject</p>
                <span style={{ userSelect: "none" }}>{emoji}</span>
            </motion.div>
        </motion.div>
    );
}
