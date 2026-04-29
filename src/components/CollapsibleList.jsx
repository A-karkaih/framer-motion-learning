import { motion } from "motion/react";
import { useState } from "react";

export const CollapsibleList = () => {
  const [expanded, setExpanded] = useState(null);
  const items = [
    { id: 1, text: "1 => This expands and contracts with a layout" },
    { id: 2, text: "2 => This expands and contracts with a layout" },
    { id: 3, text: "3 => This expands and contracts with a layout" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((item) => {
        return (
          <motion.div
            layout
            key={item.id}
            className="card2"
            onClick={() => {
              setExpanded((prev) => (prev === item.id ? null : item.id));
            }}
          >
            <h3>Item {item.id}</h3>
            {expanded === item.id && <motion.p >{item.text}</motion.p>}
          </motion.div>
        );
      })}
    </div>
  );
};
