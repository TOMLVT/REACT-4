import { motion } from "framer-motion"
import { SlideLeft } from "../../utility/animation"


const Banner2 = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
            <motion.h1 
            variants={SlideLeft(0.3)}
            initial='hidden'
            whileInView={'visible'}
            viewport={{once : false}}
            className="text-3xl font-bold lg:text-5xl uppercase">Get 20% Discount On Your First Order, Are You Ready To Buy</motion.h1>
            <motion.p 
             variants={SlideLeft(0.5)}
            initial='hidden'
            whileInView={'visible'}
            viewport={{once : false}}
            >We will make sure you get the right and the best quality products for your workout</motion.p>
            <motion.div 
             variants={SlideLeft(0.5)}
            initial='hidden'
            whileInView={'visible'}
            viewport={{once : false}}
            className="flex justify-center gap-5">
                <button className="primary-btn">Learn More</button>
                <button className="border-primary border-2 rounded-lg px-4 text-primary font-bold">Stay In Touch</button>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
