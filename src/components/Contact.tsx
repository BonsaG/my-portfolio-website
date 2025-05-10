import React, { useState, useRef } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data/portfolio";
import { FormData } from "../types";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_a6tu2l6", // Replace with your EmailJS service ID
        "template_ny5mvf2", // Replace with your EmailJS template ID
        formRef.current!,
        "PnYtwTpUlgl4MSmba" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <Toaster position="top-right" />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full transition-colors duration-300"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Have a question or want to work together? Feel free to reach out to
            me using the form below or through my social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="example@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-md transition-colors duration-300">
                      <Mail
                        size={20}
                        className="text-blue-600 dark:text-blue-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1 transition-colors duration-300">
                      Email
                    </h4>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-md transition-colors duration-300">
                      <Linkedin
                        size={20}
                        className="text-blue-600 dark:text-blue-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1 transition-colors duration-300">
                      LinkedIn
                    </h4>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-md transition-colors duration-300">
                      <Github
                        size={20}
                        className="text-blue-600 dark:text-blue-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1 transition-colors duration-300">
                      GitHub
                    </h4>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
                Let's Connect
              </h3>

              <div className="flex justify-around">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                >
                  <Github
                    size={24}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                >
                  <Linkedin
                    size={24}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  />
                </a>

                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                >
                  <Mail
                    size={24}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
