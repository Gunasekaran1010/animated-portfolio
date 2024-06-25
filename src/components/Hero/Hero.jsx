import { motion } from "framer-motion"

import "./hero.scss"

function Hero() {

  const textvarients = {
    initial : {
      x : -500,
      opacity : 0 ,
    },
    animate : {
      x : 0,
      opacity : 1,
      transition : {
        duration : 1,
        staggerChildren : 0.1, 
      } ,
    },

    scrollButtons : {
      opacity : 0 ,
      y : 10 ,
      transition : {
        duration : 2 ,
        repeat : Infinity,
      },
    },
  };

  
  const slidevarients = {
    initial : {
      x : 0,
    },
    animate : {
      x : "-220%",
      transition : {
        repeat : Infinity,
        duration : 20,
        
      } ,
    },

    scrollButtons : {
      opacity : 0 ,
      y : 10 ,
      transition : {
        duration : 2 ,
        repeat : Infinity,
        repeatType : "mirror",
      },
    },
  };

  return (
    <div className="hero" >
      <div className="wrapper">
      <motion.div className="textContainer" variants={textvarients} initial = "initial" animate = "animate" >
        <motion.h2 variants={textvarients}>Gunasekaran P</motion.h2>
        <motion.h1 variants={textvarients}>Web Developer and Java Developer</motion.h1>
        <motion.div className="buttons" variants={textvarients}> 
          <motion.button variants={textvarients}>See The Latest Peojects</motion.button>
          <motion.button variants={textvarients}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants={textvarients} animate = "scrollButtons" src="/scroll.png" alt="" />
      </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={slidevarients} initial = "initial" animate = "animate">
        Web Application Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero