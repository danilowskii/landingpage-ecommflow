import { motion } from "framer-motion";
export default function ScrollRevealFromTop({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
