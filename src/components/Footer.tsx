import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">
              Bonsa Girma
            </h2>
            <p className="text-gray-400 max-w-xs">
              Full Stack Developer crafting elegant solutions to complex
              problems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/BonsaG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/bonsa-girma2025 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bonsogirma@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Bonsa Girma. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center">
            Made with
            <Heart size={16} className="mx-1 text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
