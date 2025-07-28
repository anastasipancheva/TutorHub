import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react"
import styles from "../article-styles.module.css"

const post = {
  id: 6,
  title: "Прочитай - узнаешь как выучить английский :)",
  author: "Серёдкина Ксения",
  authorImage: "/images/tutors/ksenia.jpg",
  date: "17 июля 2025",
  readTime: "2 мин",
  views: 27,
  category: "Английский",
  image: "/images/blog/eng.jpg",
  content: `
    <p>Английский язык — один из самых востребованных в мире. Он нужен для работы, путешествий, общения и доступа к информации. Но это все и так понятно… непонятно лишь одно: как. его. выучить. Давайте думать…</p>
    
    <h3>1. Жизнь в языке</h3>
    <p>Один из самых эффективных методов — окружить себя английским:</p>
    <ul>
      <li>Фильмы и сериалы с субтитрами (желательно английскими)));</li>
      <li>Музыка и подкасты — слушайте и повторяйте тексты песен, разбирайте слова (тогда языковые конструкции будут случайно всплывать в вашей голове и очень кстати появляться во время разговоров!);</li>
      <li>Книги и статьи — начните с адаптированной литературы, постепенно переходя к оригиналам (ну да, может, не совсем весело, но тут уж зависит от выбора материала).</li>
    </ul>

    <h3>2. Болтушки!</h3>
    <p>Да, практика разговорной речи поначалу даётся тяжело: кажется, будто говоришь как ребёнок… (хотя что в этом плохого?). Но это — ключ к успеху. Записывайте:</p>
    <ul>
      <li>Языковые приложения (например, Tandem, HelloTalk, Speaky);</li>
      <li>Разговорные клубы (онлайн или оффлайн);</li>
      <li>Соцсети и форумы (Reddit, Tumblr).</li>
    </ul>

    <h3>3. Интернет в помощь</h3>
    <p>Слава современным технологиям! Благодаря им не нужно самостоятельно выстраивать программу обучения. (Кстати, совет в вашу копилку: можно вдохновляться структурой платных курсов и собрать материалы самостоятельно, если не хотите платить). Ресурсы:</p>
    <ul>
      <li>Duolingo (да-да:)), Babbel — для изучения слов и грамматики;</li>
      <li>Anki, Quizlet — карточки для запоминания слов;</li>
      <li>Coursera, Udemy — структурированные курсы от преподавателей.</li>
    </ul>

    <h3>4. Топ советов как правильно выбрать время:</h3>
    <p>Советов не будет, грамматику нужно учить. Используйте:</p>
    <ul>
      <li>Учебники (English Grammar in Use, Murphy, SpeakOut);</li>
      <li>YouTube-каналы (Puzzle English, English Addict with Steve);</li>
      <li>Онлайн-упражнения (Grammarly, LearnEnglish).</li>
    </ul>

    <h3>5. Переписки</h3>
    <p>Письмо помогает закрепить знания, поэтому:</p>
    <ul>
      <li>Ведите дневник на английском;</li>
      <li>Переписывайтесь с иностранцами;</li>
      <li>Комментируйте посты в блогах и форумах.</li>
    </ul>

    <h3>6. Человеки</h3>
    <p>Можно найти себе study buddy или же репетитора. Для первого варианта у вас должна быть отличная дисциплина, а вот во втором вам с этим помогут. Плюсы работы с репетитором:</p>
    <ul>
      <li>Исправление ошибок сразу.</li>
      <li>Получение обратной связи в любое время.</li>
      <li>Мотивация на регулярные занятия.</li>
    </ul>

    <h3>7. Информация для тех, у кого все из головы вылетает</h3>
    <p>Попробуйте:</p>
    <ul>
      <li>Метод интервальных повторений (SRS).</li>
      <li>Челленджи (например, «5 дней без русского»).</li>
      <li>Постановку целей (сдать IELTS, прочитать Гарри Поттера в оригинале).</li>
    </ul>
    
    <p>Главное в изучении английского — регулярность и разнообразие методов. Попробуйте разные способы, найдите то, что подходит именно вам, и ни в коем случае не бойтесь ошибок.</p>
    <blockquote>Как говорится: “Anyone who has never made a mistake has never tried anything new.” (Альберт Эйнштейн)</blockquote>
    <p>Успехов в обучении!</p>
  `,
}

export default function BlogPostPage() {
  return (
      <div className="bg-white text-slate-800 min-h-screen">
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

          <div className="container mx-auto px-4 py-12 sm:py-16">
            <div className="max-w-3xl mx-auto">
              <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Все статьи</span>
              </Link>

              <main>
                <article>
                  <header className="mb-8">
                    <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200 border-sky-200 text-sm font-medium">
                      {post.category}
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4 leading-tight">
                      {post.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-6">
                      <Avatar>
                        <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-900">{post.author}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center gap-1.5">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} просмотров</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>

                  <div className="relative w-full aspect-video my-8 sm:my-12 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                  </div>

                  <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
  )
}
