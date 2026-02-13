"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

type Props = {
  data: {
    title: string;
    description: string;
  }
}

export function Hero({ data }: Props) {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-end justify-center overflow-hidden bg-black"
    >
      <motion.video
        style={{ y }}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src='/videos/fly-podcast.mp4' type="video/mp4" />
      </motion.video>


      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF6900_0%,transparent_70%)] opacity-20" />

      {/* CONTENT */}


      <div className="relative z-10 max-w-3xl px-6 text-center flex flex-col items-center mb-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
        >
          Conversas que <span className="text-[#FF6900]">Elevam</span> Mentalidades
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4  sm:text-base md:text-lg max-w-xl sm:max-w-2xl text-lg text-white/80"
        >
          {data.description}
        </motion.p>

        {/* PLAY BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-10
            w-20 h-20
            rounded-full
            bg-[#FF6900]
            flex items-center justify-center
            shadow-[0_0_40px_#FF6900]
            animate-pulse
          "
        >
          <Play className="text-white w-8 h-8 cursor-pointer" />
        </motion.button>

      </div>
    </section>
  )
}