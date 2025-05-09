import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt }) => {

  return (
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.08 }} // Efecto de escalado al pasar el mouse
      whileTap={{ scale: 0.95 }} // Efecto al hacer clic
      initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
      animate={{ opacity: 1, y: 0 }} // Finaliza en posición original
      transition={{ duration: 0.3, ease: "easeOut" }} // Suavidad de animación
      className="animated-image max-w-full h-[250px] mb-4 rounded-t-lg"
    />
  );
};

export default AnimatedImage;
