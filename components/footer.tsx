"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Send } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      // Tu by bola logika pre odoslanie emailu na server
      setTimeout(() => {
        setSubscribed(false)
      }, 5000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Dekoratívne prvky */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e2cfbe]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#e2cfbe]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo a popis */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Stanik <span className="text-[#e2cfbe]">Economy</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600"
            >
              Poskytujeme komplexné účtovnícke a poradenské služby pre podnikateľov a firmy s dôrazom na presnosť,
              spoľahlivosť a digitálne riešenia pre moderné podnikanie.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <Link
                href="https://facebook.com"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#e2cfbe]/10 group"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-[#e2cfbe]" />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#e2cfbe]/10 group"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-[#e2cfbe]" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#e2cfbe]/10 group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-[#e2cfbe]" />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#e2cfbe]/10 group"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-[#e2cfbe]" />
              </Link>
            </motion.div>
          </div>

          {/* Služby */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-800">Naše služby</h3>
            <ul className="space-y-3">
              {[
                { name: "Jednoduché účtovníctvo", href: "/sluzby/jednoduche-uctovnictvo" },
                { name: "Podvojné účtovníctvo", href: "/sluzby/podvojne-uctovnictvo" },
                { name: "Mzdy a personalistika", href: "/sluzby/mzdy-a-personalistika" },
                { name: "Daňové poradenstvo", href: "/sluzby/danove-poradenstvo" },
                { name: "Ekonomické poradenstvo", href: "/sluzby/ekonomicke-poradenstvo" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#e2cfbe] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e2cfbe] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Rýchle odkazy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-800">Rýchle odkazy</h3>
            <ul className="space-y-3">
              {[
                { name: "Domov", href: "/" },
                { name: "O nás", href: "/o-nas" },
                { name: "Služby", href: "/sluzby" },
                { name: "Novinky", href: "/novinky" },
                { name: "Referencie", href: "/referencie" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#e2cfbe] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e2cfbe] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontakt a newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-800">Kontaktujte nás</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#e2cfbe] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  Malá 2944
                  <br />
                  022 01 Čadca
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#e2cfbe] mr-3 flex-shrink-0" />
                <a
                  href="tel:+421911222333"
                  className="text-gray-600 hover:text-[#e2cfbe] transition-colors duration-300"
                >
                  +421 908 621 165
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#e2cfbe] mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@stanikeconomy.sk"
                  className="text-gray-600 hover:text-[#e2cfbe] transition-colors duration-300"
                >
                  info@stanikeconomy.sk
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Odoberajte novinky</h3>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Váš email"
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#e2cfbe] text-white p-2 rounded-md hover:bg-[#d4b99f] transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm mt-2"
                >
                  Ďakujeme za prihlásenie na odber noviniek!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Spodná časť */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Stanik Economy. Všetky práva vyhradené.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/ochrana-osobnych-udajov"
                className="text-gray-600 hover:text-[#e2cfbe] text-sm transition-colors duration-300"
              >
                Ochrana osobných údajov
              </Link>
              <Link
                href="/obchodne-podmienky"
                className="text-gray-600 hover:text-[#e2cfbe] text-sm transition-colors duration-300"
              >
                Obchodné podmienky
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-[#e2cfbe] text-sm transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
