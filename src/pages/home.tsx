import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { RecentEpisodes } from "@/components/recents-episodes"
import { Contact } from "@/components/contact"
import { infoData } from "@/data/infoData"

export const Home = () => {
  const { sections } = infoData

  return (
    <>
      <Hero data={sections.hero} />
      <About data={sections.about} />
      <RecentEpisodes data={sections.episodes} />
      <Contact data={sections.contact} />
    </>

  )
}