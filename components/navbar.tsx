"use client"

import type React from "react"

import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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

// Constants for consistent sizing
const NAVBAR_HEIGHT = {
  mobile: 64,
  desktop: 72,
}

const MOBILE_BREAKPOINT = 768

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Handle mounting and media query
  useEffect(() => {
    setIsMounted(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setOpenSubmenu(null)
    setActiveSubmenu(null)
  }, [pathname])

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
      setOpenSubmenu(null)
    }
  }, [isMobile, isOpen])

  // Handle body scroll lock
  useEffect(() => {
    if (!isMounted) return

    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""

      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [isOpen, isMobile, isMounted])

  // Submenu handlers
  const handleSubmenuEnter = useCallback((name: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
      submenuTimeoutRef.current = null
    }
    setActiveSubmenu(name)
  }, [])

  const handleSubmenuLeave = useCallback(() => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150)
  }, [])

  const toggleSubmenu = useCallback((name: string, e?: React.MouseEvent) => {
    e?.preventDefault()
    setOpenSubmenu((prev) => (prev === name ? null : name))
  }, [])

  const handleMobileMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
    setOpenSubmenu(null)
  }, [])

  const handleMobileMenuItemClick = useCallback(() => {
    setIsOpen(false)
    setOpenSubmenu(null)
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-18">
            <Link href="/" className="text-xl md:text-2xl font-bold text-[#e2cfbe]">
              Stanik <span className="text-gray-800">Economy</span>
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
    scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm",
  )

  const containerClasses = cn("container mx-auto px-4", "max-w-7xl")

  const navHeightClasses = cn("flex justify-between items-center", isMobile ? "h-16" : "h-18")

  return (
    <>
      <nav ref={navRef} className={navbarClasses}>
        <div className={containerClasses}>
          <div className={navHeightClasses}>
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold text-[#e2cfbe] flex items-center z-10 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Stanik <span className="text-gray-800">Economy</span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
                        className={cn(
                          "flex items-center transition-colors duration-300 font-medium text-sm lg:text-base py-2",
                          pathname === item.href || pathname.startsWith(item.href + "/")
                            ? "text-[#e2cfbe]"
                            : "text-gray-700 hover:text-[#e2cfbe]",
                        )}
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
                            className="absolute left-0 mt-1 w-64 z-50"
                            onMouseEnter={() => handleSubmenuEnter(item.name)}
                            onMouseLeave={handleSubmenuLeave}
                          >
                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={cn(
                                    "block px-4 py-3 text-sm transition-colors duration-300",
                                    pathname === subItem.href
                                      ? "bg-[#e2cfbe]/20 text-[#e2cfbe]"
                                      : "text-gray-700 hover:bg-[#e2cfbe]/10 hover:text-[#e2cfbe]",
                                  )}
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
                      className={cn(
                        "transition-colors duration-300 font-medium text-sm lg:text-base py-2",
                        pathname === item.href ? "text-[#e2cfbe]" : "text-gray-700 hover:text-[#e2cfbe]",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden relative z-10 p-2 text-gray-700 hover:text-[#e2cfbe] focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]/20 rounded-md transition-colors duration-300"
              aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
              aria-expanded={isOpen}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={handleMobileMenuToggle}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto"
              style={{ maxHeight: `calc(100vh - ${NAVBAR_HEIGHT.mobile}px)` }}
            >
              <div className="flex flex-col min-h-full">
                {/* Menu Items */}
                <div className="flex-1 px-4 py-6 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      {item.submenu ? (
                        <div className="py-3">
                          <button
                            onClick={(e) => toggleSubmenu(item.name, e)}
                            className={cn(
                              "flex items-center justify-between w-full text-left font-medium transition-colors duration-300 py-2",
                              pathname === item.href || pathname.startsWith(item.href + "/")
                                ? "text-[#e2cfbe]"
                                : "text-gray-700 hover:text-[#e2cfbe]",
                            )}
                          >
                            {item.name}
                            <motion.div
                              animate={{ rotate: openSubmenu === item.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {openSubmenu === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 ml-4 space-y-1">
                                  {item.submenu.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={handleMobileMenuItemClick}
                                      className={cn(
                                        "block py-3 px-2 rounded-md transition-colors duration-300",
                                        pathname === subItem.href
                                          ? "bg-[#e2cfbe]/20 text-[#e2cfbe]"
                                          : "text-gray-600 hover:text-[#e2cfbe] hover:bg-[#e2cfbe]/10",
                                      )}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleMobileMenuItemClick}
                          className={cn(
                            "block py-4 font-medium transition-colors duration-300",
                            pathname === item.href ? "text-[#e2cfbe]" : "text-gray-700 hover:text-[#e2cfbe]",
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <Link
                    href="/kontakt"
                    onClick={handleMobileMenuItemClick}
                    className="block w-full bg-[#e2cfbe] text-center text-gray-800 py-4 px-6 rounded-lg font-medium hover:bg-[#e2cfbe]/90 transition-colors duration-300"
                  >
                    Kontaktujte nás
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={cn("w-full", isMobile ? "h-16" : "h-18")} />
    </>
  )
}
