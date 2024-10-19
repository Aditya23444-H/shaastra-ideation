import { useRef, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import Home from "./pages/Home";
import About from "./pages/About";
import { motion, useScroll, useTransform } from "framer-motion";

const App = () => {
  const [isClock, setIsClock] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-100vw"]);
  
  return (
    <ToggleContext.Provider value={{ isClock, setIsClock }}>
      <section ref={ref} className="relative h-[200vh]">
        <div className="flex sticky top-0 h-screen w-max">
          <motion.div style={{x}} className="flex">
            <Home />
            <About />
          </motion.div>
        </div>
      </section>
    </ToggleContext.Provider>
  );
};

export default App;
