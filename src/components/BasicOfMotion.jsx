import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button onClick={() => setIsVisible(!isVisible)} className='example-button' layout>
        Show/Hide
      </motion.button>

      <AnimatePresence mode='popLayout'>
        {isVisible && (
          <motion.div
            initial={{
              background: "red",
              rotate: "0deg",
              scale: 0,
              x: 0,
              y: 20,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              x: [0, 150, -150, -150, 0],
              y: [0, 200, 300, 100, 0],
            }}
            exit={{
              background: "purple",
              rotate: "0deg",
              scale: 0,
              x: 0,
              y: 0,
            }}
            transition={{
              background: "orange",
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
