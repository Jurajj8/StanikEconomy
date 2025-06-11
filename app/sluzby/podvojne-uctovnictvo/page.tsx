"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { BarChart3, CheckCircle, ArrowLeft, FileText, Calculator } from "lucide-react"
import { Footer } from "@/components/footer"


export default function PodvojneUctovnictvo() {
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
          <BarChart3 className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 text-[#e2cfbe]/20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <FileText className="w-16 h-16" />
        </motion.div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] blur-xl opacity-30 rounded-full transform scale-150"></div>
              <div className="relative bg-white/50 backdrop-blur-sm p-4 rounded-full border border-[#e2cfbe]/30 shadow-lg">
                <BarChart3 className="w-16 h-16 text-[#e2cfbe] mx-auto" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Podvojné účtovníctvo
            </h1>

            <div className="relative">
              <div className="absolute h-1 w-20 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] left-1/2 transform -translate-x-1/2 rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 pt-6">
                Komplexné vedenie podvojného účtovníctva pre firmy všetkých veľkostí s dôrazom na presnosť a
                spoľahlivosť.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <BarChart3 className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Účtovné doklady</span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <FileText className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Účtovná závierka</span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <Calculator className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Daňové priznania</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div>
                <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Podvojné účtovníctvo"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold mb-6">Čo zahŕňa podvojné účtovníctvo?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Podvojné účtovníctvo je komplexný systém účtovania, ktorý sleduje majetok, záväzky, náklady a výnosy
                  vašej spoločnosti. Poskytuje detailný prehľad o finančnej situácii a výkonnosti vášho podnikania.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-[#e2cfbe]" /> Spracovanie účtovných dokladov
                    </h3>
                    <p className="text-gray-700">
                      Zabezpečíme kompletné spracovanie všetkých účtovných dokladov - faktúr, pokladničných dokladov,
                      bankových výpisov a interných dokladov v súlade s platnou legislatívou.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-[#e2cfbe]" /> Vedenie hlavnej knihy a účtovného denníka
                    </h3>
                    <p className="text-gray-700">
                      Vedieme hlavnú knihu a účtovný denník, ktoré poskytujú komplexný prehľad o všetkých účtovných
                      operáciách vašej spoločnosti.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-[#e2cfbe]" /> Zostavenie účtovnej závierky
                    </h3>
                    <p className="text-gray-700">
                      Na konci účtovného obdobia zostavíme účtovnú závierku, ktorá zahŕňa súvahu, výkaz ziskov a strát a
                      poznámky k účtovnej závierke.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-[#e2cfbe]" /> Spracovanie daňového priznania
                    </h3>
                    <p className="text-gray-700">
                      Pripravíme a podáme daňové priznanie k dani z príjmov právnických osôb, vrátane všetkých
                      potrebných príloh a výkazov.
                    </p>
                  </div>

                  <div className="bg-[#e2cfbe]/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-[#e2cfbe]" /> Účtovné poradenstvo
                    </h3>
                    <p className="text-gray-700">
                      Poskytujeme odborné poradenstvo v oblasti účtovníctva, daní a finančného riadenia, aby ste mohli
                      prijímať informované rozhodnutia.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Pre koho je podvojné účtovníctvo vhodné?</h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Spoločnosti s ručením obmedzeným (s.r.o.)",
                    "Akciové spoločnosti (a.s.)",
                    "Verejné obchodné spoločnosti (v.o.s.)",
                    "Komanditné spoločnosti (k.s.)",
                    "Neziskové organizácie",
                    "Podnikatelia zapísaní v obchodnom registri",
                    "Podnikatelia s obratom nad zákonom stanovený limit",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#e2cfbe] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold mb-6">Výhody podvojného účtovníctva</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Komplexný prehľad",
                      description: "Detailný prehľad o finančnej situácii a výkonnosti vašej spoločnosti.",
                    },
                    {
                      title: "Presnosť",
                      description: "Vyššia presnosť a spoľahlivosť účtovných informácií vďaka princípu podvojnosti.",
                    },
                    {
                      title: "Finančná analýza",
                      description: "Možnosť vykonávať podrobné finančné analýzy a plánovanie.",
                    },
                    {
                      title: "Legislatívna povinnosť",
                      description: "Splnenie zákonnej povinnosti pre väčšinu právnických osôb.",
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
                      <BarChart3 className="h-5 w-5 text-[#e2cfbe]" />
                    </div>
                    <Link
                      href="/sluzby/mzdy-a-personalistika"
                      className="text-[#e2cfbe] hover:text-[#c3b09e] font-medium"
                    >
                      Mzdy a personalistika
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#e2cfbe]/20 p-2 rounded-full mr-3">
                      <BarChart3 className="h-5 w-5 text-[#e2cfbe]" />
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
              Kontaktujte nás ešte dnes a zistite, ako vám môžeme pomôcť s vedením podvojného účtovníctva. Prvá
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
