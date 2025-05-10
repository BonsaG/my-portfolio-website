import React from "react";
import { skills } from "../data/portfolio";

const SkillCategory: React.FC<{ title: string; category: string }> = ({
  title,
  category,
}) => {
  return (
    <div className="mb-8 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills[category].map((skill, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </h4>
              <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                Learning
              </span>
            </div>
            <div className="mt-4 flex space-x-2">
              <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                In Progress
              </span>
              <span className="inline-block px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full">
                Growing
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full transition-colors duration-300"></div>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            As a junior developer, I'm actively learning and improving my skills
            in these technologies. Each day brings new challenges and
            opportunities to grow.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        {/* <div className="bg-gray-50/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300">
            <SkillCategory title="Frontend Development" category="frontend" />
          </div> */}

        {/* <div className="bg-gray-50/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300">
            <SkillCategory title="Backend Development" category="backend" />
          </div> */}

        {/* <div className="bg-gray-50/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300">
            <SkillCategory title="Tools & Platforms" category="tools" />
          </div> */}
        {/* </div> */}

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-12 transition-colors duration-300">
            Technologies I'm Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <span className="text-xl font-medium bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {tech}
                </span>
                <div className="absolute -top-2 -right-2">
                  <span className="inline-block px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full">
                    Learning
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
