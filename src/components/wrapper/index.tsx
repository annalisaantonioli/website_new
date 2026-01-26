
import { motion } from "motion/react";
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { PhoneCallIcon, EnvelopeIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Projects from '../projects';



export default function Wrapper() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full bg-primary z-50 border border-r-[30px] border-secondary"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full bg-accent z-50 border border-l-[30px] border-secondary"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        onAnimationEnd={() => setShow(false)}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
      {show &&
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          onAnimationComplete={() => setShow(false)}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed w-[80%] h-full lg:w-[20%] top-0 left-1/2 z-49 top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <DotLottieReact
            src="/pigeon.json"
            loop
            autoplay
          />
        </motion.div>
      }
      <Projects setOpen={() => setOpen(!open)} open={open} />
      <div
        // initial={false}
        // animate={{ width: open ? '0px' : '41.666667%' }}
        // transition={{
        //   duration: 0.5,

        //   ease: [0, 0.71, 0.2, 1.01],
        // }}
        className=' flex  flex flex-col bg-light lg:shrink-0 grow md:w-0 lg:w-[50%] '>
        {/* <Monitor isOn={false} /> */}
        <div className='bg-accent md:bg-primary lg:bg-accent w-full h-[60vh] flex flex-col  justify-center px-8 text-light overflow-hidden'>

          <div className='lg:max-w-[500px] w-full py-6 md:pr-10' >
            <h2 className='font-heading text-3xl text-light  mb-4'>What can I do for you.</h2>
            <p>I primarily focus on React/Next.js frontend and WordPress/WooCommerce development, though I also work with Shopify and other platforms: I'm all about finding the right tool for the job.</p>
            <p>Whether you're an agency needing a developer for a one-time project or ongoing maintenance work, or a designer looking for someone to turn your designs into working code, I'm here for it.</p>
          </div>

        </div>
        <div className='w-full overflow-hidden'>
          <div
            className='bg-primary md:bg-accent lg:bg-primary text-light h-[40px] flex items-center overflow-hidden'>
            <motion.div animate={{ x: [-2, -1200] }}
              initial={{ x: -2 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }} className='whitespace-nowrap text-xl font-normal font-heading'>This text is professionally occupying space while I procrastinate on actual content. 🖖 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content. 🖖 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content. 🖖 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content. 🖖 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content. 🖖 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.</motion.div>
          </div>
          <div className='bg-light text-secondary h-[40px] flex items-center overflow-hidden'>
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: [-2800, 400] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className='whitespace-nowrap text-xl font-normal font-heading'>This text is professionally occupying space while I procrastinate on actual content. 👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.  👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.  👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.  👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.  👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.  👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.  👾 This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content.</motion.div>
          </div>
          <div className='bg-accent md:bg-primary lg:bg-accent text-light h-[40px] flex items-center overflow-hidden '>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -1400] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className='whitespace-nowrap text-xl font-normal font-heading'>This text is professionally occupying space while I procrastinate on actual content. This text is professionally occupying space while I procrastinate on actual content. 👀 This text is professionally occupying space while I procrastinate on actual content. 👀 This text is professionally occupying space while I procrastinate on actual content. 👀 This text is professionally occupying space while I procrastinate on actual content. 👀 This text is professionally occupying space while I procrastinate on actual content. 👀 This text is professionally occupying space while I procrastinate on actual content.</motion.div>
          </div>

        </div>
        <div className='flex items-center px-8 py-8 md:py-2 md:py-2 mt-auto'>
          <p className='text-primary font-heading text-center lg:text-left mx-auto lg:mx-0'> Based in Italy, working remotely anywhere.</p>


        </div>
        <div className=' px-8 pb-3 bg-light w-full'>

          <div className='flex flex-col lg:flex-row gap-4 justify-between font-mono items-center py-4 flex-wrap'>

            <p className='flex items-center gap-1 lg:w-5/12 xl:w-[auto]'><PhoneCallIcon size={24} className='text-secondary shrink-0' />+39 379 209 60 63 </p>
            <p className='flex items-center gap-1 '><EnvelopeIcon size={24} className='text-accent shrink-0' />annalisa@antonioli.dev</p>

            <div className='lg:ml-auto'>
              <a className=' inline-flex items-center justify-center hover:bg-secondary w-8 h-8 rounded-full transition-colors ' href='https://www.linkedin.com/in/antonioliannalisa/' target='_blanke'> <LinkedinLogoIcon size={24} /></a>
              <a className='inline-flex items-center justify-center hover:bg-accent w-8 h-8 rounded-full transition-colors' href=' https://github.com/annalisaantonioli/' target='_blanke'><GithubLogoIcon size={24} /></a>
            </div>
          </div>
        </div>
        <span className='text-xs px-8 py-1 inline-block text-center md:text-right'>Copyright© {new Date().getFullYear()} | p.iva 11831300014</span>
      </div >
    </>
  )

}