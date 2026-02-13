import { Link } from "@tanstack/react-router"
import { motion } from "framer-motion"

import { fadeUp } from "@/lib/animations"

type Props = {
  data: {
    title: string;
    description: string;
  }
}

export const Contact = ({ data }: Props) => {

  return (
    <section id="contacts" className="py-32 px-6 text-center bg-[#111]">


      <h2 className="text-4xl font-bold mb-6">
        {data.title}
      </h2>

      <p className="text-gray-400 mb-8">
        {data.description}
      </p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-3xl mx-auto text-center space-y-8">

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu endereço de email"
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md"
          />
          <Link to="/" target="_blank">
            <button className="px-8 py-4 cursor-pointer rounded-xl bg-primary hover:scale-105 bg-[#FF6900] hover:bg-[#e85e00] font-semibold text-lg transition">
              🔔 Inscrever-se
            </button>
          </Link>
        </div>
      </motion.div>
    </section>

  )
}