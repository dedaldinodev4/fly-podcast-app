import { motion } from "framer-motion"
import type { Video } from "@/types/video"

type Props = {
  video: Video;
  key: string | number;
}
export const CardVideo = ({ video }: Props) => {

  return (

    <motion.div
      key={video.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: video.id * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group bg-[#18181F] rounded-2xl overflow-hidden border border-[#FF6900]/30 shadow-xl cursor-pointer"
    >

      <div className="relative aspect-video">
        <img
          src={`/images/${video.image}`}
          alt={`Episódio ${video.id}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-xl text-[#FF6900] mb-2">{video.title}</h3>
        <p className="text-sm text-gray-400 text-muted">{video.date}</p>
        <p className="text-sm text-gray-400 line-clamp-3">{video.description}</p>
        <a href={video.link} target="_blank" className="border border-white hover:bg-[#e85e00] hover:border-none px-4 py-2 mt-5 rounded-full transition">
        ▶️ Assistir
      </a>
      </div>

      

    </motion.div>

  )
}