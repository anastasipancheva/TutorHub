import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react'
import styles from "../article-styles.module.css"

const post = {
  id: 4,
  title: "Золотая медаль или ЕГЭ?",
  author: "Анастасия Панчева",
  authorImage: "/images/tutors/nastya.png",
  date: "7 июня 2025",
  readTime: "4 мин",
  views: 27,
  category: "Школа",
  image: "/images/blog/medal-vs-exam.png",
  content: `
    <h2>Что такое "золотая медаль" сегодня?</h2>
    <p>Медаль "За особые успехи в учении" — это престижная награда, которая выдается выпускникам, имеющим итоговые оценки "отлично" по всем предметам.</p>
    
    <h2>Реальные бонусы от медали</h2>
    <p>В большинстве вузов вы получаете за медаль доп баллы - от 3 до 10 к сумме своего ЕГЭ. Кажется, что это немного, но в борьбе за бюджетное место каждый балл может стать решающим. Мне нужна была медаль не для баллов, а для личного удовлетворения. Я закончила 9 класс с красным аттестатом, а в моей ситуации получить медаль было несложно, так что для радости и красного набора..)</p>
    
    <h2>Цена медали</h2>
    <p>Погоня за пятерками по всем предметам, включая те, которые не нужны для поступления, отнимает огромное количество времени и сил. Это время можно было бы потратить на углубленную подготовку к профильным ЕГЭ, олимпиадам или просто на отдых, который так важен в 11 классе. Однако ваша ситуация и отношение учителей в школе может давать возможность списать ненужные предметы или тратить на это не так много времени.</p>

    <h3>Стратегия №1: Фокус на ЕГЭ</h3>
    <p>Если вы поступаете в топовый вуз на конкурентное направление, где решают баллы 90+, то каждый час, потраченный на подготовку к профильному предмету, ценнее, чем пятерка по физкультуре или ОБЖ. В этом случае разумнее сконцентрироваться на 3-4 предметах ЕГЭ и не распыляться.</p>

    <h3>Стратегия №2: Баланс и медаль</h3>
    <p>Если у вас хорошая успеваемость по всем предметам и для поступления в выбранный вуз важен каждый дополнительный балл, то побороться за медаль имеет смысл. Это также хороший вариант в случае, если вы поступаете по олимпиаде.</p>

    <h3>Стратегия №3: Чисто медаль</h3>
    <p>Это была моя стратегия. Ну все же я готовилась к ЕГЭ, достаточно хорошо и плодотворно, однако я стала призером перечня еще в 10 классе, и тогда же подтвердила этот результат, сдав русский экстерном. Поэтому для меня ЕГЭ не решал в 11 классе ничего, а медаль, как уже упоминала, я хотела просто ДЛЯ СЕБЯ. Да, такое возможно. Даже сейчас в ВУЗе некоторые удивляются, что я хочу получить пятерку по предмету, который ни на что не влияет, хоть и у меня уже точено не будет красного диплома, зачем?? Просто хочу.)</p>

    <h2>Как найти свой путь?</h2>
    <ul>
      <li><strong>Узнайте правила приема в ваших вузах.</strong> Зайдите на сайты приемных комиссий и посмотрите, сколько баллов дают за медаль в вузах, куда вы планируете поступать. Это не будет чем-то неожданным, но в цифрах понимать, ради чего стоит стараться, хочется.</li>
      <li><strong>Оцените свои силы,</strong> тут, наверное, больше акцент даже на то, будет ли это легко в рамках вашх условий в школе. Немало примеров, где медаль будет нужна не только вам, но и самой школе, в таком случае имеет смысл рассмотреть при любой ситуации и загруженности, ведь всем педагогам понятно, что в 11 классе голова болит в первую очередь из-за ЕГЭ, а не из-за физкультуры или непроф предмета. Однако важно задать себе вопросы: Будет ли у вас хватать времени на все? Не приведет ли погоня за медалью к выгоранию и снижению результатов по ЕГЭ?</li>
      <li><strong>Расставьте приоритеты.</strong> Что для вас важнее: престижная награда и несколько дополнительных баллов или максимальная концентрация на главном экзамене? Но помним, все зависит от ситуации.</li>
    </ul>

    <h2>Заключение</h2>
    <p>Единого ответа на вопрос "медаль или ЕГЭ?" нет. Это личный выбор, который зависит от ваших целей, амбиций и ресурсов. Главное — принять осознанное решение и следовать ему, не оглядываясь на других.</p>
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
