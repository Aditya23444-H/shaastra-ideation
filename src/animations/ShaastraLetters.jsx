import React from 'react'
import { motion } from 'framer-motion';

const ShaastraLetters = ({letter,index}) => {
    const i = Math.pow(-1,index+1);

  return (
    <motion.span
        variants={{
            hidden: { opacity:0, y:`${i*100}vh` },
            visible:{
            opacity:1,
            y:0,
            transition: {
                duration:1, type:"spring"
            }
            }
            }}
        className="text-[220px] text-white font-bangers text-border mr-8">
        {letter}
    </motion.span>
  )
}

export default ShaastraLetters
