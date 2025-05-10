import React from "react";
import { Code, Server, Rocket, Heart } from "lucide-react";
import { aboutMe } from "../data/portfolio";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full transition-colors duration-300"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors duration-300">
                My Journey
              </h3>

              <div className="space-y-6">
                {aboutMe.bio.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <div className="flex items-start space-x-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <Code size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                        Frontend Development
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Learning to build beautiful and responsive user
                        interfaces.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-green-400 to-green-500 rounded-xl shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                        <Server size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                        Backend Development
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Growing my skills in server-side programming.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                        <Rocket size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                        Problem Solving
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Developing my analytical and debugging skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-red-400 to-red-500 rounded-xl shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                        <Heart size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                        Passion for Learning
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Eager to learn and grow as a developer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors duration-300">
                Learning Focus
              </h3>

              <div className="space-y-6">
                <div className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-600/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Web Development
                    </h4>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Growing
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Building modern web applications with React
                  </p>
                </div>

                <div className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-600/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      UI Design
                    </h4>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Learning
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Exploring principles of user interface design
                  </p>
                </div>

                <div className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-600/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      Databases
                    </h4>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Exploring
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learning database design and management
                  </p>
                </div>

                <div className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-600/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-gray-800 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      Best Practices
                    </h4>
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">
                      Developing
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learning clean code and development practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
