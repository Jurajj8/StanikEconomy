"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  href: string
  children: ReactNode
  primary?: boolean
  light?: boolean
  transparent?: boolean
  className?: string
}

export function GlowingButton({ href, children, primary, light, transparent, className = "" }: GlowingButtonProps) {
  let buttonClasses =
    "relative px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center group overflow-hidden"

  if (primary) {
    buttonClasses += " bg-[#e2cfbe] text-gray-800 hover:bg-[#d4b99f]"
  } else if (light) {
    buttonClasses += " bg-white text-gray-800 hover:bg-gray-100"
  } else if (transparent) {
    buttonClasses += " bg-transparent text-white border-2 border-white hover:bg-white/10"
  } else {
    buttonClasses += " border-2 border-[#e2cfbe] text-gray-800 hover:bg-[#e2cfbe]/10"
  }

  if (className) {
    buttonClasses += " " + className
  }

  return (
    <Link href={href} className={buttonClasses}>
      {/* Glow effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {children}
    </Link>
  )
}
