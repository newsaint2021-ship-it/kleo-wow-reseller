import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFAB = () => (
  <motion.a
    href="https://wa.me/27729838166?text=Hi%20Kleo%2C%20I%27m%20interested%20in%20your%20spices."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full shadow-kleo-lg"
    style={{ width: 56, height: 56, background: "#25D366" }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5, duration: 0.4 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="w-6 h-6 text-white" fill="white" />
  </motion.a>
);

export default WhatsAppFAB;
