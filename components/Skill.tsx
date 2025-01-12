import { motion } from "framer-motion";
import React from "react";
import SkillItem from "./SkillItem";
import {
  SiPython,
  SiAngular,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiCsharp,
  SiPhp,
  SiHelm,
} from "react-icons/si";

type Props = {};

function Skill({}: Props) {
  const skills = ["Python", "Csharp", "Php"];
  return (
    <div className="h-screen">
      Skills
      {/* {skills.map((item, index) => (
        <SkillItem key={index} title={item} />
      ))} */}
      {/* <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> */}
      {/* <div className="grid p-6 opacity-85 bg-white border border-sky-200 rounded-lg shadow hover:bg-sky-100 dark:bg-sky-800 dark:border-sky-700 dark:hover:bg-sky-700">
        <SiPython color="#D6DBDF" />
      </div> */}
      {/* <SiCsharp color="#D6DBDF" />
      <SiPhp color="#D6DBDF" />
      <SiAngular color="#D6DBDF" />
      <SiDocker color="#D6DBDF" />
      <SiJenkins color="#D6DBDF" />
      <SiKubernetes color="#D6DBDF" />
      <SiHelm color="#D6DBDF" /> */}
      {/* </motion.div> */}
    </div>
  );
}

export default Skill;
