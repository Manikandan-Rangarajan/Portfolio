import { motion } from "framer-motion"

import { style } from "../style"
import { StarWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { Tilt } from "react-tilt"

const FeedbackCard = ({index, testimonial, name, company, designation, image})=>(

  <Tilt>
        <motion.div
    variants={fadeIn("", "spring", index*0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full "
  >
    <p className="text-white font-bold text-[48px] ">"</p>

    <div className="mt-1">
       <p>{testimonial}</p>

       <div className="mt-7 flex justify-between items-center gap-1 ">
          <div className="flex-1 flex flex-col">
             <p className="text-white text-[16px] font-medium">
                <span className="blue-text-gradient">@</span>&nbsp;{name}
             </p>
             <p className="text-secondary text-[13px] mt-1">
                {designation} of {company}
             </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} className="h-10 w-10 rounded-full object-contain"/>
       </div>
    </div>

  </motion.div>
  </Tilt>
 
)

const Feedbacks = () => {
  return (
    
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div className={`${style.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
        <motion.div
          variants={textVariant()}
        >
          <p className={style.sectionSubText}>What Others Say</p>
          <h2 className={style.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${style.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
           {testimonials.map((testimonial, index)=>(
              <FeedbackCard
                key={testimonial.name} index={index} {...testimonial}
              />
           ))}
      </div>
    </div>
  )
}

export default StarWrapper(Feedbacks, "");