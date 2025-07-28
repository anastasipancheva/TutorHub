import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, BookOpen, ArrowRight, Award, MapPin, Briefcase, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const tutors = [
  {
    id: 1,
    name: "Панчева Анастасия",
    subject: "Математика, русский язык",
    university: "ТГУ, Высшая IT школа",
    rating: 4.9,
    students: 110,
    price: 990,
    achievement: "ЕГЭ экстерном в 10 классе",
    image: "/images/tutors/nastya.jpg",
    badge: "ТОП",
    location: "Томск",
    groupPrice: 700,
    groupSize: 3,
  },
  {
    id: 2,
    name: "Серёдкина Ксения",
    subject: "Английский язык",
    university: "ИГУ",
    rating: 4.8,
    students: 47,
    price: 700,
    achievement: "Преподает в школе с 17 лет",
    image: "/images/tutors/ksumain.png",
    badge: "ИГУ",
    location: "Иркутск",
    groupPrice: 500,
    groupSize: 3,
  },
  {
    id: 3,
    name: "Ларгина Анастасия",
    subject: "Химия",
    university: "РНИМУ им. Н.И.Пирогова, Педиатрия",
    rating: 4.9,
    students: 4,
    price: 2000,
    achievement: "ЕГЭ 99 баллов",
    image: "/images/tutors/ximia.jpg",
    badge: "Пирогова",
    location: "Москва",
  },
  {
    id: 4,
    name: "Маштакова Рина",
    subject: "Английский язык",
    university: "Академия Алексия Зарубежная филология",
    rating: 4.9,
    students: 27,
    price: 1000,
    achievement: "Уровень английского С1",
    image: "/images/tutors/rina.jpg",
    badge: "Английский",
    location: "Тольятти",
  },
  {
    id: 5,
    name: "Новикова Ксения",
    subject: "Английский язык",
    university: "ТГУ, ФИЯ",
    rating: 4.85,
    students: 15,
    price: 800,
    achievement: "Сдала оксфордский тест на В2-С1",
    image: "/images/tutors/ford.jpg",
    badge: "ТГУ",
    location: "Томск",
  },
  {
    id: 6,
    name: "Суркова Екатерина",
    subject: "Биология",
    university: "РНИМУ им. Н.И.Пирогова",
    rating: 5.0,
    students: 4,
    price: 1500,
    achievement: "Закрыла сессию по химбио на отлично",
    image: "/images/tutors/bio.jpg",
    badge: "Пирогова",
    location: "Москва",
    groupPrice: 1200,
    groupSize: 3,
  },
  {
    id: 7,
    name: "Багдасарян Акоб",
    subject: "Информатика",
    university: "ВШЭ",
    rating: 5.0,
    students: 11,
    price: 1390,
    achievement: "ЕГЭ 99 баллов",
    image: "/images/tutors/akob.jpg",
    badge: "ВШЭ",
    location: "Москва",
  },
  {
    id: 8,
    name: "Полина Михайлюк",
    subject: "Физика",
    university: "-",
    rating: 4.9,
    students: 20,
    price: 700,
    achievement: "Преподаватель в 17",
    image: "/images/tutors/polina.jpg",
    badge: "Молодой преподаватель",
    location: "Краснодар",
  },
  {
    id: 9,
    name: "Червонная Ульяна",
    subject: "Обществознание",
    university: "-",
    rating: 5.0,
    students: 5,
    price: 700,
    achievement: "Олимпиадница",
    image: "/images/tutors/yl.jpg",
    badge: "Поступление БВИ",
    location: "Томск",
  },
]

const courses = [
  {
    id: 1,
    title: "Все секреты успешного сочинения ЕГЭ",
    description: "Разбираем ошибки, смотрим сочинения на максимальный балл + в подарок готовое клише для сочинения",
    price: 1500,
    lessons: "3 урока",
    category: "ЕГЭ",
    image: "/images/coorses/1.jpg",
    instructor: "Анастасия Панчева",
  },
  {
    id: 2,
    title: "Разбор всех утверждений из 19 задания ОГЭ математика",
    description: "Подготовка к заданию в ОГЭ, направленному на использование теоритических знаний",
    price: 1000,
    lessons: "2 урока",
    category: "ОГЭ",
    image: "/images/coorses/2.jpg",
    instructor: "Анастасия Панчева",
  },
  {
    id: 3,
    title: "Полная подготовка к 16 заданию в ЕГЭ по профильной математике",
    description: "Самые понятные структуры составления математической модели с пошаговым решением",
    price: 1500,
    lessons: "10 уроков",
    category: "ЕГЭ",
    image: "/images/coorses/3.png",
    instructor: "Анастасия Панчева",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "Как эффективно подготовиться к ЕГЭ по математике",
    category: "ЕГЭ",
    image: "/images/blog/algebra.jpg",
    slug: "1",
  },
  {
    id: 2,
    title: "Все о сдаче ЕГЭ в 10 классе",
    category: "Русский язык",
    image: "/images/blog/10kl.jpg",
    slug: "2",
  },
  {
    id: 3,
    title: "ОГЭ по математике: 2 заветных балла по геометрии",
    category: "Математика",
    image: "/images/blog/sonik.jpg",
    slug: "3",
  },
]

export default function HomePage() {
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
              <Link href="/courses" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Курсы
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Блог
              </Link>
              <Link href="/career" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Карьера
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-blue-pastel py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-brand-blue-bright">
                Твой личный репетитор уже здесь
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-brand-blue-bright/80">
                Найди своего идеального преподавателя для подготовки к экзаменам и олимпиадам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                  <Award className="w-5 h-5 text-brand-blue-steel" />
                  <span className="font-semibold">100% сданных экзаменов</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                  <Users className="w-5 h-5 text-brand-blue-steel" />
                  <span className="font-semibold">100% довольных учеников</span>
                </div>
              </div>
              <Link href="/tutors">
                <Button
                    size="lg"
                    className="bg-brand-pink-bright hover:bg-brand-pink-pastel text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Найти репетитора <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                Наши <span className="text-brand-pink-bright">опытные</span> репетиторы
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Каждый преподаватель работает индивидуально с учениками, создавая персональную программу обучения
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tutors.map((tutor) => (
                  <Card
                      key={tutor.id}
                      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm border-0 overflow-hidden rounded-2xl h-full flex flex-col"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-brand-pink-pastel shadow-lg">
                          <Image
                              src={tutor.image || "/placeholder.svg?height=96&width=96"}
                              alt={tutor.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="absolute -top-2 -right-2 bg-brand-pink-bright text-white border-0 font-bold">
                          {tutor.badge}
                        </Badge>
                      </div>

                      <div className="text-center flex-grow flex flex-col">
                        <h3 className="font-bold text-lg mb-1">{tutor.name}</h3>
                        <p className="text-brand-blue-bright font-semibold mb-2">{tutor.subject}</p>
                        <p className="text-sm text-gray-600 mb-3 flex-grow">{tutor.university}</p>

                        <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold">{tutor.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{tutor.students}+</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{tutor.location}</span>
                          </div>
                        </div>

                        <div className="bg-brand-blue-pastel/50 text-brand-blue-bright text-sm py-2 px-4 rounded-full mb-4 font-medium min-h-[2.5rem] flex items-center justify-center">
                          {tutor.achievement}
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <div className="text-2xl font-bold text-brand-blue-bright">
                              {tutor.price.toLocaleString()} ₽
                              <span className="text-sm text-gray-500 font-normal">/час</span>
                            </div>
                            {tutor.groupPrice && tutor.groupSize && (
                                <Badge
                                    variant="outline"
                                    className="text-xs bg-green-50 text-green-700 border-green-200 whitespace-nowrap"
                                >
                                  {tutor.groupPrice} ₽ группа
                                </Badge>
                            )}
                          </div>
                        </div>

                        <Link href={`/tutor/${tutor.id}`} className="mt-auto">
                          <Button className="w-full bg-brand-blue-bright hover:bg-brand-blue-steel text-white">
                            Подробнее
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/tutors">
                <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-brand-pink-bright text-brand-pink-bright hover:bg-brand-pink-bright hover:text-white rounded-full bg-transparent"
                >
                  Посмотреть всех репетиторов
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-brand-blue-steel/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Популярные <span className="text-brand-blue-bright">курсы</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Готовые программы обучения от наших лучших преподавателей для эффективной подготовки к экзаменам
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                  <Card
                      key={course.id}
                      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden rounded-2xl"
                  >
                    <div className="relative">
                      <div className="w-full video overflow-hidden">
                        <Image
                            src={course.image || "/placeholder.svg?height=400&width=400"}
                            alt={course.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <Badge className="absolute top-3 left-3 bg-brand-pink-bright text-white">{course.category}</Badge>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2 text-brand-blue-bright line-clamp-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      {course.lessons}
                    </span>
                      </div>
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-brand-blue-bright">{course.price.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button className="bg-brand-pink-bright hover:bg-brand-pink-pastel text-white">Купить</Button>
                        <Link href={`/course/${course.id}`}>
                          <Button
                              variant="outline"
                              className="w-full border-brand-blue-bright text-brand-blue-bright hover:bg-brand-blue-bright hover:text-white bg-transparent"
                          >
                            Узнать подробнее
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/courses">
                <Button size="lg" className="bg-brand-blue-bright hover:bg-brand-blue-steel text-white rounded-full">
                  Все курсы
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Загляни в наш <span className="text-brand-blue-bright">полезный блог</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Лайфхаки по подготовке к экзаменам, разборы сложных тем и советы от экспертов.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                  <Card
                      key={post.id}
                      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden rounded-2xl"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative">
                        <Image
                            src={post.image || "/placeholder.svg?height=200&width=300"}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <Badge className="absolute top-3 left-3 bg-brand-pink-pastel text-brand-pink-bright">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 text-brand-blue-bright">{post.title}</h3>
                      </CardContent>
                    </Link>
                  </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button size="lg" className="bg-brand-pink-bright hover:bg-brand-pink-pastel text-white rounded-full">
                  Все статьи
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-20 bg-brand-blue-steel/10">
          <div className="container mx-auto px-4">
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-shadow flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-brand-blue-pastel rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-12 h-12 text-brand-blue-bright" />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-4 text-brand-blue-bright">Стань частью команды</h3>
                <p className="text-gray-600 mb-6">
                  Мы ищем талантливых и увлеченных преподавателей. Если ты хочешь делиться знаниями и менять мир к лучшему
                  — тебе к нам!
                </p>
              </div>
              <Link href="/career" className="md:ml-auto flex-shrink-0">
                <Button size="lg" className="bg-brand-blue-bright hover:bg-brand-blue-steel text-white rounded-full">
                  Присоединиться
                </Button>
              </Link>
            </div>
          </div>
        </section>

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
                <p className="text-gray-400">Ассоциация лучших репетиторов для индивидуального обучения</p>
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
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      О нас
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
