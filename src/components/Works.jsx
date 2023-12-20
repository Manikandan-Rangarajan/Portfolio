import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { style } from "../style";
import { github } from "../assets";
import { StarWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Pcard = ({index, name, description, tags, 
   image, source_code_Link})=>{
    return(
    <motion.div
      variants={fadeIn("", "", index * 0.5, 0.75)}
     >
      <Tilt
        options={{
          max:45,
          scale:1,
          speed: 500,
        }}
        className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
      <div className=" relative h-[200px] w-full">
         <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
      </div>

      <div className=" absolute inset-0 flex justify-end m-3 card-img_hover ">
         <div className=" black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" onClick={()=>window.open(source_code_Link, "_blank")}>
               <img src={github} alt="github" className=" w-1/2 h-1/2 object-contain " />
         </div>
      </div>

      <div className="mt-5">
        <h3 className=" text-white text-[24px] font-bold ">{name}</h3>
        <p className=" text-secondary text-[14px] font-semibold ">{description}</p>
      </div>

       <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
               #{tag.name}
            </p>
          ))}
       </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>MY WORKS</p>
        <h2 className={style.sectionHeadText}>
          PROJ<span className="text-[#b45eff] ">ECTS</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Navigating through diverse domains, I excel in full-stack and Android
          development, crafting seamless applications with a focus on robust
          security measures. Proficient in C++ and Java, I optimize algorithms
          and contribute to the Java ecosystem. Currently delving into
          cybersecurity, I hone skills in ethical hacking. My exploration of
          Three.js adds a creative dimension, infusing immersive 3D elements
          into web and mobile applications. This journey underscores my
          commitment to versatile expertise across interconnected domains.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-row flex-wrap gap-7">
            {projects.map((project, index)=>(
              <Pcard key={`project-${index}`} index={index} {...project} />
            ))}
      </div>
    </>
  );
};

export default StarWrapper(Works, "");
