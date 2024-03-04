import { motion } from "framer-motion";
import React from "react";
import SkillItem from "./SkillItem";
import { SiPython, SiAngular } from "react-icons/si";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen">
      Skills
      {/* <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> */}
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <SiPython></SiPython>
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default Skills;
