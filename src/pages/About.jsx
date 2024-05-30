import React from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import nnmimg from "../assets/self.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>About Me - Nirpendra Nath Mishra</title>
        <meta
          name="description"
          content=" Nirpendra Nath Mishra, a tech enthusiast and computer science scholar from Darbhanga, Bihar, India. I am currently pursuing my MCA at Amity University And Serving as a Intern At Jio Platforms Limited."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="About Me - Nirpendra Nath Mishra" />
        <meta
          property="og:description"
          content="Dive into the profile of Nirpendra Nath Mishra, a tech enthusiast and computer science scholar from Darbhanga, Bihar, India. I am currently pursuing my MCA at Amity University And Serving as a Intern At Jio Platforms Limited."
        />
        <meta property="og:image" content={nnmimg} />
        <meta property="og:url" content="Your page URL here" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Nirpendra Nath Mishra" />
        <meta
          name="twitter:description"
          content="Dive into the profile of Nirpendra Nath Mishra, a tech enthusiast and computer science scholar from Darbhanga, Bihar, India. I am currently pursuing my MCA at Amity University And Serving as a Intern At Jio Platforms Limited."
        />
        <meta name="twitter:image" content={nnmimg} />
      </Helmet>
      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-5 lg:p-10">
        <h1 className="text-center text-white md:text-5xl sm:text-3xl text-xl font-bold mb-5">
          About Me:
        </h1>
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="about-me-text lg:px-10 p-2 py-10 md:text-2xl sm:text-xl text-sm font-mono text-white/70">
          <p className=" ">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
              Nirpendra Nath Mishra
            </span>
             A tech enthusiast and computer science scholar from Darbhanga, Bihar, India. I am currently pursuing my MCA at Amity University and serving as an Intern at Jio Platforms Limited. <br /> 
            <br />
            I enjoy Web Dev and Open Source, working with Go, Cloudflare, and Kubernetes. <br /> I share tech insights on my socials and am always open to new opportunities and collaborations.
          </p>

            <div className=" p-3 bg-gray-600/20 flex gap-3 justify-between items-center rounded-lg mt-12">
              <div className="text-xl sm:text-3xl h-full text-[#ef4444]/60">
                <AiOutlineInfoCircle></AiOutlineInfoCircle>
              </div>
              <p className="text-sm sm:text-lg font-medium tracking-wider   ">
                The performance of the site is not great. I'm in the process of
                migrating this website to Next.js for Server Side Rendering and
                better SEO.
              </p>
            </div>
          </div>

          <div className="sm:w-[2000px] w-1/2 m-auto">
            <img
              src={nnmimg}
              className=" w-full ease-in aspect-square object-cover rounded-[50%]"
              alt="Nirpendra Nath Mishra"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
