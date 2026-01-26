import useMediaQuery from '../../hooks/useMediaQuery';
import { ArrowArcLeftIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";


import projects from '../../../public/projects.json'


export default function Projects({ open, setOpen }: { open: boolean, setOpen: (value: (prev: boolean) => boolean) => void }) {
  function handleToggle() {
    setOpen((prev: boolean) => !prev);
  }
  const isDesk = useMediaQuery('(min-width: 1024px)');
  const isMob = useMediaQuery('(max-width: 768px)');
  console.log("Wis", isMob)
  const variants = {
    open: { width: isDesk ? '60%' : '100%' },
    closed: { width: isMob ? '100%' : '130px' }
  };

  return (
    <motion.div
      initial={false}
      animate={open ? 'open' : 'closed'}
      variants={variants}
      transition={{
        duration: 0.65,
        delay: open ? 0.4 : 0.9,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`bg-secondary relative overflow-hidden shrink-0 py-6 md:py-0 w-full md:w-[130px]`}>

      <motion.div
        onClick={handleToggle}
        initial={false}
        animate={{
          y: open ? (isMob ? '10%' : '100%') : isMob ? [0, -10, 0] : 0,
          opacity: open ? (isMob ? 1 : 0.7) : 1,
        }}
        transition={{
          duration: 0.5,
          delay: open ? 0 : 0.95,
          y: {
            type: "spring",
            stiffness: 200,
            damping: 18,
            mass: 3,
            delay: open ? 0 : 0.95,
            repeat: isMob && !open ? Infinity : 0,
            repeatDelay: 2
          },
        }}
        className="flex items-center justify-center relative cursor-pointer h-full"
      >
        <motion.h2 className="font-heading text-4xl text-light inline-block md:rotate-270">
          Projects
        </motion.h2>
      </motion.div>


      {/* Contenuto interno */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-[9] w-full h-full md:absolute inset-0 py-6 px-8 md:p-10 overflow-hidden"
            initial={{
              maxHeight: isMob ? '0vh' : 'auto',
              opacity: isMob ? 1 : 0
            }}
            animate={{
              maxHeight: isMob ? '100vh' : 'auto',
              opacity: 1,
              transition: {
                maxHeight: { duration: isMob ? 0.6 : 0, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: isMob ? 0 : 0.3 }
              }
            }}
            exit={{
              opacity: 0,
              maxHeight: isMob ? '0vh' : 'auto',
              transition: {
                maxHeight: { duration: isMob ? 0.5 : 0, ease: [0.4, 0, 1, 1] },
                opacity: { duration: 0.3 }
              },
            }}
          >
            <div className="md:flex justify-between items-center hidden ">
              <motion.h2
                initial={{ opacity: 0, y: -140, rotate: 270 }}
                animate={{
                  opacity: 1,
                  y: [-140, 80, 0],
                  rotate: 360,
                }}
                exit={{
                  opacity: 0,
                  y: [0, -140],
                  transition: {
                    y: { type: "spring", stiffness: 180, damping: 18 },
                  },
                }}
                transition={{
                  opacity: { duration: 0.25, delay: 0.4 },
                  y: { type: "spring", stiffness: 200, damping: 18, mass: 5, delay: 0.4 },
                  rotate: { type: "spring", stiffness: 120, damping: 22, mass: 1.3, delay: 0.65 },
                }}
                className="font-heading text-4xl text-light origin-top-left "
              >
                Projects
              </motion.h2>

              <motion.button
                onClick={handleToggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                whileTap={{ scale: 0.85, rotate: 360 }}
                className="w-12 h-12 rounded-full bg-primary border-2 border-light flex items-center justify-center text-accent cursor-pointer"
                transition={{ duration: 0.5, ease: [1, -0.36, 0.41, 0.87] }}
              >
                <ArrowArcLeftIcon size={32} />
              </motion.button>

            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: isMob ? 0.6 : 1.2 }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0 }
              }}
              className='my-5 h-full overflow-auto custom-scrollbar'>
              <div className='text-md pr-6 text-light'>
                <p className='mb-4'> I mainly work on non-disclosable projects, so here's a sample list of my latest works. Feel free to reach out for a private pitch.</p>

                <p className='mb-4'>Also, note that most of these projects were developed in collaboration with partner agencies where I worked as a developer.</p></div>
              <ul className=' md:pb-40 cols-2'>
                {projects?.map(el =>
                  <li key={el.name} className='mb-2'>
                    {el.link ?
                      <a href={el.link} target='_blank' className='flex items-center gap-2 group'>
                        <span className='font-mono !mb-0 font-bold text-primary inline-block  link-normal relative group-hover:after:scale-x-100'>{el.name},{el.year} <span className='text-accent'>@ </span>{el.agency}</span>
                        <span className='group-hover:-scale-x-100'>👀</span>
                      </a> :
                      <p className='!mb-0'>
                        <span className='font-mono !mb-0 font-bold text-primary'>{el.name},{el.year}</span>
                      </p>}
                  </li>
                )}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div >

  )
}