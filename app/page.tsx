"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Calculator,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle,
  Users,
  Award,
  Sparkles,
  LineChart,
  Briefcase,
} from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { useRef, useState, useEffect } from "react"
import { GlowingButton } from "@/components/glowing-button"
import { GlowingCard } from "@/components/glowing-card"
import { FloatingElements } from "@/components/floating-elements"
import { Footer } from "@/components/footer"
import { useMediaQuery } from "@/hooks/use-media-query"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
}

// Komponent pre animované počítadlo
const Counter = ({
  end,
  duration = 2,
  title,
  icon,
  suffix = "+",
}: {
  end: number
  duration?: number
  title: string
  icon: React.ReactNode
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e2cfbe] group overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200"></div>

      <div className="relative">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <div className="bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] p-2 sm:p-3 rounded-full text-white">{icon}</div>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold text-center mb-1 sm:mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {count}
          {suffix}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 text-center">{title}</p>
      </div>
    </motion.div>
  )
}

// Komponent pre služby
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      variants={fadeIn}
      custom={index + 1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#e2cfbe] z-10"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200"></div>

      <div className="relative">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {service.icon}
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-[#e2cfbe] mb-3 sm:mb-4 group-hover:text-[#c3b09e] transition-colors duration-300">
            {service.icon}
          </div>
          <h3
            className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 ${service.hoverColor}`}
          >
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
          <Link
            href={service.link}
            className="inline-flex items-center text-[#e2cfbe] hover:text-[#c3b09e] font-medium group-hover:underline text-sm sm:text-base"
          >
            Viac info{" "}
            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Komponent pre výhody
const FeatureCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#e2cfbe] group overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-200"></div>

      <div className="relative flex items-start">
        <div className="bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-full p-2 sm:p-3 mr-3 sm:mr-4 text-white flex-shrink-0">
          {item.icon}
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{item.title}</h4>
          <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Komponent pre referencie
const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <motion.div
      variants={fadeIn}
      custom={index + 1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e2cfbe] group overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200"></div>

      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[#e2cfbe]">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-5 sm:mb-6 italic text-sm sm:text-base">{testimonial.quote}</p>
        <div className="flex items-center">
          <div className="mr-3 sm:mr-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full overflow-hidden">
              <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} width={48} height={48} />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
            <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const [activeTab, setActiveTab] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const services = [
    {
      icon: <FileSpreadsheet className="w-6 h-6 sm:w-10 sm:h-10" />,
      title: "Jednoduché účtovníctvo",
      description: "Vedenie jednoduchého účtovníctva pre živnostníkov a malých podnikateľov.",
      link: "/sluzby/jednoduche-uctovnictvo",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-10 sm:h-10" />,
      title: "Podvojné účtovníctvo",
      description: "Komplexné vedenie podvojného účtovníctva pre malé a stredné firmy.",
      link: "/sluzby/podvojne-uctovnictvo",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <Calculator className="w-6 h-6 sm:w-10 sm:h-10" />,
      title: "Mzdy a personalistika",
      description: "Kompletné spracovanie miezd a vedenie personálnej agendy.",
      link: "/sluzby/mzdy-a-personalistika",
      image:
        "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-10 sm:h-10" />,
      title: "Daňové poradenstvo",
      description: "Odborné poradenstvo v oblasti daní a daňovej optimalizácie.",
      link: "/sluzby/danove-poradenstvo",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <LineChart className="w-6 h-6 sm:w-10 sm:h-10" />,
      title: "Ekonomické poradenstvo",
      description: "Ekonomické konzultácie pre efektívne riadenie vašej firmy.",
      link: "/sluzby/ekonomicke-poradenstvo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <Briefcase className="w-6 h-6 sm:w-10 sm:h-10" />,
      title: "Podpora 24/7",
      description: "Sme vám k dispozícii pre akékoľvek otázky kedykoľvek potrebujete.",
      link: "/kontakt",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ]

  const features = [
    {
      title: "Skúsenosti a odbornosť",
      description:
        "Máme dlhoročné skúsenosti v oblasti účtovníctva a daňového poradenstva. Naši odborníci neustále sledujú zmeny v legislatíve.",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      title: "Profesionalita a spoľahlivosť",
      description:
        "Naši zamestnanci sú kvalifikovaní odborníci s certifikáciami v oblasti účtovníctva. Pracujeme presne a dodržiavame termíny.",
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      title: "Spokojní klienti",
      description:
        "Stovky spokojných klientov potvrdzujú kvalitu našich služieb. Budujeme dlhodobé vzťahy založené na dôvere.",
      icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      title: "Osobný prístup",
      description:
        "Ku každému klientovi pristupujeme individuálne a hľadáme najlepšie riešenia pre jeho konkrétnu situáciu.",
      icon: <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
  ]

  const testimonials = [
    {
      name: "Jana Nováková",
      company: "Kvetinárstvo Ruža",
      quote: "Profesionálny prístup a vždy včasné a presné spracovanie účtovníctva. Veľmi odporúčam!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
    },
    {
      name: "Peter Kováč",
      company: "Strojárstvo KOVEX",
      quote:
        "Odkedy spolupracujeme so Stanik Economy, nemáme absolútne žiadne problémy s daňovými úradmi. Skvelá spolupráca.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
    },
    {
      name: "Martina Veselá",
      company: "Kaviareň Pohoda",
      quote: "Konečne môžem svoj čas venovať svojmu biznisu a nie papierovačkám. Ďakujem za profesionálne služby.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4,
    },
  ]

  const tabs = [
    {
      title: "Finančné analýzy",
      icon: <LineChart className="w-4 h-4 sm:w-5 sm:h-5" />,
      content: {
        title: "Komplexné finančné analýzy",
        description:
          "Poskytujeme detailné finančné analýzy, ktoré vám pomôžu lepšie porozumieť vášmu podnikaniu a prijímať informované rozhodnutia.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        features: [
          "Analýza finančných ukazovateľov",
          "Hodnotenie finančného zdravia",
          "Identifikácia silných a slabých stránok",
          "Odporúčania pre zlepšenie",
        ],
      },
    },
    {
      title: "Daňová optimalizácia",
      icon: <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />,
      content: {
        title: "Efektívna daňová optimalizácia",
        description:
          "Pomôžeme vám legálne optimalizovať vaše daňové zaťaženie a využiť všetky dostupné možnosti na zníženie daňovej povinnosti.",
        image:
          "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        features: [
          "Identifikácia daňových úspor",
          "Plánovanie daňovej stratégie",
          "Využitie daňových úľav a odpočtov",
          "Minimalizácia daňového rizika",
        ],
      },
    },
    {
      title: "Digitálne riešenia",
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
      content: {
        title: "Moderné digitálne riešenia",
        description:
          "Implementujeme najnovšie digitálne technológie, ktoré zefektívnia vaše účtovné procesy a ušetria vám čas aj peniaze.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        features: [
          "Cloudové účtovné systémy",
          "Automatizácia účtovných procesov",
          "Digitálna archivácia dokladov",
          "Online prístup k účtovným dátam",
        ],
      },
    },
  ]

  return (
    <>
      {/* Animované pozadie */}
      <AnimatedBackground />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e2cfbe]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#d4b99f]/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-4 sm:px-0"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#e2cfbe]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#e2cfbe]/30 rounded-full blur-xl"></div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-800 relative">
                  Stanik Economy
                  <span className="block text-xl md:text-3xl mt-2 font-normal bg-gradient-to-r from-[#e2cfbe] to-[#c3b09e] bg-clip-text text-transparent">
                    Profesionálne účtovnícke služby
                  </span>
                  <div className="absolute -top-1 -left-1 w-12 h-12 bg-[#e2cfbe]/10 rounded-full"></div>
                </h1>
              </div>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-700 max-w-xl">
                Poskytujeme komplexné účtovnícke a poradenské služby pre podnikateľov a firmy s dôrazom na presnosť,
                spoľahlivosť a <span className="font-semibold text-[#e2cfbe]">digitálne riešenia</span> pre moderné
                podnikanie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowingButton href="/kontakt" primary className="w-full sm:w-auto text-center">
                  Kontaktujte nás
                </GlowingButton>
                <GlowingButton href="/sluzby" className="w-full sm:w-auto text-center">
                  <span>Naše služby</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </GlowingButton>
              </div>

              {/* Odznaky dôveryhodnosti */}
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className="bg-[#e2cfbe]/20 p-1.5 sm:p-2 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#e2cfbe]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">Certifikovaní účtovníci</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className="bg-[#e2cfbe]/20 p-1.5 sm:p-2 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#e2cfbe]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">15+ rokov skúseností</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className="bg-[#e2cfbe]/20 p-1.5 sm:p-2 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#e2cfbe]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">Bezplatná konzultácia</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Dekoratívne prvky */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e2cfbe]/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#e2cfbe]/20 rounded-full blur-md"></div>

                {/* Hlavný obrázok */}
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200 z-0"></div>
                  <div className="relative h-full w-full rounded-xl overflow-hidden z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Účtovnícke služby"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vlnitý oddeľovač */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path
              fill="#f9f9f9"
              fillOpacity="1"
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Štatistiky sekcia */}
      <section className="py-12 md:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[#f9f9f9]/80 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-center mb-8 md:mb-16 px-4"
          >
            <span className="inline-block px-3 py-1 bg-[#e2cfbe]/20 text-[#c3b09e] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              NAŠE ČÍSLA
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Naše úspechy v číslach
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Za roky nášho pôsobenia sme pomohli stovkám klientov s ich účtovníctvom a daňami.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 px-4 sm:px-0">
            <Counter end={500} title="Spokojných klientov" icon={<Users className="h-4 h-4 sm:h-6 sm:w-6" />} />
            <Counter end={15} title="Rokov skúseností" icon={<Award className="h-4 h-4 sm:h-6 sm:w-6" />} suffix="" />
            <Counter
              end={5000}
              title="Spracovaných daňových priznaní"
              icon={<FileSpreadsheet className="h-4 h-4 sm:h-6 sm:w-6" />}
            />
            <Counter
              end={98}
              title="% Úspešnosť pri kontrolách"
              icon={<CheckCircle className="h-4 h-4 sm:h-6 sm:w-6" />}
              suffix="%"
            />
          </div>
        </div>
      </section>

      {/* Služby Section */}
      <section className="section bg-white relative py-12 md:py-24">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16 px-4"
            variants={fadeIn}
            custom={0}
          >
            <span className="inline-block px-3 py-1 bg-[#e2cfbe]/20 text-[#c3b09e] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              NAŠE SLUŽBY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Komplexné riešenia pre vaše podnikanie
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Poskytujeme komplexné účtovnícke služby, ktoré vám pomôžu s vedením účtovníctva, spracovaním miezd a
              daňovým poradenstvom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-0">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[#f9f9f9]/80 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-center mb-8 md:mb-16 px-4"
          >
            <span className="inline-block px-3 py-1 bg-[#e2cfbe]/20 text-[#c3b09e] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              NAŠE RIEŠENIA
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Ako vám môžeme pomôcť
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Objavte naše špecializované riešenia, ktoré vám pomôžu zefektívniť vaše podnikanie.
            </p>
          </motion.div>

          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-12">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-base ${
                    activeTab === index
                      ? "bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] text-white shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-[#e2cfbe]/10"
                  }`}
                >
                  <span className="mr-1.5 sm:mr-2">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <GlowingCard>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{tabs[activeTab].content.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        {tabs[activeTab].content.description}
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {tabs[activeTab].content.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex items-start"
                          >
                            <div className="bg-[#e2cfbe] rounded-full p-1 mr-2 md:mr-3 mt-0.5 md:mt-1">
                              <svg
                                className="w-2 h-2 md:w-3 md:h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm md:text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-6 md:mt-8">
                        <GlowingButton href="/sluzby" primary className="w-full sm:w-auto text-center">
                          Zistiť viac
                        </GlowingButton>
                      </div>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#e2cfbe]/20 to-[#d4b99f]/20 rounded-xl blur-lg animate-pulse"></div>
                      <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-xl">
                        <Image
                          src={tabs[activeTab].content.image || "/placeholder.svg"}
                          alt={tabs[activeTab].content.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Prečo my Section */}
      <section ref={targetRef} className="section relative py-12 md:py-24 bg-white">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.8s" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div style={{ opacity, scale }} className="order-2 lg:order-1 px-4 sm:px-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#e2cfbe]/20 to-[#d4b99f]/20 rounded-xl blur-lg animate-pulse"></div>
                <div className="relative h-[250px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Prečo si vybrať nás"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Plávajúce karty */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                  >
                    <div className="flex items-center">
                      <Award className="text-[#e2cfbe] mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm font-medium">Certifikovaní odborníci</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="order-1 lg:order-2 px-4 sm:px-0"
            >
              <span className="inline-block px-3 py-1 bg-[#e2cfbe]/20 text-[#c3b09e] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                PREČO MY
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Prečo si vybrať práve nás?
              </h2>
              <div className="space-y-4 md:space-y-6">
                {features.map((item, index) => (
                  <FeatureCard key={index} item={item} index={index} />
                ))}
              </div>
              <div className="mt-6 md:mt-8">
                <GlowingButton href="/kontakt" primary className="w-full sm:w-auto text-center">
                  Kontaktujte nás
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reference */}
      <section className="section py-12 md:py-24 relative">
        <div className="absolute inset-0 bg-[#f9f9f9]/80 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-center mb-8 md:mb-16 px-4"
          >
            <span className="inline-block px-3 py-1 bg-[#e2cfbe]/20 text-[#c3b09e] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              REFERENCIE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Čo hovoria naši klienti
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Pozrite si, čo o našich službách hovoria naši spokojní klienti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-0">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* Pridaný CTA button */}
          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/referencie"
              className="inline-flex items-center text-[#e2cfbe] hover:text-[#c3b09e] font-medium group"
            >
              <span className="relative">
                Zobraziť všetky referencie
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#e2cfbe] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-12 md:py-24 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

        {/* Glow effects */}
        <div className="absolute inset-0 bg-[#e2cfbe]/5 z-0"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#e2cfbe]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl blur-lg animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] rounded-xl p-6 sm:p-8 md:p-12 text-center shadow-xl overflow-hidden">
              {/* Dekoratívne prvky */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 text-white relative z-10">
                Začnime spolupracovať ešte dnes
              </h2>
              <p className="text-sm sm:text-lg mb-4 sm:mb-8 max-w-2xl mx-auto text-white/90 relative z-10">
                Nezáleží na tom, či ste začínajúci podnikateľ alebo etablovaná firma. Naše služby prispôsobíme presne
                vašim potrebám.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <GlowingButton href="/kontakt" light className="w-full sm:w-auto text-center">
                  Dohodnite si konzultáciu
                </GlowingButton>
                <GlowingButton href="/sluzby" transparent className="w-full sm:w-auto text-center">
                  Preskúmať služby
                </GlowingButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
