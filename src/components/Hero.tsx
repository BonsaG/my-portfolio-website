import React from "react";
import { ArrowDown, Send } from "lucide-react";
import { aboutMe } from "../data/portfolio";

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = aboutMe.resumeUrl;
    link.download = "Bonsa_Girma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              <span className="inline-block">Hello, I'm</span>
              <span className="block text-blue-600 dark:text-blue-400 mt-2 transition-colors duration-300">
                {aboutMe.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
              {aboutMe.title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
              {aboutMe.tagline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors duration-300 group"
              >
                <ArrowDown size={18} className="group-hover:animate-bounce" />
                Download Resume
              </button>
              <a
                href="#contact"
                className="bg-transparent border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <Send size={18} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto transition-colors duration-300">
              <img
                src={aboutMe.image}
                alt={aboutMe.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 transition-colors duration-300">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></span>
                  <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-block animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 dark:text-gray-500 transition-colors duration-300"
            >
              <path d="M7 13l5 5 5-5"></path>
              <path d="M7 7l5 5 5-5"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
