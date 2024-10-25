import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";

export default function About() {
  const aboutRef = useRef(null);

  // Use the useInView hook to track when the section is in view
  const isInView = useInView(aboutRef, { threshold: 0.15 });

  // States for typing effect
  const [randomIndexes, setRandomIndexes] = useState(new Set());

  // Create an animation control using useAnimation
  const sectionControls = useAnimation();
  const imgControls = useAnimation();

  const paragraph =
    "Shaastra is the annual technical festival of the Indian Institute of Technology Madras (IITM), Chennai, India. The Sanskrit word ‘Shaastra’ means science and the festival accordingly consists of various engineering, science, and technology competitions, summits, lectures, video conferences, exhibitions, demonstrations and workshops. The festival is traditionally held over four days and four nights from 3rd to 7th January. It has so far seen twenty-five editions, having started in its current avatar in the year 2000. Shaastra is entirely student-managed and is the first such event in the world to be ISO 9001:2015 certified.";

  const paraArray = paragraph.split(" ");

  // UseEffect to trigger animation when the section is in view
  useEffect(() => {
    if (isInView) {
      sectionControls
        .start({
          opacity: 1,
          x: 0, // Start at normal position
          transition: { duration: 2, type: "spring", stiffness: 40 },
        })
        .then(() => {
          // Trigger typing animations after the section animation is over
          startTyping(setText, paragraph);
        });
    } else {
      sectionControls.start({ opacity: 0, x: 500 }); // Reset animation when out of view
    }
  }, [isInView, sectionControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSet = new Set();
      // Randomly pick up to 5 letters to glitch at any time
      for (let i = 0; i < 5; i++) {
        randomSet.add(Math.floor(Math.random() * paraArray.length));
      }
      setRandomIndexes(randomSet);
    }, 1500); // Adjust interval for glitch frequency

    return () => clearInterval(interval);
  }, [paragraph]);
  console.log(randomIndexes);

  return (
    <motion.div
      ref={aboutRef} // Set the ref to track visibility
      initial={{ opacity: 0, x: 50 }} // Initial hidden state from the right
      animate={sectionControls} // Animate using the controls
      className="w-[80vw] h-full relative p-5 box-border flex flex-col"
    >
      <h3 className="text-white text-7xl font-bangers text-border-small mb-4">
        ABOUT
      </h3>

      <div className="bg-p7a2 h-full p-10 text-white text-xl w-full rounded-xl gap-4">
        <p className="text-4xl font-inika">
          {paraArray.map((word, index) => (
            <motion.span
              key={index}
              initial={{ scale: 1 }}
              animate={
                randomIndexes.has(index)
                  ? {
                      scale: 1.1,
                      color: "#c084fc",
                      textShadow: `
                    -1px -1px 0 #000,  
                     1px -1px 0 #000,
                    -1px  1px 0 #000,
                     1px  1px 0 #000
                  `,
                    }
                  : { scale: 1, color: "#FFFFFF" }
              }
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              className="inline-block mr-7"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}
