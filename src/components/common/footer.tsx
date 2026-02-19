import { getCurrentYear } from "@/utils/date"

export const Footer = () => {
  
  return (
    <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10">
      © {getCurrentYear()} Fly Podcast. Todos os direitos reservados.
    </footer>
  )
}