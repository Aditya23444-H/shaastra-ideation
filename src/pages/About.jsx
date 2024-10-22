import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  // Create a ref for the About section
  const aboutRef = useRef(null);

  // Use the useInView hook to track when the section is in view
  const isInView = useInView(aboutRef, { threshold: 0.5 }); // Trigger when 50% visible

  // Create an animation control using useAnimation
  const controls = useAnimation();

  // UseEffect to trigger animation when the section is in view
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, type: "spring", stiffness: 120 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 }); // Reset animation when out of view
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={aboutRef} // Set the ref to track visibility
      initial={{ opacity: 0, y: 50 }} // Initial hidden state
      animate={controls} // Animate using the controls
      className="w-[70vw] bg-p5 h-full relative p-5 box-border flex flex-col"
    >
      <p className="text-white text-7xl font-bangers text-border-small mb-4">
        ABOUT
      </p>
      <div className="bg-p6 h-full w-full rounded-xl"></div>
    </motion.div>
  );
}
