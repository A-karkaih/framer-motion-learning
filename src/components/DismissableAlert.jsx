import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
export const DismissableAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>Toggle alerte!</button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ y: -10, opacity: 0 }}
            className="alert"
          >
            This is an animated alert
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
