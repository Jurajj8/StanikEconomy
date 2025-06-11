"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, BarChart3, Calculator, ShieldCheck, TrendingUp, ChevronRight, CheckCircle, X } from "lucide-react"
import { Footer } from "@/components/footer"


const services = [
  {
    id: "jednoduche-uctovnictvo",
    icon: <FileText className="w-full h-full" />,
    title: "Jednoduché účtovníctvo",
    shortDesc: "Vedenie jednoduchého účtovníctva pre podnikateľov.",
    description:
      "Komplexné vedenie jednoduchého účtovníctva pre podnikateľov, živnostníkov a malé firmy. Zabezpečíme evidenciu príjmov a výdavkov, spracovania daňových priznaní a ďalšie súvisiace služby.",
    features: [
      "Vedenie peňažného denníka",
      "Evidencia pohľadávok a záväzkov",
      "Evidencia dlhodobého majetku",
      "Spracovanie daňového priznania",
      "Zastupovanie pred daňovým úradom",
    ],
    link: "/sluzby/jednoduche-uctovnictvo",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-blue-500",
    hoverColor: "group-hover:text-blue-500",
    // Pre-defined positions for consistent rendering
    position: { x: 15, y: 20 },
  },
  {
    id: "podvojne-uctovnictvo",
    icon: <BarChart3 className="w-full h-full" />,
    title: "Podvojné účtovníctvo",
    shortDesc: "Vedenie podvojného účtovníctva pre firmy všetkých veľkostí.",
    description:
      "Poskytujeme komplexné vedenie podvojného účtovníctva pre malé a stredné podniky. Naši odborníci zabezpečia presné vedenie účtovníctva v súlade s platnými zákonmi a predpismi.",
    features: [
      "Spracovanie účtovných dokladov",
      "Vedenie hlavnej knihy a účtovného denníka",
      "Zostavenie účtovnej závierky",
      "Spracovanie daňového priznania",
      "Účtovné poradenstvo",
    ],
    link: "/sluzby/podvojne-uctovnictvo",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500/20 to-purple-600/20",
    iconBg: "bg-purple-500",
    hoverColor: "group-hover:text-purple-500",
    // Pre-defined positions for consistent rendering
    position: { x: 45, y: 35 },
  },
  {
    id: "mzdy-a-personalistika",
    icon: <Calculator className="w-full h-full" />,
    title: "Mzdy a personalistika",
    shortDesc: "Kompletné spracovanie miezd a personálnej agendy.",
    description:
      "Komplexné spracovanie miezd a vedenie personálnej agendy pre firmy všetkých veľkostí. Zabezpečíme všetky potrebné úkony súvisiace so mzdami a personalistikou.",
    features: [
      "Spracovanie miezd zamestnancov",
      "Výpočet a odvod zákonných odvodov",
      "Komunikácia so Sociálnou poisťovňou a zdravotnými poisťovňami",
      "Vedenie personálnej agendy",
      "Reporting a štatistické výkazy",
    ],
    link: "/sluzby/mzdy-a-personalistika",
    image:
      "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500/20 to-green-600/20",
    iconBg: "bg-green-500",
    hoverColor: "group-hover:text-green-500",
    // Pre-defined positions for consistent rendering
    position: { x: 75, y: 25 },
  },
  {
    id: "danove-poradenstvo",
    icon: <ShieldCheck className="w-full h-full" />,
    title: "Daňové poradenstvo",
    shortDesc: "Odborné poradenstvo v oblasti daní a daňovej optimalizácie.",
    description:
      "Poskytujeme profesionálne daňové poradenstvo s cieľom minimalizovať vaše daňové zaťaženie legálnym spôsobom. Naši odborníci vám pomôžu s daňovou optimalizáciou a správnym nastavením daňových procesov.",
    features: [
      "Daňová optimalizácia",
      "Plánovanie daňových stratégií",
      "Zastupovanie pri daňových kontrolách",
      "Spracovanie daňových priznaní",
      "Konzultácie k zmenám v daňovej legislatíve",
    ],
    link: "/sluzby/danove-poradenstvo",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-amber-500/20 to-amber-600/20",
    iconBg: "bg-amber-500",
    hoverColor: "group-hover:text-amber-500",
    // Pre-defined positions for consistent rendering
    position: { x: 30, y: 65 },
  },
  {
    id: "ekonomicke-poradenstvo",
    icon: <TrendingUp className="w-full h-full" />,
    title: "Ekonomické poradenstvo",
    shortDesc: "Finančné a ekonomické poradenstvo pre firmy.",
    description:
      "Poskytujeme odborné ekonomické poradenstvo, ktoré vám pomôže zlepšiť finančné riadenie vašej firmy. Naši experti vám poskytnú cenné rady pre efektívne riadenie a plánovanie.",
    features: [
      "Finančné analýzy a reporty",
      "Biznis plánovanie",
      "Analýza nákladov a výnosov",
      "Finančné modelovanie",
      "Ekonomické konzultácie",
    ],
    link: "/sluzby/ekonomicke-poradenstvo",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-rose-500/20 to-rose-600/20",
    iconBg: "bg-rose-500",
    hoverColor: "group-hover:text-rose-500",
    // Pre-defined positions for consistent rendering
    position: { x: 60, y: 40 },
  },
]

export default function Sluzby() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(services[0])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  // Add a state to control client-side rendering
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Cleanup function to ensure scrolling is restored
  useEffect(() => {
    return () => {
      // Cleanup when component unmounts or when navigating away
      document.body.style.overflow = "auto"
    }
  }, [])

  const openServiceModal = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeServiceModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Function to handle navigation and ensure scroll is restored
  const handleServiceNavigation = (link: string) => {
    // Restore scrolling before navigation
    document.body.style.overflow = "auto"
    closeServiceModal()
    // Small delay to ensure modal closes before navigation
    setTimeout(() => {
      window.location.href = link
    }, 100)
  }

  // Oprava funkcie pre plynulé posúvanie na kotvu #sluzby
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("sluzby")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Innovative Header Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#e2cfbe]/5 to-white z-0"></div>

        {/* Hexagon grid pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 38.6 L25 53 L0 38.6 L0 14.4 Z" fill="none" stroke="#000" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Floating elements - Only render on client side */}
        {isClient && (
          <div className="absolute w-full h-full overflow-hidden z-0">
            {services.map((service, index) => (
              <motion.div
                key={`float-${index}`}
                className={`absolute w-16 h-16 rounded-xl ${service.iconBg} bg-opacity-10 flex items-center justify-center text-white`}
                style={{
                  left: `${service.position.x}%`,
                  top: `${service.position.y}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
              >
                {service.icon}
              </motion.div>
            ))}
          </div>
        )}

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="relative w-24 h-24 mx-auto">
                <div
                  className="absolute inset-0 bg-[#e2cfbe] rounded-full opacity-20 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="relative bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] w-full h-full rounded-full flex items-center justify-center shadow-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-[#e2cfbe] to-gray-800">
                  Komplexné riešenia
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f]"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
            >
              Naše služby sú navrhnuté tak, aby vám pomohli sústrediť sa na to, čo je pre vás dôležité -
              <span className="font-semibold text-[#e2cfbe]"> vaše podnikanie</span>. Staráme sa o všetky účtovné a
              ekonomické aspekty, aby ste vy mohli rásť.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="#sluzby"
                onClick={scrollToServices}
                className="btn btn-primary px-8 py-4 rounded-full text-lg"
              >
                Preskúmať služby
              </Link>
              <Link href="/kontakt" className="btn btn-outline px-8 py-4 rounded-full text-lg">
                Kontaktujte nás
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.2 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="#e2cfbe"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Interactive Services Section */}
      <section id="sluzby" className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vyberte si z našej ponuky profesionálnych služieb, ktoré sú prispôsobené potrebám vášho podnikania.
            </p>
          </motion.div>

          {/* Interactive Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openServiceModal(service)}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10">
                  <div className={`w-8 h-8 ${service.iconBg} rounded-full flex items-center justify-center text-white`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${service.hoverColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.shortDesc}</p>

                  {/* Features preview */}
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 text-gray-400 ${service.hoverColor}`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 2 && (
                      <li className="text-sm text-gray-500 italic">+ {service.features.length - 2} ďalších výhod</li>
                    )}
                  </ul>

                  {/* Button */}
                  <div className="flex items-center text-[#e2cfbe] font-medium group-hover:text-gray-800 transition-colors duration-300">
                    <span>Zobraziť viac</span>
                    <ChevronRight className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Background image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image section */}
                <div className="relative h-64 md:h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={selectedService.image || "/placeholder.svg"}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 z-20 md:hidden">
                    <div
                      className={`w-12 h-12 ${selectedService.iconBg} rounded-full flex items-center justify-center text-white mb-3`}
                    >
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8">
                  <div className="hidden md:block mb-6">
                    <div
                      className={`w-16 h-16 ${selectedService.iconBg} rounded-full flex items-center justify-center text-white mb-4`}
                    >
                      {selectedService.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-6">{selectedService.description}</p>

                  <h4 className="text-xl font-semibold mb-4">Čo zahŕňa táto služba:</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedService.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <div className={`${selectedService.iconBg} rounded-full p-1 mr-3 mt-1`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => handleServiceNavigation(selectedService.link)} className="btn btn-primary">
                      Viac informácií
                    </button>
                    <Link href="/kontakt" className="btn btn-outline" onClick={closeServiceModal}>
                      Kontaktujte nás
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e2cfbe]/20 via-white to-[#e2cfbe]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-xl max-w-4xl mx-auto text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#e2cfbe]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#e2cfbe]/10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Potrebujete pomoc s účtovníctvom?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto relative z-10">
              Kontaktujte nás pre nezáväznú konzultáciu. Radi vám pomôžeme vybrať služby, ktoré najlepšie zodpovedajú
              potrebám vášho podnikania.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/kontakt" className="btn btn-primary px-8 py-4 rounded-full text-lg">
                Kontaktujte nás
              </Link>
              <Link href="tel:+421911222333" className="btn btn-outline px-8 py-4 rounded-full text-lg">
                +421 911 222 333
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
