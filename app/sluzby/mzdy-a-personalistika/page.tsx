"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calculator, CheckCircle, ArrowLeft, Users, FileText } from "lucide-react"
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

export default function MzdyAPersonalistika() {
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
          <Calculator className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 text-[#e2cfbe]/20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <Users className="w-16 h-16" />
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
                <Calculator className="w-16 h-16 text-[#e2cfbe] mx-auto" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Mzdy a personalistika
            </h1>

            <div className="relative">
              <div className="absolute h-1 w-20 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] left-1/2 transform -translate-x-1/2 rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 pt-6">
                Komplexné spracovanie miezd a vedenie personálnej agendy pre firmy všetkých veľkostí.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Personálna agenda</span>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Calculator className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Spracovanie miezd</span>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FileText className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Reporting</span>
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
                    src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Mzdy a personalistika"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold mb-6">Čo zahŕňajú naše služby v oblasti miezd a personalistiky?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Poskytujeme komplexné služby v oblasti spracovania miezd a vedenia personálnej agendy, ktoré vám
                  umožnia sústrediť sa na vaše podnikanie a zároveň mať istotu, že všetky zákonné povinnosti sú splnené.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Calculator className="mr-2 text-[#e2cfbe]" /> Spracovanie miezd zamestnancov
                    </h3>
                    <p className="text-gray-700">
                      Zabezpečíme kompletné spracovanie miezd vašich zamestnancov, vrátane výpočtu hrubej a čistej mzdy,
                      príplatkov, odmien, náhrad mzdy a zrážok zo mzdy.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Calculator className="mr-2 text-[#e2cfbe]" /> Výpočet a odvod zákonných odvodov
                    </h3>
                    <p className="text-gray-700">
                      Vypočítame a zabezpečíme odvod všetkých zákonných odvodov do Sociálnej poisťovne, zdravotných
                      poisťovní a daňového úradu.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="mr-2 text-[#e2cfbe]" /> Komunikácia so Sociálnou poisťovňou a zdravotnými
                      poisťovňami
                    </h3>
                    <p className="text-gray-700">
                      Zabezpečíme komunikáciu so Sociálnou poisťovňou a zdravotnými poisťovňami, vrátane prihlášok,
                      odhlášok a mesačných výkazov.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Vedenie personálnej agendy
                    </h3>
                    <p className="text-gray-700">
                      Vedieme kompletnú personálnu agendu, vrátane pracovných zmlúv, dodatkov, dohôd o prácach
                      vykonávaných mimo pracovného pomeru, evidencie dochádzky a dovoleniek.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Reporting a štatistické výkazy
                    </h3>
                    <p className="text-gray-700">
                      Pripravíme pre vás rôzne reporty a štatistické výkazy, ktoré vám poskytnú prehľad o mzdových
                      nákladoch a personálnej situácii vo vašej spoločnosti.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Výhody externého spracovania miezd</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Úspora času",
                      description:
                        "Nemusíte sa zaoberať zložitou mzdovou agendou a môžete sa sústrediť na vaše podnikanie.",
                    },
                    {
                      title: "Úspora nákladov",
                      description: "Nižšie náklady v porovnaní so zamestnaním vlastného mzdového účtovníka.",
                    },
                    {
                      title: "Odbornosť",
                      description: "Naši odborníci majú aktuálne znalosti v oblasti mzdovej legislatívy.",
                    },
                    {
                      title: "Spoľahlivosť",
                      description: "Včasné a presné spracovanie miezd a odvodov bez rizika pokút za omeškanie.",
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

                <h2 className="text-3xl font-bold mb-6">Pre koho sú naše služby vhodné?</h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Malé a stredné podniky",
                    "Začínajúci podnikatelia",
                    "Spoločnosti bez vlastného mzdového oddelenia",
                    "Firmy, ktoré chcú optimalizovať svoje náklady",
                    "Spoločnosti, ktoré potrebujú zastúpenie počas neprítomnosti mzdovej účtovníčky",
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
                    Cena závisí od počtu zamestnancov, rozsahu služieb, frekvencie spracovania a ďalších faktorov, ktoré
                    spolu prekonzultujeme.
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
                      <Calculator className="h-5 w-5 text-[#e2cfbe]" />
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
                      <Calculator className="h-5 w-5 text-[#e2cfbe]" />
                    </div>
                    <Link href="/sluzby/danove-poradenstvo" className="text-[#e2cfbe] hover:text-[#c3b09e] font-medium">
                      Daňové poradenstvo
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
              Sme tu pre vás, aby sme vám pomohli s vašimi účtovnými a daňovými potrebami. Kontaktujte nás ešte dnes a
              získajte bezplatnú konzultáciu.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Kontaktujte nás
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
