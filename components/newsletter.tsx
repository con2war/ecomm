'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="bg-[#9B111E] px-4 py-16 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="mb-4 text-3xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Join Our Newsletter
        </motion.h2>
        <motion.p
          className="mb-8 text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sign up for our newsletter to receive updates, exclusive offers, and more.
        </motion.p>
        <motion.form
          className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/10 text-white placeholder:text-gray-300"
          />
          <Button size="lg" className="bg-white text-[#9B111E] hover:bg-gray-200">
            Sign Up
          </Button>
        </motion.form>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-32 text-white/10 transform -translate-y-12" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

