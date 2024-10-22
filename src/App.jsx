import { useEffect, useRef, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import Homepage from "./pages/Homepage";
import { useScroll, useTransform, motion } from "framer-motion";
import About from "./pages/About";
import Timer from "./pages/Timer";
import Footer from "./pages/Footer";
import NavbarComponent from "./pages/NavbarComponent";

const App = () => {
  const [isClock,setIsClock] = useState(false);
  const ref = useRef(null);
  const refreshRef = useRef(null);
  const [hasScrolled,setHasScrolled] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0); 
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2;

      if(window.scrollY >= triggerPoint){
        setHasScrolled(true);
      }else{
        setHasScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])


  const {scrollYProgress} = (useScroll({
    target:ref,
  }));

  const x = useTransform(scrollYProgress, [0,1], ["0px", "-210vw"]);
  // const t = hasScrolled?1:4;
  // console.log(hasScrolled);

  return (
  <ToggleContext.Provider value={{isClock,setIsClock}}>
    <section ref={ref} className="relative h-[400vh]" style={{ scrollBehavior: "smooth" }}>
      <div className="flex sticky top-0 h-screen w-max bg-p6">
          {!hasScrolled? 
            <motion.div
              // key={hasScrolled && "scrolled" }
              variants={{
                hidden: { opacity:0, y:"100vh"},
                visible:{
                  opacity:1,
                  y:0,
                  transition:{
                    duration:1, delay:!hasScrolled&&4, type:"spring"
                  }
                }
              }}
              style={hasScrolled?{transform:"translateX(-10%)"}:{x, left:"10%"}}
              initial="hidden"
              animate="visible"
              className="w-[30vw] h-[30vw] absolute top-[20%] rounded-full bg-transparent backdrop-blur-md z-20 flex shadow-right justify-center items-center">
              <NavbarComponent/>
            </motion.div> :
            <div className="w-[30vw] h-[30vw] absolute top-[20%] rounded-full bg-transparent backdrop-blur-md z-20 flex shadow-right justify-center items-center">
              <NavbarComponent/>
            </div>
          }
          {/* <motion.div
            // key={hasScrolled && "scrolled" }
            variants={{
              hidden: { opacity:0, y:"100vh"},
              visible:{
                opacity:1,
                y:0,
                transition:{
                  duration:1, delay:!hasScrolled&&4, type:"spring"
                }
              }
            }}
            style={hasScrolled?{transform:"translateX(-10%)"}:{x, left:"10%"}}
            initial="hidden"
            animate="visible"
            className="w-[30vw] h-[30vw] absolute top-[20%] rounded-full bg-transparent backdrop-blur-md z-20 flex shadow-right justify-center items-center">
            <NavbarComponent/>
          </motion.div> */}
          {hasScrolled&&
          <div className="w-[15vw] h-screen absolute bg-transparent backdrop-blur-md z-10 box-shadow "></div>
          }
          <motion.div style={{x}} ref={refreshRef} className="flex relative snap-mandatory scroll-smooth snap-x overflow-x-scroll h-screen w-[350vw]">
            <Homepage className="snap-end"/>
            <About className="snap-end"/>
            <Timer className="snap-end"/>
            <Footer className="snap-end"/>
          </motion.div>
      
      </div>
   </section>
  </ToggleContext.Provider> );
};

export default App;
