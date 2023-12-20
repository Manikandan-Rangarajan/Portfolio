import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { style } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { StarWrapper } from "../hoc";

const ServiceCard = ({title, index, icon}) =>{
  return(
    <Tilt className=" xs:w-[250px] w-full ">
       <motion.div className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card " variants={fadeIn("right", "spring", 0.5*index, 1)}>
           <div options={{
            max:90,
            scale:1,
            speed:650
           }}
           className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col ">
                <img src={icon} alt="title" className="h-20 w-20 object-contain" />
                <h3 className=" text-secondary text-[20px] font-bold text-center ">
                  {title}
                </h3>
           </div>
       </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A proficient and versatile developer, I boast expertise in full-stack
        and Android development, with a solid command of programming languages
        such as C++ and Java. Currently expanding my skill set, I am navigating
        the intricate world of cybersecurity with a keen interest in ethical
        hacking and penetration testing. The ability to seamlessly integrate
        security measures into innovative solutions is a testament to my
        commitment to crafting robust and forward-thinking applications. My
        journey also takes an artistic turn, as I delve into the realm of
        Three.js, leveraging its capabilities to introduce immersive 3D elements
        into web and mobile applications. This diverse technical background
        positions me at the intersection of software development and
        cybersecurity, where I am enthusiastic about tackling challenges and
        staying at the forefront of emerging technologies.
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-10">
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  );
};

export default StarWrapper(About, "about")
