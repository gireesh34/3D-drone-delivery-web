"use client";

import { motion } from "framer-motion";

interface PreloaderProps {
  text?: string;
}

export const Preloader = ({ text = "Loading 3D Experience..." }: PreloaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute w-full h-full border-4 border-t-transparent bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-xl">{text}</p>
      </div>
    </motion.div>
  );
};

