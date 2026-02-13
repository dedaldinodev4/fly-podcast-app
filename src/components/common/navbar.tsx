"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link } from "@tanstack/react-router"


const navlinks = [
  { name: "Home", to: "/" },
  { name: "Sobre", to: "#about" },
  { name: "Episódios", to: "#videos" },
  { name: "Contatos", to: "#contacts" }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("Home")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
        transition-all duration-500
        ${scrolled
            ? "bg-black/60 backdrop-blur-xl shadow-lg border-b border-orange-400/50"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link to="/" className="text-xl font-bold tracking-tight">
            <h1 className="font-bold text-xl md:text-2xl tracking-wide text-[#FF6900]">
              Fly Podcast
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 relative">
            {navlinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.to}
                  onClick={() => setActive(link.name)}
                  className="relative text-sm tracking-wider text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>

                {active === link.name && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-2 h-0.5 w-full bg-linear-to-r from-[#FF6900] via-orange-500 to-red-700"
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 cursor-pointer rounded-full bg-linear-to-r from-[#FF6900] via-orange-600 to-red-700 text-sm font-medium shadow-lg"
            >
              Inscrever-se
            </motion.button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full gap-10 text-xl"
            >
              {navlinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => {
                      setMobileOpen(false)
                      setActive(link.name)
                    }}
                    className="text-white hover:text-[#FF6900] transition"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-6 py-3 cursor-pointer rounded-full bg-linear-to-r from-[#FF6900] via-orange-600 to-red-700"
              >
                Inscrever-se
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
