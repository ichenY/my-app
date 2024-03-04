import React from "react";

interface SkillItemProp {
  source: string;
  alt: string;
  title: string;
}

const SkillItem: React.FC<SkillItemProp> = ({ source, alt, title }) => {
  return <img src={source} alt={alt} title={title} />;
};

export default SkillItem;
