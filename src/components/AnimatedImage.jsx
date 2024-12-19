import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.1 }} // Efecto de escalado al pasar el mouse
      whileTap={{ scale: 0.95 }} // Efecto al hacer clic
      initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
      animate={{ opacity: 1, y: 0 }} // Finaliza en posición original
      transition={{ duration: 0.5, ease: "easeOut" }} // Suavidad de animación
      className="animated-image max-w-full h-auto mb-4"
    />
  );
};

export default AnimatedImage;
