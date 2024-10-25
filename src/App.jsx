import { useEffect, useRef, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import Homepage from "./pages/Homepage";
import { useScroll, useTransform, motion } from "framer-motion";
import About from "./pages/About";
import Timer from "./pages/Timer";
import Footer from "./pages/Footer";
import NavbarComponent from "./pages/NavbarComponent";
import Cursor from "./cursor/Cursor";
// import MobileNavbar from "./navbarcomponents/MobileNavbar";

const App = () => {
  const [isClock, setIsClock] = useState(false);
  const ref = useRef(null);
  const refreshRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2;

      if (window.scrollY >= triggerPoint) {
        setHasScrolled(true);
        setHasAnimated(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-200vw"]);
  // const t = hasScrolled?1:4;
  // console.log(hasScrolled);

  return (
    <ToggleContext.Provider
      value={{ isClock, setIsClock, hasAnimated, setIsMoved, isMoved }}
    >
      <Cursor/>
      <section
        ref={ref}
        className="relative h-[400vh]"
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          className="flex sticky top-0 h-screen bg-p6 w-max z-20 bgImg"
          
        >
          <motion.div
            className="w-min absolute rounded-full bg-transparent z-20 flex "
            animate={{
              x: isMoved ? 160 : 0, // Adjust the 100 value for the desired x-translation
              // width:isMoved?"30vw":"25vw",
            }}
            transition={{ duration: 0.5 }} // Animation duration
            onClick={() => setIsMoved(!isMoved)}
          >
            <NavbarComponent />
          </motion.div>
          {/* <div className="fixed top-10 right-0 z-30"> <MobileNavbar /></div> */}

          <motion.div
            style={{x}}
            ref={refreshRef}
            className="flex relative h-screen w-[350vw]"
          >
            <Homepage />

            <About />
            <Timer />
            <Footer />
          </motion.div>
        </div>
      </section>
    </ToggleContext.Provider>
  );
};

export default App;
