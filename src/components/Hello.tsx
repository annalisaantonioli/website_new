
import { AnimatePresence, motion } from "motion/react";
export default function Hello() {
  return (
    <>
      <motion.h1
        initial={{ y: 0 }}
        animate={{ y: [-20, 0] }}
        whileHover={{ y: [0, -20] }}
        transition={{

          y: {
            type: "spring",
            stiffness: 200,
            damping: 18,
            mass: 9,

          },

        }}
        className='font-heading text-8xl mb-4 overflow-hidden' >

        Ciao!

      </motion.h1 >
      <div className='lg:w-11/12 text-lg '>
        <p className=' mb-4'>
          I&apos;m Annalisa, a freelance developer who helps agencies, design
          studios and creative teams turn their projects into reality.
        </p>

        <p>
          Got a project in mind or just curious about how I work? Feel free to
          reach out or schedule a quick call.
        </p>
      </div>
    </>
  )
}