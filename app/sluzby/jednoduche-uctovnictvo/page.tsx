"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FileText, CheckCircle, ArrowLeft, Calculator, ShieldCheck } from "lucide-react"
import { Footer } from "@/components/footer"


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

export default function JednoducheUctovnictvo() {
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
          <FileText className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 text-[#e2cfbe]/20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <Calculator className="w-16 h-16" />
        </motion.div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] blur-xl opacity-30 rounded-full transform scale-150"></div>
              <div className="relative bg-white/50 backdrop-blur-sm p-4 rounded-full border border-[#e2cfbe]/30 shadow-lg">
                <FileText className="w-16 h-16 text-[#e2cfbe] mx-auto" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Jednoduché účtovníctvo
            </h1>

            <div className="relative">
              <div className="absolute h-1 w-20 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] left-1/2 transform -translate-x-1/2 rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 pt-6">
                Komplexné vedenie jednoduchého účtovníctva pre podnikateľov, živnostníkov a malé firmy.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <FileText className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Peňažný denník</span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <Calculator className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Daňové priznania</span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <ShieldCheck className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Zastupovanie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Odstránené animácie, ktoré spôsobovali problémy */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div>
                <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Jednoduché účtovníctvo"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold mb-6">Čo zahŕňa jednoduché účtovníctvo?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Jednoduché účtovníctvo je systém evidencie príjmov a výdavkov, ktorý je určený pre podnikateľov a
                  živnostníkov, ktorí nie sú zapísaní v obchodnom registri a ich obrat neprekročil zákonom stanovený
                  limit.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Vedenie peňažného denníka
                    </h3>
                    <p className="text-gray-700">
                      Evidujeme všetky vaše príjmy a výdavky v peňažnom denníku, ktorý je základom jednoduchého
                      účtovníctva. Zabezpečíme správne zatriedenie všetkých položiek podľa daňových predpisov.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Evidencia pohľadávok a záväzkov
                    </h3>
                    <p className="text-gray-700">
                      Vedieme prehľadnú evidenciu všetkých vašich pohľadávok a záväzkov, aby ste mali vždy aktuálny
                      prehľad o tom, kto vám dlhuje a komu dlhujete vy.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Evidencia dlhodobého majetku
                    </h3>
                    <p className="text-gray-700">
                      Zabezpečíme správnu evidenciu a odpisovanie vášho dlhodobého majetku v súlade s daňovými
                      predpismi, čo vám umožní optimalizovať vaše daňové zaťaženie.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Spracovanie daňového priznania
                    </h3>
                    <p className="text-gray-700">
                      Na konci účtovného obdobia pre vás pripravíme a podáme daňové priznanie k dani z príjmov, vrátane
                      všetkých potrebných príloh a výkazov.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText className="mr-2 text-[#e2cfbe]" /> Zastupovanie pred daňovým úradom
                    </h3>
                    <p className="text-gray-700">
                      V prípade potreby vás zastúpime pri komunikácii s daňovým úradom, vrátane daňových kontrol a iných
                      konaní.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Pre koho je jednoduché účtovníctvo vhodné?</h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Živnostníci a SZČO",
                    "Slobodné povolania (lekári, právnici, umelci)",
                    "Malé firmy s obratom do zákonom stanoveného limitu",
                    "Začínajúci podnikatelia",
                    "Podnikatelia, ktorí nie sú zapísaní v obchodnom registri",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#e2cfbe] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold mb-6">Výhody jednoduchého účtovníctva</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Jednoduchosť",
                      description: "Menej náročné na vedenie a pochopenie ako podvojné účtovníctvo.",
                    },
                    {
                      title: "Nižšie náklady",
                      description: "Cenovo dostupnejšie riešenie pre malých podnikateľov.",
                    },
                    {
                      title: "Prehľadnosť",
                      description: "Jasný prehľad o príjmoch a výdavkoch vášho podnikania.",
                    },
                    {
                      title: "Flexibilita",
                      description: "Možnosť prispôsobenia vašim špecifickým potrebám.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
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
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200">Individuálne cenové podmienky</h3>
                <div className="bg-[#e2cfbe]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-lg mb-3">Ceny prispôsobené vašim potrebám</h4>
                  <p className="text-gray-700 mb-4">
                    Každý klient má špecifické požiadavky a potreby, preto naše cenové podmienky stanovujeme
                    individuálne po osobnej konzultácii.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Cena závisí od rozsahu služieb, veľkosti vašej firmy, počtu dokladov a ďalších faktorov, ktoré spolu
                    prekonzultujeme.
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
                      <FileText className="h-5 w-5 text-[#e2cfbe]" />
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
                      <FileText className="h-5 w-5 text-[#e2cfbe]" />
                    </div>
                    <Link href="/sluzby/danove-poradenstvo" className="text-[#e2cfbe] hover:text-[#c3b09e] font-medium">
                      Daňové poradenstvo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#e2cfbe]/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Začnime spolupracovať</h2>
            <p className="text-lg text-gray-700 mb-8">
              Kontaktujte nás ešte dnes a zistite, ako vám môžeme pomôcť s vedením jednoduchého účtovníctva. Prvá
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
