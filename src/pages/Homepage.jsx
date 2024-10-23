// import NavbarComponent from "./NavbarComponent";
import {motion} from "framer-motion";
import ShaastraLetters from "../animations/ShaastraLetters";

export default function Homepage() {
  const shaastra = ['S','H','A','A','S','T','R','A']

  return (
    <div className="w-[100vw] h-full bg-p5 relative box-border flex justify-start items-center p-6">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="w-full h-full relative overflow-hidden bg-p6 rounded-xl text-black flex flex-col justify-center items-center"
      >
        <motion.p 
         variants={{
          hidden: {opacity: 0, x:'-100vw'},
          visible:{
            opacity: 1,
            x:0,
            transition: { duration:1, type:"spring"}
          }
         }}
         className="text-[240px] -mb-[145px] font-bangers text-purple-300 z-0">
          WE
        </motion.p>
        <motion.p 
         variants={{
          hidden: {opacity: 0, x:'100vw'},
          visible:{
            opacity: 1,
            x:0,
            transition: { duration:1, type:"spring"}
          }
         }}
         className="text-[140px] -mb-[90px] font-londring text-purple-300 z-0">
          PRESENT
        </motion.p>
        <motion.p 
         variants={{
          hidden: {opacity: 0, y:'100vh'},
          visible:{
            opacity: 1,
            y:0,
            transition: { duration:1 }
          }
         }}
         className="text-[100px] font-inika text-purple-300 z-0">
          before YOU
        </motion.p>
        <motion.div 
         variants={{
          hidden: { opacity:0 },
          visible:{
            opacity:1,
            transition: {
              duration:0.5,
              delay:2,
              when: "beforeChildren"
            }
          }
         }}
         className="w-full absolute h-full bg-p6 rounded-md flex justify-center items-center z-10">
          {shaastra.map((letter,index)=>{
            return <ShaastraLetters letter={letter} index={index} key={index}/>
          })}
      </motion.div>
      </motion.div>
    </div>
  );
}