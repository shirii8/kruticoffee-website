// Marquee.jsx
import { motion } from "framer-motion";


const Skills = [
  ".KRUTI",
  ".COFFEE",
  ".KRUTI",
  ".COFFEE",
  ".KRUTI",
  ".COFFEE",
  
];

const Marquee = () => (
  <div className="w-full py-4 rounded-lg bg-[#1a0f0b] overflow-hidden">
    <div className="relative">
      <div className="absolute top-0 left-0 w-full border-t-2 border-zinc-300" />
      <div className="absolute bottom-0 left-0 w-full border-b-2 border-zinc-300" />

      <motion.div
        className="flex gap-10 text-white whitespace-nowrap pt-6 pb-6"
        style={{
          willChange: "transform",
          display: "flex",
          transform: "translateZ(0)",
        }}
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {/* Duplicated skills to make seamless loop */}
        {[...Skills, ...Skills].map((skill, index) => (
          <h1
            key={index}
            className="text-[1vw] leading-none font-TurretRoad font-bold uppercase"
          >
            {skill}
          </h1>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Marquee;
