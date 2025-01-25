import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faPython,
  faOctopusDeploy,
  faPhp,
  faJenkins,
  faDocker,
  faBootstrap,
  faMicrosoft,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faCode } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const skills = [
  {
    name: "Angular",
    icon: faAngular,
    level: "Advanced",
  },
  {
    name: "Python",
    icon: faPython,
    level: "Advanced",
  },
  {
    name: "PHP",
    icon: faPhp,
    level: "Advanced",
  },
  {
    name: "Perl",
    icon: faCode,
    level: "Intermediate",
  },
  {
    name: "Linux",
    icon: faLinux,
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    level: "Intermediate",
  },
  {
    name: "Azure",
    icon: faMicrosoft,
    level: "Intermediate",
  },
  {
    name: "Docker",
    icon: faDocker,
    level: "Advanced",
  },
  {
    name: "Kubernetes",
    icon: faCloud,
    level: "Advanced",
  },
  {
    name: "Helm",
    icon: faCloud,
    level: "Advanced",
  },
  {
    name: "Jenkins",
    icon: faJenkins,
    level: "Intermediate",
  },
  {
    name: "Octopus",
    icon: faOctopusDeploy,
    level: "Intermediate",
  },
];

function Skill({}: Props) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
