import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react"
import styles from "../article-styles.module.css"

const post = {
  id: 1,
  title: "Как эффективно подготовиться к ЕГЭ по математике",
  author: "Анастасия Панчева",
  authorImage: "/images/tutors/nastya.jpg",
  date: "15 июля 2025",
  readTime: "3 мин",
  views: 25,
  category: "ЕГЭ",
  image: "/images/blog/algebra.jpg",
  content: `
    <h2>Если ты в 10 классе — у тебя фора, используй её с умом</h2>
    <p>Сконцентрируйся на номерах первой части, которые решаются на базе школьной программы: 1, 2, 3 — Геометрия + векторы, все это проходится в школе. 4, 5 — Вероятности. 6, 7, 9, 10 — Задания на вычисления и задача. 11 - График функции. Задание, которое я при подготовке даю одним из первых. Один алгоритм на все случаи: гроб или не гроб - ты все равно решишь.</p>
    <p>Пока ещё не задают производную — не страшно. Но если в школе уже объяснили тему — можешь аккуратно лезть в: 8 и 12 задания. 8 связано с производной в графическом представлении. А 12 уже больше приближено к тому, что вы решали или будете решать на уроках алгебре, посвященных производной.</p>
    <h3>Из второй части в 10 классе реально начать с:</h3>
    <ul>
      <li><strong>13 - тригонометрия</strong> (она регулярна и понятна, главное — научиться шаблонам, выучить формулы и натренировать насмотренность на типы).</li>
      <li><strong>15 - неравенства.</strong> Спорная история. Либо вам дали логарифмы, поэтому ты здесь и сейчас готов(а) пользоваться их свойствами для решения, либо готов(а) разбираться с ними с нуля.</li>
      <li><strong>18 - параметры</strong> (начни с простых, где просто через дискриминант, просто через одз, не лезь в жесть).</li>
      <li><strong>19 - пункт А</strong> - почти везде решается на логику и примеры. Его решают даже те, кто думает, что "не умеет".</li>
    </ul>
    <blockquote>💡 <strong>Фокус:</strong> заточи первую часть до автомата + пара уверенных задач из второй. В идеале — 13, 18(А), 19(А). Это уже солидная база, дающая приличные баллы.</blockquote>
    
    <h2>Если ты в 11 классе - всё серьёзно, пора собирать баллы</h2>
    <p>Здесь без вариантов: первую часть ты должен решать на 12 из 12. Она вся шаблонная. Не надо быть математиком, нужно быть машиной. Каждый день — хотя бы по 3–5 заданий с таймером.</p>
    <h3>Дальше - джентльменский набор второй части:</h3>
    <ul>
        <li><strong>13 (тригонометрия)</strong> - по-любому. Это халява, если знаешь шаблоны. Сначала разбираешь по видео, смотришь решения, изучаешь подходы и варианты. Потом сам.</li>
        <li><strong>15 (неравенства)</strong> - в основном логарифмы и показательные. Смысла решать всякую жизнь на первых порах - бредовая идея.</li>
        <li><strong>16 (экономика)</strong> - Тут всё легко. Задачи делятся по платежам. Они либо аннуетиентные, либо дифференцированные. Каждый решает своим оформлением и способом. В экономических задачах это важно. Так что найди человека, у которого будешь смотреть разборы. Выбери онлайн-школу на открытой платформе с бесплатными видео для всех, либо решай все с репетитором. Однако! Не идёт — не трать время сразу, можно перейти на другие задания, когда твой мозг привыкнет к нагрузкам и постепенно станет более гибким, ты сможешь увереннее и проще подходить к решению экономических задач.</li>
    </ul>
    <p>👉 Геометрия из 16 и особенно 14 (стереометрия) - очень нестабильна. Её либо любишь, либо пропускаешь. Гораздо эффективнее вложиться в:</p>
    <ul>
        <li><strong>18 (параметры)</strong> - Про них я уже все сказала. Главное! Не лезь сразу в громоздкие. Твои мозги должны постепенно научиться анализировать. Сначала просто элементарщина по шаблону, потом уже что-то, где не получится решить "как всегда". Помним, что даже один балл с параметра — уже шик.</li>
        <li><strong>19 (пункт А)</strong> - почти все задачи начинаются с простого пункта. Если ты умеешь читать условия и использовать метод подбора, ты это решишь.</li>
    </ul>

    <h2>Реальный расклад по баллам:</h2>
    <p>Вот расчёт, если всё идёт по плану:</p>
    <ul>
      <li>Первая часть (1–12) - 12 баллов</li>
      <li>Задание 13 - 2 балла</li>
      <li>Задание 15 - 2 балла</li>
      <li>Задание 16 - 2 балла (если решаешь)</li>
      <li>Задание 18 (пункт А) - 1 балл</li>
      <li>Задание 19 (пункт А) - 1 балл</li>
    </ul>
    <p><strong>Итого: 86 баллов!</strong> Это абсолютно реально. И это уже высокий балл, которого хватает, если ты не метишь в МГУ или ВШЭ.</p>
    
    <h2>Как строить подготовку по задачам:</h2>
    <ul>
      <li><strong>1-12</strong> - доводи до автоматизма. Это баллы, которые нельзя терять.</li>
      <li><strong>13 и 15</strong> - пройди тригонометрию и логарифмы, показательные обычно более шаблонны, чаще даются проще.</li>
      <li><strong>16 и 14</strong> - если не любишь геометрию — пропускай. Решать минимум даже нет смысла. Ты либо задрот, либо смысла даже читать задание нет.</li>
      <li><strong>18 и 19</strong> - прорабатывай пункт А. Даже один балл с каждого - это хороший плюс к итогам.</li>
    </ul>

    <h2>Советы:</h2>
    <ul>
      <li>Готовься по структуре ЕГЭ. Забей на "общие темы", сразу работай по номерам.</li>
      <li>Первая часть должна быть идеальной. Если теряешь баллы — работай точечно по этим задачам.</li>
      <li>Вторая часть — бери только то, что приносит максимум за минимум (13, 15, 18(А), 19(А)).</li>
      <li>Никакой геометрии в 2-й части, она правда наименее решаема из всего. Но я не перечеркиваю эти задания! Просто если тебе не кайф, то нет ничего такого в том, чтобы решать то, что дается проще и логичнее.</li>
      <li>Начинай сегодня, сейчас. Хотя бы посмотреть видосик! Уже какое-то вложение. Потому что те, кто "еле-еле начну с сентября", обычно потом жалеют.</li>
    </ul>

    <h2>Заключение</h2>
    <p>Математика — не про «талант». Это про системность и упорство. Не надо умирать на учебниках, надо работать по шаблонам, понимать, что реально дают на ЕГЭ, и решать по делу. Весь профиль — это не олимпиада. Ты просто играешь по правилам. И выигрываешь.</p>
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
