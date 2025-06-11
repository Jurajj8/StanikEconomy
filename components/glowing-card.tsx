"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useState } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e2cfbe] overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className="absolute bg-gradient-to-r from-[#e2cfbe]/20 to-[#d4b99f]/20 rounded-full blur-xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: 400,
          height: 400,
          transform: "translate(-50%, -50%)",
          opacity: isHovered ? 0.6 : 0,
        }}
      />

      {/* Border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200"></div>

      <div className="relative">{children}</div>
    </motion.div>
  )
}
