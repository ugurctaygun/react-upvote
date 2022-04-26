import { motion } from "framer-motion";

const ltrAnimations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const rtlnimations = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const AnimatedPage = ({ children, direction }) => {
  return (
    <motion.section
      variants={direction === "ltr" ? ltrAnimations : rtlnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="o-container"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedPage;
