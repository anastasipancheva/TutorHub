import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, ArrowLeft, BookOpen } from "lucide-react"

const articles = [
  {
    id: 1,
    slug: "1",
    title: "Как эффективно подготовиться к ЕГЭ по математике",
    excerpt: "Пошаговый план подготовки к экзамену, который поможет получить высокие баллы.",
    author: "Анастасия Панчева",
    date: "15 июля 2025",
    readTime: "3 мин",
    category: "ЕГЭ",
    image: "/images/blog/algebra.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "2",
    title: "Все о сдаче ЕГЭ в 10 классе",
    excerpt: "Разбираем ньюансы и требования, страхи и предубеждения.",
    author: "Анастасия Панчева",
    date: "14 июня 2025",
    readTime: "2 мин",
    category: "Русский язык",
    image: "/images/blog/10kl.jpg",
  },
  {
    id: 3,
    slug: "3",
    title: "ОГЭ по математике: 2 заветных балла по геометрии",
    excerpt: "Простые способы гарантированно научиться решать 15-19 задания.",
    author: "Анастасия Панчева",
    date: "25 июля 2025",
    readTime: "3 мин",
    category: "Математика",
    image: "/images/blog/sonik.jpg",
  },
  {
    id: 4,
    slug: "4",
    title: "Золотая медаль или ЕГЭ?",
    excerpt: "Как найти баланс и на чем сконцентрироваться в старшей школе? Личный опыт.",
    author: "Анастасия Панчева",
    date: "7 июня 2025",
    readTime: "2 мин",
    category: "Школа",
    image: "/images/blog/medal-vs-exam.png",
  },
  {
    id: 5,
    slug: "5",
    title: "Все тайны сочинения по русскому языку в ЕГЭ",
    excerpt: "Практические советы для получения максимального балла.",
    author: "Анастасия Панчева",
    date: "5 мая 2025",
    readTime: "2 мин",
    category: "Русский язык",
    image: "/images/blog/rus.jpg",
  },
  {
    id: 6,
    slug: "6",
    title: "Прочитай - узнаешь как выучить английский :)",
    excerpt: "Самые надежные и проверенные способы изучения английского.",
    author: "Серёдкина Ксения",
    date: "17 июля 2025",
    readTime: "2 мин",
    category: "Английский",
    image: "/images/blog/eng.jpg",
  },
]

export default function BlogListPage() {
  const featuredArticle = articles.find((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)

  return (
      <div className="min-h-screen bg-brand-beige text-slate-800">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-brand-pink-pastel/30 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-blue-bright rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-brand-blue-bright">TutorHub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/tutors" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Репетиторы
              </Link>
              <Link href="/blog" className="text-brand-pink-bright font-semibold">
                Блог
              </Link>
              <Link href="/career" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Карьера
              </Link>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <Link
                href="/"
                className="inline-flex items-center text-brand-blue-steel hover:text-brand-blue-bright mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Назад на главную
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-brand-blue-bright">Наш Блог</h1>
            <p className="text-lg text-gray-600">
              Полезные статьи, советы по учебе и подготовке к экзаменам от наших экспертов
            </p>
          </div>

          {featuredArticle && (
              <Card className="mb-12 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={featuredArticle.image || "/placeholder.svg?height=400&width=400"}
                        alt={featuredArticle.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-brand-pink-pastel text-brand-pink-bright border-brand-pink-bright/50">
                      {featuredArticle.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4 text-brand-blue-bright">{featuredArticle.title}</h2>
                    <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                    <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                      <div className="flex items-center">
                        <span>{featuredArticle.author}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" /> {featuredArticle.date}
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" /> {featuredArticle.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      <Button className="bg-brand-pink-bright hover:bg-brand-pink-pastel text-white">Читать статью</Button>
                    </Link>
                  </div>
                </div>
              </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
                <Card
                    key={article.id}
                    className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white rounded-2xl group"
                >
                  <Link href={`/blog/${article.slug}`} className="flex flex-col h-full">
                    <div className="relative">
                      <div className="w-full aspect-[16/8] overflow-hidden">
                        <Image
                            src={article.image || "/placeholder.svg?height=200&width=400"}
                            alt={article.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <Badge className="absolute top-3 left-3 bg-brand-blue-pastel text-brand-blue-bright">
                        {article.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold mb-3 flex-grow text-brand-blue-bright">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                      <div className="text-xs text-gray-500 mt-auto flex items-center justify-between">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <div className="w-8 h-8 bg-brand-blue-bright rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">TutorHub</span>
                </div>
                <p className="text-gray-400">Лучшая платформа для поиска репетиторов и онлайн-обучения</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-4">Навигация</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/tutors" className="hover:text-white transition-colors">
                      Репетиторы
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="hover:text-white transition-colors">
                      Курсы
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Блог
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="hover:text-white transition-colors">
                      Карьера
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-4">Поддержка</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                      Политика
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">
                      Условия
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2025 TutorHub. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}
