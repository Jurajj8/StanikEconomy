import ArticleClientPage from "./ArticleClientPage"

// Generovanie statických parametrov pre export
export async function generateStaticParams() {
  // Vrátime zoznam všetkých dostupných článkov
  return [
    { slug: "zmeny-v-danovom-priznani-2024" },
    { slug: "elektronicka-fakturacia-povinnost" },
    { slug: "danove-odpisy-2024" },
  ]
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <ArticleClientPage params={params} />
}
