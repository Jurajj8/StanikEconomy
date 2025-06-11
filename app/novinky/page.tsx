"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { sk } from "date-fns/locale"
import { Calendar, Clock, User, ArrowRight, Search, FileText } from "lucide-react"
import { Footer } from "@/components/footer"

// Upraviť import useState
import { useState } from "react"

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

const articles = [
  {
    id: "zmeny-v-danovom-priznani-2024",
    title: "Zmeny v daňovom priznaní pre rok 2024",
    excerpt:
      "Prehľad najdôležitejších zmien v daňovom priznaní pre rok 2024, ktoré by mali poznať všetci podnikatelia.",
    content: `
      <p>S novým rokom prichádzajú aj zmeny v daňovom systéme, ktoré ovplyvnia spôsob, akým budú podnikatelia a firmy podávať daňové priznania za rok 2024. Tieto zmeny prinášajú niekoľko významných úprav, ktoré by mali podnikatelia poznať.</p>
      
      <h3>Nové sadzby dane z príjmov</h3>
      <p>Od 1. januára 2024 sa menia sadzby dane z príjmov fyzických osôb. Pre príjmy do výšky 38 500 € ročne zostáva sadzba na úrovni 19%. Pre príjmy presahujúce túto hranicu sa sadzba zvyšuje na 25%. Táto zmena ovplyvní najmä podnikateľov s vyššími príjmami.</p>
      
      <h3>Úpravy v odpisovaní majetku</h3>
      <p>Dochádza k zmenám v odpisových skupinách a dobách odpisovania niektorých druhov majetku. Napríklad elektronické zariadenia a počítače sa presúvajú do 1. odpisovej skupiny s dobou odpisovania 4 roky namiesto doterajších 6 rokov.</p>
      
      <h3>Nové daňové úľavy pre inovácie</h3>
      <p>Zavádza sa nový systém daňových úľav pre firmy investujúce do výskumu a inovácií. Podniky môžu získať dodatočnú daňovú úľavu vo výške až 100% nákladov vynaložených na výskum a vývoj.</p>
      
      <h3>Zmeny v paušálnych výdavkoch</h3>
      <p>Zvyšuje sa limit pre uplatnenie paušálnych výdavkov z doterajších 60% na 65% z príjmov, maximálne však do výšky 20 000 € ročne. Táto zmena prináša výhody najmä pre drobných podnikateľov a živnostníkov.</p>
      
      <h3>Elektronická komunikácia</h3>
      <p>Od roku 2024 budú všetci podnikatelia povinní komunikovať s daňovým úradom elektronicky. Končí možnosť podávať daňové priznania v papierovej forme, čo si vyžiada prípravu na strane podnikateľov.</p>
      
      <h3>Záver</h3>
      <p>Uvedené zmeny predstavujú len najvýznamnejšie úpravy v daňovom systéme pre rok 2024. Pre podrobnejšie informácie a individuálne poradenstvo kontaktujte našich daňových poradcov, ktorí vám pomôžu pripraviť sa na nadchádzajúce zmeny a optimalizovať vašu daňovú povinnosť.</p>
    `,
    author: "Ing. Mária Staníková",
    date: new Date(2023, 11, 15), // December 15, 2023
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Daňové priznanie", "Legislatíva", "Dane"],
  },
  {
    id: "elektronicka-fakturacia-povinnost",
    title: "Povinná elektronická fakturácia od roku 2024",
    excerpt:
      "Od januára 2024 vstupuje do platnosti povinnosť elektronickej fakturácie pre všetky podnikateľské subjekty. Čo to znamená a ako sa pripraviť?",
    content: `
      <p>Od 1. januára 2024 vstupuje do platnosti nová legislatíva, ktorá zavádza povinnú elektronickú fakturáciu pre všetky podnikateľské subjekty na Slovensku. Ide o významnú zmenu, ktorá má za cieľ zefektívniť proces fakturácie, znížiť administratívnu záťaž a bojovať proti daňovým únikom.</p>
      
      <h3>Čo je elektronická fakturácia?</h3>
      <p>Elektronická fakturácia predstavuje vystavovanie, odosielanie, prijímanie a spracovanie faktúr v elektronickej podobe. Faktúry musia byť vystavené v štandardizovanom formáte, ktorý umožňuje automatické spracovanie a archiváciu.</p>
      
      <h3>Koho sa povinnosť týka?</h3>
      <p>Povinnosť elektronickej fakturácie sa týka všetkých podnikateľských subjektov registrovaných na Slovensku, bez ohľadu na veľkosť, obrat či právnu formu podnikania. Mikropodniky a malé podniky budú mať prechodné obdobie do 30. júna 2024.</p>
      
      <h3>Výhody elektronickej fakturácie</h3>
      <ul>
        <li>Zníženie nákladov na tlač, poštovné a archiváciu</li>
        <li>Rýchlejšie spracovanie faktúr</li>
        <li>Zníženie chybovosti pri spracovaní</li>
        <li>Lepšia prehľadnosť a dostupnosť dokumentov</li>
        <li>Environmentálny prínos - šetrenie papiera a energií</li>
      </ul>
      
      <h3>Ako sa pripraviť?</h3>
      <p>Pre úspešný prechod na elektronickú fakturáciu je potrebné:</p>
      <ol>
        <li>Zvoliť vhodný softvér alebo službu pre elektronickú fakturáciu</li>
        <li>Aktualizovať existujúci účtovný systém</li>
        <li>Vyškoliť zamestnancov</li>
        <li>Informovať obchodných partnerov o zmene</li>
        <li>Zabezpečiť správne archivovanie elektronických faktúr</li>
      </ol>
      
      <h3>Záver</h3>
      <p>Prechod na elektronickú fakturáciu predstavuje dôležitý krok v digitalizácii ekonomiky. Aj keď môže spočiatku priniesť určité komplikácie, z dlhodobého hľadiska prináša množstvo výhod pre všetky zúčastnené strany. Naša spoločnosť vám ponúka komplexné poradenstvo a podporu pri prechode na elektronickú fakturáciu.</p>
    `,
    author: "Ing. Peter Staník",
    date: new Date(2023, 10, 28), // November 28, 2023
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Elektronická fakturácia", "Legislatíva", "Digitalizácia"],
  },
  {
    id: "danove-odpisy-2024",
    title: "Daňové odpisy v roku 2024: Čo sa mení a ako to ovplyvní vaše podnikanie",
    excerpt:
      "Prehľad zmien v daňových odpisoch pre rok 2024 a ich vplyv na daňovú optimalizáciu podnikateľov a firiem.",
    author: "Ing. Ján Kováč",
    date: new Date(2023, 11, 5), // December 5, 2023
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Daňové odpisy", "Legislatíva", "Dane"],
  },
]

// Pridať stav pre vyhľadávanie pod deklaráciu fadeIn
export default function Novinky() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filtrovanie článkov podľa vyhľadávacieho dotazu
  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase()
    return (
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      (article.tags && article.tags.some((tag) => tag.toLowerCase().includes(query))) ||
      article.author.toLowerCase().includes(query)
    )
  })

  // Určenie, či sa má zobraziť hlavný článok alebo nie
  const showFeaturedArticle =
    searchQuery === "" || (filteredArticles.length > 0 && filteredArticles[0].id === articles[0].id)

  // Upraviť input pre vyhľadávanie
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
          <Calendar className="w-16 h-16" />
        </motion.div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] blur-xl opacity-30 rounded-full transform scale-150"></div>
              <div className="relative bg-white/50 backdrop-blur-sm p-4 rounded-full border border-[#e2cfbe]/30 shadow-lg">
                <FileText className="w-16 h-16 text-[#e2cfbe] mx-auto" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Novinky a články
            </h1>

            <div className="relative">
              <div className="absolute h-1 w-20 bg-gradient-to-r from-[#e2cfbe] to-[#d4b99f] left-1/2 transform -translate-x-1/2 rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 pt-6">
                Aktuálne informácie, odborné články a užitočné tipy zo sveta účtovníctva, daní a ekonomiky.
              </p>
            </div>

            <div className="relative max-w-xl mx-auto mt-8">
              <input
                type="text"
                placeholder="Hľadať články..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe] shadow-md"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#e2cfbe]"
                onClick={() => setSearchQuery("")}
                title={searchQuery ? "Vymazať vyhľadávanie" : "Vyhľadávať"}
              >
                {searchQuery ? <span className="text-xl">&times;</span> : <Search className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article - zobrazí sa len ak nie je vyhľadávanie alebo ak je prvý výsledok rovnaký ako hlavný článok */}
      {showFeaturedArticle && (
        <section className="py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={articles[0].image || "/placeholder.svg"}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{format(articles[0].date, "d. MMMM yyyy", { locale: sk })}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{articles[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <Link href={`/novinky/${articles[0].id}`} className="hover:text-[#e2cfbe] transition-colors">
                      {articles[0].title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{articles[0].author}</span>
                    </div>
                    <Link
                      href={`/novinky/${articles[0].id}`}
                      className="inline-flex items-center text-[#e2cfbe] hover:text-[#c3b09e] font-medium"
                    >
                      Čítať viac <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid - upraviť na zobrazenie filtrovaných článkov */}
      <section className="py-12">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Žiadne výsledky pre "{searchQuery}"</h3>
              <p className="text-gray-600 mb-6">Skúste iné kľúčové slová alebo prehliadajte všetky články.</p>
              <button onClick={() => setSearchQuery("")} className="btn btn-primary">
                Zobraziť všetky články
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ak je vyhľadávanie a prvý článok je zobrazený ako hlavný, začíname od indexu 1 */}
              {(searchQuery === "" ? filteredArticles.slice(1) : filteredArticles).map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={fadeIn}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={`/novinky/${article.id}`} className="block">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{format(article.date, "d. MMMM yyyy", { locale: sk })}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link href={`/novinky/${article.id}`} className="hover:text-[#e2cfbe] transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">{article.author}</span>
                      </div>
                      <Link
                        href={`/novinky/${article.id}`}
                        className="inline-flex items-center text-[#e2cfbe] hover:text-[#c3b09e] font-medium text-sm"
                      >
                        Čítať viac <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Zobraziť kategórie len ak nie je vyhľadávanie */}
      {searchQuery === "" && (
        <section className="py-12 bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Kategórie článkov</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Prehliadajte naše články podľa kategórií, ktoré vás zaujímajú.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Daňové priznania", count: 8, icon: "📝", color: "bg-blue-50 text-blue-600" },
                { name: "Účtovníctvo", count: 12, icon: "📊", color: "bg-green-50 text-green-600" },
                { name: "Legislatíva", count: 15, icon: "⚖️", color: "bg-purple-50 text-purple-600" },
                { name: "Mzdy a personalistika", count: 7, icon: "👥", color: "bg-yellow-50 text-yellow-600" },
                { name: "DPH", count: 9, icon: "💰", color: "bg-red-50 text-red-600" },
                { name: "Ekonomické analýzy", count: 6, icon: "📈", color: "bg-indigo-50 text-indigo-600" },
                { name: "Podnikanie", count: 11, icon: "🏢", color: "bg-pink-50 text-pink-600" },
                { name: "Digitalizácia", count: 5, icon: "💻", color: "bg-teal-50 text-teal-600" },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer"
                  onClick={() => setSearchQuery(category.name)}
                >
                  <div className={`inline-block rounded-full p-3 mb-4 ${category.color.split(" ")[0]}`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} článkov</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="section bg-[#e2cfbe]/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Odoberajte naše novinky</h2>
            <p className="text-lg text-gray-700 mb-8">
              Prihláste sa na odber noviniek a buďte vždy informovaní o aktuálnych zmenách v legislatíve a užitočných
              tipoch z oblasti účtovníctva a daní.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e2cfbe]"
              />
              <button className="btn btn-primary">Prihlásiť sa na odber</button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Váš e-mail nikdy neposkytneme tretím stranám. Kedykoľvek sa môžete odhlásiť.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
