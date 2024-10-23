import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
// import {fractal} from "";

export default function About() {
  const aboutRef = useRef(null);

  // Use the useInView hook to track when the section is in view
  const isInView = useInView(aboutRef, { threshold: 0.5 });

  // Create an animation control using useAnimation
  const controls = useAnimation();
  const imgControls = useAnimation();

  // UseEffect to trigger animation when the section is in view
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0, // Start at normal position
        transition: { duration: 2, type: "spring", stiffness: 40 },
      });
    } else {
      controls.start({ opacity: 0, x: 500 }); // Reset animation when out of view
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isInView) {
      imgControls.start({
        scale: 1,
        transition: { duration: 1 },
      });
    } else {
      imgControls.start({ opacity: 0, scale: 0.5 }); // Reset animation when out of view
    }
  }, [isInView, imgControls]);

  return (
    <motion.div
      ref={aboutRef} // Set the ref to track visibility
      initial={{ opacity: 0, x: 50 }} // Initial hidden state from the right
      animate={controls} // Animate using the controls
      className="w-[70vw] h-full relative p-5 box-border flex flex-col"
    >
      <h3 className="text-white text-7xl font-bangers text-border-small mb-4">
        ABOUT
      </h3>

      <div className="bg-p7a2 h-full p-10 text-white text-xl w-full rounded-xl grid grid-cols-2 grid-rows-[auto,auto] gap-4">
        <p className="row-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
          tempore blanditiis enim sed repellendus, ipsa beatae atque obcaecati
          commodi?
        </p>
        <motion.div
          initial={{ scale: 0.5 }} // Initial hidden state from the right
          animate={imgControls} // Animate using the controls
          className="row-span-2 place-self-center"
        >
          <img
            src="/fractal.jpg"
            alt="fractal image"
            className="w-full h-auto object-cover"
          />
        </motion.div>
        <p className="row-span-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
          tempore blanditiis enim sed repellendus, ipsa beatae atque obcaecati
          commodi?
        </p>
        <p className="col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
          tempore blanditiis enim sed repellendus, ipsa beatae atque obcaecati
          commodi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
          quis itaque ipsum odit aspernatur numquam? Adipisci nemo amet
          voluptatem veritatis.
        </p>
      </div>
    </motion.div>
  );
}
