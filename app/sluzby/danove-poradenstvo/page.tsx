"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, CheckCircle, ArrowLeft, FileText, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Footer } from "@/components/footer"


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function DanovePoradenstvo() {
  // Refs pre sledovanie viditeľnosti sekcií
  const contentRef = useRef(null)
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })

  // State pre vynútenie zobrazenia obsahu
  const [forceVisible, setForceVisible] = useState(false)

  // Efekt pre vynútenie zobrazenia obsahu po načítaní stránky
  useEffect(() => {
    // Krátke oneskorenie pre istotu, že stránka je načítaná
    const timer = setTimeout(() => {
      setForceVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Header Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Pozadie s efektmi */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e2cfbe]/20 via-white to-[#e2cfbe]/10"></div>

        {/* Dekoratívne prvky */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e2cfbe]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#e2cfbe]/10 rounded-full blur-3xl"></div>

        {/* Plávajúce ikony */}
        <motion.div
          className="absolute top-10 right-10 text-[#e2cfbe]/20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        >
          <ShieldCheck className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 text-[#e2cfbe]/20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <FileText className="w-16 h-16" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] blur-xl opacity-30 rounded-full transform scale-150"></div>
              <div className="relative bg-white/50 backdrop-blur-sm p-4 rounded-full border border-[#e2cfbe]/30 shadow-lg">
                <ShieldCheck className="w-16 h-16 text-[#e2cfbe] mx-auto" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Daňové poradenstvo
            </h1>

            <div className="relative">
              <div className="absolute h-1 w-20 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] left-1/2 transform -translate-x-1/2 rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 pt-6">
                Odborné poradenstvo v oblasti daní a daňovej optimalizácie pre firmy a podnikateľov.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <ShieldCheck className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Daňová optimalizácia</span>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FileText className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Daňové priznania</span>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Daňové stratégie</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" ref={contentRef}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                animate={isContentInView || forceVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Daňové poradenstvo"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold mb-6">Čo zahŕňa naše daňové poradenstvo?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Poskytujeme komplexné daňové poradenstvo, ktoré vám pomôže optimalizovať vaše daňové zaťaženie a
                  zabezpečiť súlad s daňovou legislatívou. Naši odborníci vám poradia, ako legálne minimalizovať daňovú
                  povinnosť a vyhnúť sa zbytočným pokutám.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <ShieldCheck className="mr-2 text-[#e2cfbe]" /> Daňová optimalizácia
                    </h3>
                    <p className="text-gray-700">
                      Navrhneme vám stratégie, ako legálne minimalizovať vaše daňové zaťaženie a využiť všetky dostupné
                      daňové úľavy a odpočty.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <ShieldCheck className="mr-2 text-[#e2cfbe]" /> Plánovanie daňových stratégií
                    </h3>
                    <p className="text-gray-700">
                      Pomôžeme vám naplánovať vaše podnikateľské aktivity tak, aby ste minimalizovali daňové dopady a
                      maximalizovali zisk.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <ShieldCheck className="mr-2 text-[#e2cfbe]" /> Zastupovanie pri daňových kontrolách
                    </h3>
                    <p className="text-gray-700">
                      V prípade daňovej kontroly vás budeme zastupovať a pomôžeme vám úspešne zvládnuť celý proces.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Spracovanie daňových priznaní
                    </h3>
                    <p className="text-gray-700">
                      Pripravíme a podáme za vás daňové priznania k dani z príjmov, DPH a ďalším daniam.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Konzultácie k zmenám v daňovej legislatíve
                    </h3>
                    <p className="text-gray-700">
                      Budeme vás informovať o zmenách v daňovej legislatíve a ich dopade na vaše podnikanie.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Pre koho je naše daňové poradenstvo vhodné?</h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Podnikatelia a živnostníci",
                    "Malé a stredné podniky",
                    "Veľké spoločnosti",
                    "Neziskové organizácie",
                    "Fyzické osoby s komplexnými daňovými situáciami",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isContentInView || forceVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-6 w-6 text-[#e2cfbe] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold mb-6">Výhody nášho daňového poradenstva</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Úspora na daniach",
                      description: "Legálne zníženie daňovej povinnosti a využitie všetkých dostupných daňových úľav.",
                    },
                    {
                      title: "Eliminácia rizík",
                      description: "Minimalizácia rizika pokút a penále za nesprávne daňové postupy.",
                    },
                    {
                      title: "Odborné znalosti",
                      description: "Prístup k odborným znalostiam a skúsenostiam našich daňových poradcov.",
                    },
                    {
                      title: "Aktuálne informácie",
                      description: "Vždy aktuálne informácie o zmenách v daňovej legislatíve.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isContentInView || forceVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-12">
                  <Link
                    href="/sluzby"
                    className="inline-flex items-center text-[#e2cfbe] hover:text-[#c3b09e] font-medium"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Späť na služby
                  </Link>
                  <Link href="/kontakt" className="btn btn-primary">
                    Kontaktujte nás
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial="hidden"
                animate={isContentInView || forceVisible ? "visible" : "hidden"}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-6 sticky top-24"
              >
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200">Individuálne cenové podmienky</h3>
                <div className="bg-[#e2cfbe]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-lg mb-3">Ceny prispôsobené vašim potrebám</h4>
                  <p className="text-gray-700 mb-4">
                    Každý klient má špecifické požiadavky a potreby, preto naše cenové podmienky stanovujeme
                    individuálne po osobnej konzultácii.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Cena závisí od komplexnosti vašej daňovej situácie, rozsahu poradenstva, časovej náročnosti a
                    ďalších faktorov, ktoré spolu prekonzultujeme.
                  </p>
                  <div className="flex items-center text-[#e2cfbe]">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="text-sm italic">Prvá konzultácia je vždy zdarma</p>
                  </div>
                </div>
                <Link href="/kontakt" className="btn btn-primary w-full text-center">
                  Nezáväzná cenová ponuka
                </Link>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Potrebujete poradiť?</h3>
                  <p className="text-gray-700 mb-4">
                    Neváhajte nás kontaktovať pre bezplatnú konzultáciu. Radi vám poradíme s výberom najvhodnejšieho
                    riešenia pre vaše podnikanie.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#e2cfbe]/20 p-2 rounded-full mr-3">
                      <ShieldCheck className="h-5 w-5 text-[#e2cfbe]" />
                    </div>
                    <Link
                      href="/sluzby/podvojne-uctovnictvo"
                      className="text-[#e2cfbe] hover:text-[#c3b09e] font-medium"
                    >
                      Podvojné účtovníctvo
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#e2cfbe]/20 p-2 rounded-full mr-3">
                      <ShieldCheck className="h-5 w-5 text-[#e2cfbe]" />
                    </div>
                    <Link
                      href="/sluzby/ekonomicke-poradenstvo"
                      className="text-[#e2cfbe] hover:text-[#c3b09e] font-medium"
                    >
                      Ekonomické poradenstvo
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#e2cfbe]/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Začnime spolupracovať</h2>
            <p className="text-lg text-gray-700 mb-8">
              Kontaktujte nás ešte dnes a zistite, ako vám môžeme pomôcť s daňovou optimalizáciou a poradenstvom. Prvá
              konzultácia je zdarma.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn btn-primary">
                Kontaktujte nás
              </Link>
              <Link href="/sluzby" className="btn btn-outline">
                Ďalšie služby
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
