import React from 'react'
import { motion } from 'framer-motion'
import { style } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#b45eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`mt-1 text-white font-${style.heroHeadText}`}>Hi, I'm <span className='text-[#b45eff]'>MANIKANDAN</span></h1>
          <p className={`${style.heroSubText} text-white mt-2`}>Full-stack and Android dev<br className='sm:block hidden' /> proficient in C++ and Java, venturing into cybersecurity.<br className='sm:block hidden' />Passionate about crafting secure, innovative solutions.</p>
        </div>
      </div>

      <ComputersCanvas/>

      <div className=" absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{y:[0, 24, 0]}}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop',
                repeatDelay:0.3
              }}
              className=' w-3 h-3 rounded-full bg-[#b45eff] mb-1'
            />
          </div>  
        </a>
      </div>
    
    </section>
  )
}

export default Hero