import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function VoiceOrb() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="relative flex flex-col items-center gap-12">
      {/* Main Orb Container - 180px like loader-wrapper */}
      <div className="relative w-[180px] h-[180px] flex items-center justify-center">
        {/* Rotating loader with inset box-shadow animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            backgroundColor: "transparent",
          }}
          animate={{
            rotate: [90, 270, 450],
            boxShadow: [
              "0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset",
              "0 10px 20px 0 #fff inset, 0 20px 10px 0 #d60a47 inset, 0 40px 60px 0 #311e80 inset",
              "0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Control button */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/20"
      >
        {isActive ? "Listening..." : "Click to Start"}
      </button>

      {/* Audio waves visualization */}
      <div className="flex items-center gap-1 h-16">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full"
            animate={{
              height: ["20px", "60px", "20px"],
              background: [
                "linear-gradient(to top, #ad5fff, #471eec)",
                "linear-gradient(to top, #d60a47, #311e80)",
                "linear-gradient(to top, #ad5fff, #471eec)",
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}