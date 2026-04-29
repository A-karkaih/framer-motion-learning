import { motion } from "motion/react";
export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{ textAlign: "center" }}
        initial={{
          opacity: 0,
          y: 300,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.h1>Hello world </motion.h1>
      </motion.div>
    </div>
  );
}
