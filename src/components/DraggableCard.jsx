import { motion } from "motion/react";
export const DraggableCard = () => {
  return (
    <div>
      <motion.div
        className="card"
        drag
        dragConstraints={{ left: -130, right: 130, top: -80, bottom: 80 }}
        dragElastic={0.2}
      >
        Drag me!
      </motion.div>
      <h3>Heloo world</h3>
    </div>
  );
};
