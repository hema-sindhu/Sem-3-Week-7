import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once: true}}
      className='container mx-auto py-5 lg:px-16 w-full overflow-hidden' 
      id='Testimonials'
      style={{ maxWidth: '90%' }}  
    >
      <h1 
        className='text-xl sm:text-3xl font-bold mb-1 text-center'
      >
        Customer <span className='underline underline-offset-2 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p 
        className='text-center text-gray-500 mb-6 mx-auto' 
        style={{ maxWidth: '60%' }}  
      >
        Real Stories from Those who Found Home with Us
      </p>

      <div className='flex flex-nowrap justify-between gap-4 overflow-x-auto'>
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className='max-w-[280px] border shadow-md rounded px-6 py-8 text-center'  
          >
            <img 
              className='w-16 h-16 rounded-full mx-auto mb-3'  
              src={testimonial.image} 
              alt={testimonial.alt} 
            />
            <h2 className='text-lg text-gray-700 font-medium'>
              {testimonial.name}
            </h2>
            <p className='text-gray-500 mb-3 text-sm'>
              {testimonial.title}
            </p>
            <div className='flex justify-center gap-1 text-red-500 mb-3'>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="Star icon" />
              ))}
            </div>
            <p className='text-gray-600 text-sm'>
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
