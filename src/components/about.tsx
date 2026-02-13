import { motion } from "framer-motion"

type Props = {
  data: {
    title: string;
    description: string;
    subDescription: string;
    image: string;
  }
}

export const About = ({ data }: Props) => {
  

  return (
    <section id="about" className="py-32 px-6 bg-[#111] text-white max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={data.image} alt="Bastidores do Podcast" className="rounded-2xl shadow-2xl w-full" />
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-[#FF6900]">{data.title}</h2>
        <p className="text-gray-300 mb-4 text-lg">
          {data.description}
        </p>
        <p className="text-gray-400 text-lg">
          {data.subDescription}
        </p>
      </motion.div>

    </section>

  )
}