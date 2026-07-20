import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlurText = ({
  text = "",
  delay = 150,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeInOut",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom =
    direction === "top"
      ? {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,-50px,0)",
        }
      : {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        };

  const defaultTo = [
    { filter: "blur(5px)", opacity: 0.5, transform: "translate3d(0,10px,0)" },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  const fromSnapshot = animationFrom || defaultFrom;
  const toSnapshots = animationTo || defaultTo;

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, index) => {
        const initialProps = fromSnapshot;
        const animateProps = inView
          ? toSnapshots.map((snap) => ({
              ...snap,
              transition: {
                // Diperlama jadi 1.2 detik biar transisinya super smooth dan tidak kaku
                duration: 1.2,
                ease: easing,
                delay: (index * delay) / 1000,
              },
            }))
          : initialProps;

        return (
          <motion.span
            key={index}
            initial={initialProps}
            animate={animateProps}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {element === " " ? "\u00A0" : element}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
