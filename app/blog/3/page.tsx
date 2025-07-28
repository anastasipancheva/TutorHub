import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react"
import styles from "../article-styles.module.css"

const post = {
  id: 3,
  title: "ОГЭ по математике: 2 заветных балла по геометрии",
  author: "Анастасия Панчева",
  authorImage: "/images/tutors/nastya.jpg",
  date: "25 июля 2025",
  readTime: "3 мин",
  views: 14,
  category: "Математика",
  image: "/images/blog/sonik.jpg",
  content: `
    <h2>Почему геометрия на ОГЭ так важна?</h2>
    <p>Для получения оценки "3" и выше на ОГЭ по математике необходимо набрать минимум 8 баллов, из которых не менее 2 баллов должны быть получены за выполнение заданий по геометрии. Это задания с 15 по 19 в первой части. Даже если вы идеально решите всю алгебру, но не наберете эти 2 балла, экзамен будет не сдан. Давайте разберемся, как их гарантированно получить.</p>
    
    <h2>Задание 15: Треугольники, четырехугольники, их элементы</h2>
    <p>Это хоть и первое, но, как по мне, не самое простое. Может повезти - задание будет легкое, а может не очень. Здесь проверяются знания по всем основным фигурам: свойства треугольников, признаки параллелограмма и тд. Знаете вы хорошо теорию или нет - все делается нарешиванием. Без него никак не получится. Открываем сайт решу огэ -> заходим на каждый прототип нужного задания и решаем, запоминая, что и в каких случаях нужно делать.</p>
    <blockquote><strong>Совет:</strong> Выучите основные свойства фигур и держите их в голове. Большинство задач решаются в одно-два действия.</blockquote>

    <h2>Задание 16: Окружности</h2>
    <p>Окружности пугают многих, но в ОГЭ задачи на них довольно типовые. Что нужно знать:</p>
    <ul>
      <li>Центральные и вписанные углы. Вписанный угол равен половине дуги, на которую он опирается. А центральный ровно такой же, как и та дуга, на которую он опирается.</li>
      <li>Касательная к окружности перпендикулярна радиусу, проведенному в точку касания. Это важное свойство, однако почему-то мало кто помнит про него.</li>
      <li>Хорда, диаметр, радиус..)</li>
      <li>Длина окружности (2πR) и площадь круга (πR²).</li>
    </ul>
    <blockquote><strong>Совет:</strong> 16 задание достаточно приятное. Его несложно научиться решать с большим процентов верных ответов. Закрепляя постоянно, нарешивая еще и еще, вы обеспечиваете уверенность себе на ОГЭ.</blockquote>

    <h2>Задание 17: Площади фигур</h2>
    <p>Здесь нужно просто знать формулы. Большинство заданий достаточно примиттивны, однако, безусловно, есть те, которые не решаются япо-туому, поэтому придется сделать пару действий до заветного "просто подставляем в формлу".</p>
    <ul>
      <li>Площадь треугольника: S = ½ * a * h</li>
      <li>Площадь параллелограмма: S = a * h</li>
      <li>Площадь трапеции: S = ½ * (a + b) * h</li>
      <li>Площадь ромба: S = ½ * d₁ * d₂</li>
    </ul>
    <p>Но все эти формулы уже есть у вас в справочном материале. Однако обратите внимание на то, как считается площадь прямоугольного треугольника, её в справочнике нет.</p>
    <ul>
      <li>Площадь прямоугольного треугольника: S = ½ * катет * катет</li>
    </ul>
    <blockquote><strong>Совет:</strong> В геометрии не все задачи решаются моментально, поэтому требуется сначала сделать пару действий, а потом уже подставить в формулу. Если вы не понимаете, как к ней прийти, попробуйте найти всё, что найдется, и преобразовать все, что преобразуется.</blockquote>

    <h2>Задание 18: Задачи на клетчатой решетке</h2>
    <p>Самые "халявные" баллы. Здесь не нужно сложных вычислений. И ВООБЩЕ ВСЕ ЗАДАНИЯ ОЧЕНЬ ЛЕГКИЕ.</p>
    <ul>
      <li>Найти расстояние от точки до прямой: просто посчитайте клетки...????? Это халява.</li>
      <li>Найти длину средней линии трапеции/треугольника: посчитайте клетки верхнего и нижнего основания (или только нижнего, если у вас треугольник), сложите и поделите на 2. Эти формулы есть в справочном материале</li>
      <li>Найти тангенс угла: достройте прямоугольный треугольник и поделите противолежащий катет на прилежащий (опять же, по клеткам, опять же, формулы в справочнике).</li>
    </ul>

    <h2>Задание 19: Верные и неверные утверждения</h2>
    <p>Это задание проверяет ваше теоретическое знание геометрии. Я рекомендую сначала научиться решать его, так как таким образом вы закроете пробелы в теории. На решу огэ представлены 50 прототипов заданий. Решите все = решите и на огэ. Вам дается 3 утверждения, и нужно выбрать верные.</p>
    <blockquote><strong>Совет:</strong> Внимательно читайте каждое слово. Часто ловушка кроется в деталях. Например, "Любой прямоугольник является ромбом" (неверно) и "Любой квадрат является ромбом" (верно). Прогоните по всем основным свойствам фигур, которые вы учили. Ну и, конечно, читайте задание) Выберите вернЫЕ утвердженИЯ -> два верных, одно - ложь. И наоборот)</blockquote>

    <h2>Заключение</h2>
    <p>Получить 2 балла по геометрии — абсолютно реальная задача. Сконцентрируйтесь на заданиях 18 и 19, а дальше и 16. Они требуют меньше всего вычислений. Затем подтяните формулы площадей (задание 17) и базовые свойства всех фигур (задание 15). Удачи!</p>
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
