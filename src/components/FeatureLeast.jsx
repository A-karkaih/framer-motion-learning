import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FeatureLeast() {
  const features = ["Fast", "Declarative", "Powerful", "Fun"];

  return (
    //we used  initial="hidden" animate="visible" in parent only , because the children inherit from the parent .
    <motion.ul variants={container} initial="hidden" animate="visible">
      {features.map((feature) => {
        return (
          <motion.li variants={item} key={feature}>
            {feature}
          </motion.li>
        );
      })}

      {/* <h3>{features[0]}</h3>
      <h3>{features[1]}</h3>
      <h3>{features[2]}</h3>
      <h3>{features[3]}</h3> */}
    </motion.ul>
  );
}

export default FeatureLeast;
