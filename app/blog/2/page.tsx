import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react"
import styles from "../article-styles.module.css"

const post = {
  id: 2,
  title: "Все о сдаче ЕГЭ в 10 классе",
  author: "Анастасия Панчева",
  authorImage: "/images/tutors/nastya.jpg",
  date: "14 июня 2025",
  readTime: "2 мин",
  views: 45,
  category: "Русский язык",
  image: "/images/blog/10kl.jpg",
  content: `
    <h2>Можно ли сдавать ЕГЭ в 10 классе?</h2>
    <p>Да, можно! Согласно официальному порядку проведения ГИА, выпускники прошлых лет, а также обучающиеся по образовательным программам среднего профессионального образования, имеют право сдавать ЕГЭ. Ученики 10 классов могут быть допущены к экзамену при условии, что они завершили изучение соответствующего предмета.</p>
    <blockquote>Если простым языком: Подходишь сразу же, как только надумал(а) к классному учителю/к предметнику и говоришь, что тебе надо будет в конце 10 класса написать еще и аттестацию за 11, потому что ты хочешь сдать ЕГЭ в 10 классе. Тебе нужно будет весь этот год вовевать на присуствие на пробниках, и САМОЕ ВАЖНОЕ!!!!!! Тебе нужно будет до февраля вместе с 11 классом заполнить бумажку, благодаря которой тебя пустят на ЕГЭ, потому что ты будешь записан(а) на него.</blockquote>
    
    <h2>🤔 Какие предметы можно сдать?</h2>
    <p>Сдать экстерном можно только базовую математику, географию и русский язык. Почему именно эти? Это все связано с тем, как устроена школьная программа. Если по русскому ты весь 10-11 просто повторяешь то, что было до этого, по базовой математике быстренько проходите логарифмы - и в путь, в дорогу, то по истории, химии и тд вы два года изучаете новую программу.</p>
    
    <h2>Плюсы сдачи ЕГЭ в 10 классе</h2>
    <ul>
      <li><strong>Снижение нагрузки в 11 классе.</strong> Это главное и основное. Особенно гуманитариям актуально сдать базу + русский. Не припомню, чтобы гуманитарные предметы сдавались без слез. Поэтому хорошим шагом будет выбить себе весь 11 класс чисто на общага + история/английский или что ты там хочешь сдавать:)</li>
      <li><strong>Психологическая подготовка.</strong> Это тоже хороший плюс. Хоть и главный аргумент в сторону "НЕЕЕТ" от всех, кто боится. "Настя, мне страшно идти в 10 сдавать, я лучше в 11 схожу". РЕАЛЬНО?) А что поменяется в 11? У тебя произойдет трансформация души и тела, поэтому ты резко станешь бесстрашным героем, у которого не будут трястись руки во время заполнения первого бланка? Да нет конечно. Страшно будет и через год. Только вот если ты побоишься сейчас, то потом придется бояться меньше! Гениально ведь.</li>
      <li><strong>Возможность пересдачи.</strong> Хоть о таком и не совсем правильно говорить, но да, вас может не устроить полученный результат, поэтому вы в 11 классе, вместе со всеми, кто пойдет на пересдачу в июле.</li>
      <li><strong>Понт!</strong> Боже, как я могу об этом не сказать. Говорить, что ты сдал(а) ЕГЭ экстерном.. Это круто) Больше тут говорить особо нечего.</li>
    </ul>

    <h2>Минусы и риски</h2>
    <ul>
      <li><strong>Недостаточная зрелость.</strong> В 10 классе может не хватать психологической устойчивости и мотивации для серьезной подготовки. Это частая проблема, но решается тут все простой отвественностью и моральной подготовкой.</li>
      <li><strong>Пробелы в знаниях.</strong> Некоторые темы могут быть пройдены поверхностно. Придется много наверстывать самостоятельно. Но через это проходят все, поэтому я бы даже не отнесла это к минусам, скорее естественная норма.</li>
      <li><strong>Сложность совмещения.</strong> Подготовка к ЕГЭ будет идти параллельно с текущей школьной программой, и в 10 классе никто к ЕГЭ особо не готовится, поэтому учителя скидок не делают. Но это всё тоже индивидуально.</li>
    </ul>

    <h2>Как это сделать: пошаговая инструкция</h2>
    <ul>
      <li><strong>Завершите учебный план.</strong> Необходимо получить итоговую оценку по предмету, который вы собираетесь сдавать. Для этого нужно перейти на индивидуальный учебный план (в каких-то школах это будет полноценное изменение твоей школьной жизни, а где-то ты просто в конце года напишешь две аттестации - так было у меня).</li>
      <li><strong>Напишите заявление.</strong> Та самая февральская бумажка! До 1.02 нужно подать заявление в вашей школе на участие в ЕГЭ с указанием выбранного предмета.</li>
      <li><strong>Получите допуск.</strong> Педагогический совет школы должен принять решение о вашем допуске к экзамену, не думаю, что с эти будут проблемы.</li>
      <li><strong>Готовьтесь!</strong> У вас будет достаточное количество времени на интенсивную подготовку. Обещаю, вы скажете себе спасибо.</li>
    </ul>

    <h2>Важная информация!</h2>
    <p>Сдача итогового/декабрьского сочинения не предусмотрена экстерном. Вы будете писать его в 11 классе. Это не проблема. Так писала я, так писали все, кто сдавал сам ЕГЭ раньше, чем допуск к нему)))</p>

    <h2>Заключение</h2>
    <p>Сдача ЕГЭ в 10 классе — это интересный и рабочий вариант для мотивированных и организованных учеников. Это может стать вашим стратегическим преимуществом, но требует серьезной оценки своих сил и готовности много работать. Я смогла - вы тоже сможете, я в вас верю!</p>
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
