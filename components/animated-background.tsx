"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (!mounted) return null

  // Redukujeme počet a veľkosť animácií na mobilných zariadeniach
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

      {/* Animated gradient orbs - menej a menšie na mobilných zariadeniach */}
      <motion.div
        className={`absolute top-1/4 left-1/4 ${isMobile ? "w-48 h-48" : "w-96 h-96"} rounded-full bg-gradient-to-r from-[#e2cfbe]/10 to-[#d4b99f]/10 blur-3xl`}
        animate={{
          x: [0, isMobile ? 20 : 50, 0],
          y: [0, isMobile ? 15 : 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {!isMobile && (
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-[#d4b99f]/10 to-[#e2cfbe]/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      )}

      <motion.div
        className={`absolute top-1/3 right-1/3 ${isMobile ? "w-32 h-32" : "w-64 h-64"} rounded-full bg-gradient-to-r from-[#e2cfbe]/5 to-[#d4b99f]/5 blur-3xl`}
        animate={{
          x: [0, isMobile ? 30 : 60, 0],
          y: [0, isMobile ? -15 : -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 5,
        }}
      />
    </div>
  )
}
