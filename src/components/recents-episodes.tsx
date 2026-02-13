import { videos } from "@/data/episodes"
import { CardVideo } from "./shared/card-video"


type Props = {
  data: {
    title: string;
  }
}

export const RecentEpisodes = ({ data }: Props) => {


  return (
    <section id="videos" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#FF6900]">{data.title}</h2>

      <div className="grid md:grid-cols-3 gap-10">
      {videos.map((video) => (
          <CardVideo video={video} key={video.id} />
        ))}
      </div>
    </section>


  )
}
                