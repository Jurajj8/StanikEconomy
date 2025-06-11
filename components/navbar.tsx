"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const menuItems = [
  { name: "Úvod", href: "/" },
  {
    name: "Služby",
    href: "/sluzby",
    submenu: [
      { name: "Jednoduché účtovníctvo", href: "/sluzby/jednoduche-uctovnictvo" },
      { name: "Podvojné účtovníctvo", href: "/sluzby/podvojne-uctovnictvo" },
      { name: "Mzdy a personalistika", href: "/sluzby/mzdy-a-personalistika" },
      { name: "Daňové poradenstvo", href: "/sluzby/danove-poradenstvo" },
      { name: "Ekonomické poradenstvo", href: "/sluzby/ekonomicke-poradenstvo" },
    ],
  },
  { name: "Novinky", href: "/novinky" },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
      document.body.style.overflow = "auto"
    }
  }, [isMobile, isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleSubmenuEnter = (name: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
      submenuTimeoutRef.current = null
    }
    setActiveSubmenu(name)
  }

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 300) // Oneskorenie pred zatvorením submenu
  }

  const toggleSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when toggling submenu
    if (openSubmenu === name) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(name)
    }
  }

  const handleMobileMenuItemClick = () => {
    setIsOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-sm py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold text-[#e2cfbe] flex items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              Stanik <span className="text-gray-800">Economy</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && handleSubmenuEnter(item.name)}
                onMouseLeave={handleSubmenuLeave}
              >
                {item.submenu ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-[#e2cfbe] transition-colors duration-300 font-medium text-sm lg:text-base"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                    </Link>
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 z-50"
                          onMouseEnter={() => handleSubmenuEnter(item.name)}
                          onMouseLeave={handleSubmenuLeave}
                        >
                          <div className="bg-white rounded-md shadow-lg overflow-hidden border border-gray-100">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#e2cfbe]/10 hover:text-[#e2cfbe] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#e2cfbe] transition-colors duration-300 font-medium text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#e2cfbe] focus:outline-none p-2"
              aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full bg-white z-40 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col p-4 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2 border-b border-gray-100">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={(e) => toggleSubmenu(item.name, e)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-[#e2cfbe] transition-colors duration-300 font-medium py-2"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-1 ml-4 space-y-1"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={handleMobileMenuItemClick}
                                className="block py-3 text-gray-600 hover:text-[#e2cfbe] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleMobileMenuItemClick}
                      className="block py-2 text-gray-700 hover:text-[#e2cfbe] transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Contact button at the bottom of mobile menu */}
            <div className="mt-auto p-4 border-t border-gray-100">
              <Link
                href="/kontakt"
                onClick={handleMobileMenuItemClick}
                className="block w-full bg-[#e2cfbe] text-center text-gray-800 py-3 px-6 rounded-md font-medium"
              >
                Kontaktujte nás
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
