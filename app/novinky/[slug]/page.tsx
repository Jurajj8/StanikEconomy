"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { sk } from "date-fns/locale"
import { Calendar, Clock, User, ArrowLeft, Share2, Printer, Facebook, Twitter, Linkedin } from "lucide-react"

// Definícia typov pre článok
interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: Date
  readTime: string
  image: string
  tags?: string[]
  relatedArticles?: {
    id: string
    title: string
    image: string
  }[]
}

// Databáza článkov
const articles: Article[] = [
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
    tags: ["Daňové priznanie", "Legislatíva", "Dane", "Podnikanie"],
    relatedArticles: [
      {
        id: "elektronicka-fakturacia-povinnost",
        title: "Povinná elektronická fakturácia od roku 2024",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
    ],
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
    tags: ["Elektronická fakturácia", "Legislatíva", "Digitalizácia", "Účtovníctvo"],
    relatedArticles: [
      {
        id: "zmeny-v-danovom-priznani-2024",
        title: "Zmeny v daňovom priznaní pre rok 2024",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
]

export async function generateStaticParams() {
  return articles.map(article => ({ slug: article.id }));
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulácia načítania článku z "databázy"
    const foundArticle = articles.find((a) => a.id === slug)
    setArticle(foundArticle || null)
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-12"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Článok nenájdený</h1>
        <p className="mb-8">Ľutujeme, požadovaný článok neexistuje.</p>
        <Link href="/novinky" className="btn btn-primary">
          Späť na novinky
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-[#e2cfbe]/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/novinky"
              className="inline-flex items-center text-gray-600 hover:text-[#e2cfbe] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Späť na novinky
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-4">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{format(article.date, "d. MMMM yyyy", { locale: sk })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
            {article.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-[#e2cfbe]/30 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Featured Image */}
                <div className="relative h-[400px] w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>

                {/* Article Body */}
                <div className="p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: article.content
                        .replace(/<h3>/g, '<h3 class="text-2xl font-bold mt-8 mb-4">')
                        .replace(/<p>/g, '<p class="mb-4 text-gray-700">')
                        .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6 text-gray-700">')
                        .replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-6 text-gray-700">'),
                    }}
                  />

                  {/* Share Section */}
                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-4">Zdieľať článok</h4>
                    <div className="flex space-x-4">
                      <button className="p-2 bg-[#e2cfbe]/10 rounded-full hover:bg-[#e2cfbe]/20 transition-colors">
                        <Facebook className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="p-2 bg-[#e2cfbe]/10 rounded-full hover:bg-[#e2cfbe]/20 transition-colors">
                        <Twitter className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="p-2 bg-[#e2cfbe]/10 rounded-full hover:bg-[#e2cfbe]/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="p-2 bg-[#e2cfbe]/10 rounded-full hover:bg-[#e2cfbe]/20 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="p-2 bg-[#e2cfbe]/10 rounded-full hover:bg-[#e2cfbe]/20 transition-colors">
                        <Printer className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-md p-6 mb-8"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-[#e2cfbe]/20 rounded-full flex items-center justify-center mr-4">
                      <User className="w-8 h-8 text-[#e2cfbe]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{article.author}</h3>
                      <p className="text-gray-600 text-sm">Daňový poradca</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Odborník na daňovú legislatívu s viac ako 10-ročnými skúsenosťami v oblasti účtovníctva a daňového
                    poradenstva.
                  </p>
                  <Link href="/kontakt" className="text-[#e2cfbe] hover:text-[#c3b09e] font-medium">
                    Kontaktovať autora
                  </Link>
                </motion.div>

                {/* Related Articles */}
                {article.relatedArticles && article.relatedArticles.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-white rounded-xl shadow-md p-6 mb-8"
                  >
                    <h3 className="font-bold text-xl mb-6">Súvisiace články</h3>
                    <div className="space-y-6">
                      {article.relatedArticles.map((related, index) => (
                        <Link key={index} href={`/novinky/${related.id}`} className="block group">
                          <div className="flex items-center">
                            <div className="w-20 h-20 relative rounded-md overflow-hidden mr-4 flex-shrink-0">
                              <Image
                                src={related.image || "/placeholder.svg"}
                                alt={related.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-medium group-hover:text-[#e2cfbe] transition-colors">
                              {related.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="bg-[#e2cfbe]/10 rounded-xl shadow-md p-6"
                >
                  <h3 className="font-bold text-xl mb-4">Potrebujete poradiť?</h3>
                  <p className="text-gray-700 mb-6">
                    Naši odborníci vám radi pomôžu s akýmikoľvek otázkami týkajúcimi sa daňovej legislatívy a
                    účtovníctva.
                  </p>
                  <Link href="/kontakt" className="btn btn-primary w-full text-center">
                    Kontaktujte nás
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#e2cfbe]/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Zostaňte informovaní</h2>
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
    </>
  )
}
