"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  Calculator,
  FileText,
  BarChart2,
  PieChart,
  DollarSign,
  CreditCard,
  Briefcase,
  TrendingUp,
  Percent,
  FileSpreadsheet,
  ClipboardCheck,
  Receipt,
} from "lucide-react"

export function FloatingElements() {
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

  // Redukujeme počet elementov na mobilných zariadeniach
  const elements = [
    {
      icon: <Calculator className="w-full h-full text-[#e2cfbe]/10" />,
      x: 15,
      y: 20,
      size: isMobile ? 30 : 60,
      delay: 0,
      duration: 8,
      showOnMobile: true,
    },
    {
      icon: <FileText className="w-full h-full text-[#e2cfbe]/10" />,
      x: 85,
      y: 25,
      size: isMobile ? 35 : 70,
      delay: 1,
      duration: 9,
      showOnMobile: true,
    },
    {
      icon: <BarChart2 className="w-full h-full text-[#e2cfbe]/10" />,
      x: 25,
      y: 80,
      size: isMobile ? 40 : 80,
      delay: 2,
      duration: 10,
      showOnMobile: true,
    },
    {
      icon: <PieChart className="w-full h-full text-[#e2cfbe]/10" />,
      x: 80,
      y: 75,
      size: isMobile ? 32 : 65,
      delay: 3,
      duration: 7,
      showOnMobile: true,
    },
    {
      icon: <DollarSign className="w-full h-full text-[#e2cfbe]/10" />,
      x: 50,
      y: 30,
      size: isMobile ? 25 : 55,
      delay: 4,
      duration: 11,
      showOnMobile: false,
    },
    {
      icon: <CreditCard className="w-full h-full text-[#e2cfbe]/10" />,
      x: 70,
      y: 40,
      size: isMobile ? 30 : 60,
      delay: 5,
      duration: 9,
      showOnMobile: false,
    },
    {
      icon: <Briefcase className="w-full h-full text-[#e2cfbe]/10" />,
      x: 30,
      y: 50,
      size: isMobile ? 35 : 65,
      delay: 6,
      duration: 8,
      showOnMobile: true,
    },
    {
      icon: <TrendingUp className="w-full h-full text-[#e2cfbe]/10" />,
      x: 60,
      y: 85,
      size: isMobile ? 38 : 75,
      delay: 7,
      duration: 10,
      showOnMobile: false,
    },
    {
      icon: <Percent className="w-full h-full text-[#e2cfbe]/10" />,
      x: 40,
      y: 15,
      size: isMobile ? 22 : 50,
      delay: 8,
      duration: 7,
      showOnMobile: false,
    },
    {
      icon: <FileSpreadsheet className="w-full h-full text-[#e2cfbe]/10" />,
      x: 90,
      y: 60,
      size: isMobile ? 33 : 70,
      delay: 9,
      duration: 9,
      showOnMobile: true,
    },
    {
      icon: <ClipboardCheck className="w-full h-full text-[#e2cfbe]/10" />,
      x: 10,
      y: 60,
      size: isMobile ? 28 : 60,
      delay: 10,
      duration: 8,
      showOnMobile: false,
    },
    {
      icon: <Receipt className="w-full h-full text-[#e2cfbe]/10" />,
      x: 45,
      y: 70,
      size: isMobile ? 26 : 55,
      delay: 11,
      duration: 10,
      showOnMobile: false,
    },
  ]

  // Filtrujeme elementy pre mobilné zariadenia
  const filteredElements = isMobile ? elements.filter((element) => element.showOnMobile) : elements

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {filteredElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{
            opacity: [0, 0.7, 0.5],
            scale: [0.5, 1.1, 1],
            rotate: [-10, 5, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}
