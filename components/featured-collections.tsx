'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export function FeaturedCollections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const collections = [
    {
      id: 1,
      name: 'Summer Essentials',
      description: 'Stay cool and stylish with our summer collection',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      href: '/collections/summer-essentials',
    },
    {
      id: 2,
      name: 'Workout Gear',
      description: 'Achieve your fitness goals with our performance wear',
      image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80',
      href: '/collections/workout-gear',
    },
  ]

  return (
    <section ref={ref} className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="mb-8 text-3xl font-bold text-[#9B111E]"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Collections
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={collection.href}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                  <p className="text-gray-200 mb-4">{collection.description}</p>
                  <Button variant="secondary" size="lg" className="text-lg bg-white text-[#9B111E] hover:bg-[#9B111E] hover:text-white">
                    Shop Collection
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

