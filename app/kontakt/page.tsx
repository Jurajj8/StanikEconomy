"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
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

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulácia odoslania formulára
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset stavu po 5 sekundách
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
          <Phone className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 text-[#e2cfbe]/20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <Mail className="w-16 h-16" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block relative mb-6">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] blur-xl opacity-30 rounded-full transform scale-150"></div> */}
              <div className="relative bg-white/50 backdrop-blur-sm p-4 rounded-full border border-[#e2cfbe]/30 shadow-lg">
                <Mail className="w-16 h-16 text-[#e2cfbe] mx-auto" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Kontaktujte nás
            </h1>

            <div className="relative">
              <div className="absolute h-1 w-20 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] left-1/2 transform -translate-x-1/2 rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 pt-6">
                Radi vám poskytneme všetky potrebné informácie o našich službách. Neváhajte nás kontaktovať
                prostredníctvom formulára alebo priamo telefonicky či e-mailom.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">+421 908 621 165</span>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">info@stanikeconomy.sk</span>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5 text-[#e2cfbe] mr-2" />
                <span className="text-sm">Malá 2944, 022 01 Čadca</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
              <h2 className="text-3xl font-bold mb-6">Napíšte nám</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl mb-8"
                >
                  <h3 className="text-xl font-semibold mb-2">Ďakujeme za vašu správu!</h3>
                  <p>Vaša správa bola úspešne odoslaná. Budeme vás kontaktovať čo najskôr.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Meno a priezvisko *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefón
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Predmet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]"
                      >
                        <option value="">Vyberte predmet</option>
                        <option value="Jednoduché účtovníctvo">Jednoduché účtovníctvo</option>
                        <option value="Podvojné účtovníctvo">Podvojné účtovníctvo</option>
                        <option value="Mzdy a personalistika">Mzdy a personalistika</option>
                        <option value="Daňové poradenstvo">Daňové poradenstvo</option>
                        <option value="Ekonomické poradenstvo">Ekonomické poradenstvo</option>
                        <option value="In��">Iné</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Správa *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary inline-flex items-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3.002 8.014l2.268-2.226A7.96 7.96 0 016 12H2z"
                            ></path>
                          </svg>
                          Odosielanie...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Odoslať správu
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-6">Kontaktné informácie</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#e2cfbe]/20 p-3 rounded-xl mr-4">
                    <MapPin className="h-6 w-6 text-[#e2cfbe]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresa</h3>
                    <p className="text-gray-600">
                      Stanik Economy, s.r.o.
                      <br />
                      Hlavná 123
                      <br />
                      851 01 Bratislava
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e2cfbe]/20 p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-[#e2cfbe]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@stanikeconomy.sk" className="hover:text-[#e2cfbe]">
                        info@stanikeconomy.sk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e2cfbe]/20 p-3 rounded-xl mr-4">
                    <Phone className="h-6 w-6 text-[#e2cfbe]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefón</h3>
                    <p className="text-gray-600">
                      <a href="tel:+421911222333" className="hover:text-[#e2cfbe]">
                        +421 911 222 333
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e2cfbe]/20 p-3 rounded-xl mr-4">
                    <Clock className="h-6 w-6 text-[#e2cfbe]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Otváracie hodiny</h3>
                    <p className="text-gray-600">
                      Pondelok - Piatok: 8:00 - 17:00
                      <br />
                      Sobota - Nedeľa: Zatvorené
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Budova Stanik Economy"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Kde nás nájdete
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[500px] w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.2615642777916!2d18.78842898379816!3d49.439014894648736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8db88f6b281b18d7%3A0x7f4316a5a4abe9bf!2sStan%C3%ADk%20economy%2C%20s.r.o.!5e0!3m2!1scs!2ssk!4v1749651929016!5m2!1scs!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
