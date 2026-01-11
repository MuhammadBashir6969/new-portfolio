import React from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-90 pb-70" id="contact">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-col-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Reach me by scheduling a call.
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg ">
            <span className="text-cyan-400"> Reach out to me today,</span> let's
            work together to create something great!
          </p>
          <div className="mt-7 space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-3 text-white font-bold text-sm sm:text-base md:text-lg">
              <BiPhone className="w-8 h-8 text-cyan-300 shrink-0" />
              <a href="tel:+2348102952393" className="hover:underline">
                +234 810 295 2393
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 text-white font-bold text-sm sm:text-base md:text-lg">
              <BiEnvelope className="w-8 h-8 text-cyan-300 shrink-0" />
              <a
                href="mailto:muhammadbashir754401830@gmail.com"
                className="hover:underline"
              >
                muhammadbashir754401830@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center mt-8 space-x-3">
            <a
              href="https://www.instagram.com/muhammad_basheer_?igsh=MTVheDh4d3lpOWc3ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              title="Instagram"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-all duration-300">
                <FaInstagram className="text-white w-6 h-6" />
              </div>
            </a>

            <a
              href="https://x.com/_muhd_basheer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              title="Twitter"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-all duration-300">
                <FaTwitter className="text-white w-6 h-6" />
              </div>
            </a>

            <a
              href="https://wa.me/2348102952393"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat"
              title="WhatsApp"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-all duration-300">
                <FaWhatsapp className="text-white w-6 h-6" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bashir-muhammad-idris-5880bb344/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-all duration-300">
                <FaLinkedin className="text-white w-6 h-6" />
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-all duration-300">
                <FaGithub className="text-white w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
