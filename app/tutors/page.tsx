"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Users, BookOpen, MapPin, Search, Filter, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const getTutorWordForm = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "репетитор"
  } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return "репетитора"
  } else {
    return "репетиторов"
  }
}

const tutors = [
  {
    id: 1,
    name: "Панчева Анастасия",
    subject: "Математика, русский язык",
    university: "ТГУ, Высшая IT школа",
    rating: 5.0,
    students: 110,
    price: 990,
    achievement: "ЕГЭ экстерном в 10 классе",
    image: "/images/tutors/nastya.jpg",
    badge: "ТОП",
    location: "Томск",
    reviews: 85,
    online: true,
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
    reviews: 32,
    online: false,
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
    reviews: 3,
    online: false,
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
    reviews: 18,
    online: false,
  },
  {
    id: 5,
    name: "Новикова Ксения",
    subject: "Английский язык",
    university: "ТГУ, ФИЯ",
    rating: 4.85,
    students: 15,
    price: 800,
    achievement: "ОГЭ - 800₽, успеваемость - 650₽",
    image: "/images/tutors/ford.jpg",
    badge: "Уровень английского B2-C1",
    groupPrice: 700,
    groupSize: 3,
    location: "Томск",
    reviews: 12,
    online: false,
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
    reviews: 4,
    online: false,
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
    reviews: 9,
    online: false,
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
    reviews: 15,
    online: false,
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
    reviews: 5,
    online: false,
  },
  {
    id: 10,
    name: "Григорьева София",
    subject: "Французский язык",
    university: "-",
    rating: 4.9,
    students: 40,
    price: 900,
    achievement: "Сертифицированный уровень B2",
    image: "/images/tutors/sofi.jpg",
    badge: "Сертифицированный уровень B2",
    location: "Москва",
    online: false,

  },
]

const subjects = [
  "Все предметы",
  "Математика",
  "Русский язык",
  "Физика",
  "Химия",
  "Английский язык",
  "Информатика",
  "Биология",
  "Обществознание",
]

const cities = ["Все города", "Москва", "Томск", "Тольятти", "Краснодар", "Иркутск"]

const priceRanges = ["Любая цена", "До 1000 ₽", "1000-1500 ₽", "1500-2000 ₽", "От 2000 ₽"]

export default function TutorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("Все предметы")
  const [selectedCity, setSelectedCity] = useState("Все города")
  const [selectedPriceRange, setSelectedPriceRange] = useState("Любая цена")
  const [sortBy, setSortBy] = useState("rating")

  const filteredAndSortedTutors = useMemo(() => {
    const filtered = tutors.filter((tutor) => {
      // Search filter
      const matchesSearch =
          searchQuery === "" ||
          tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutor.university.toLowerCase().includes(searchQuery.toLowerCase())

      // Subject filter
      const matchesSubject =
          selectedSubject === "Все предметы" || tutor.subject.toLowerCase().includes(selectedSubject.toLowerCase())

      // City filter
      const matchesCity = selectedCity === "Все города" || tutor.location === selectedCity

      // Price filter
      const matchesPrice = (() => {
        switch (selectedPriceRange) {
          case "До 1000 ₽":
            return tutor.price < 1000
          case "1000-1500 ₽":
            return tutor.price >= 1000 && tutor.price <= 1500
          case "1500-2000 ₽":
            return tutor.price >= 1500 && tutor.price <= 2000
          case "От 2000 ₽":
            return tutor.price > 2000
          default:
            return true
        }
      })()

      return matchesSearch && matchesSubject && matchesCity && matchesPrice
    })

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "experience":
          return b.students - a.students
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedSubject, selectedCity, selectedPriceRange, sortBy])

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
              <Link href="/" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Главная
              </Link>
              <Link href="/tutors" className="text-brand-pink-bright font-semibold">
                Репетиторы
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                Курсы
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                О нас
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-blue-pastel py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-blue-bright">
              Найди своего
              <span className="block text-brand-pink-bright">персонального</span>
              репетитора
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-blue-bright/80 max-w-3xl mx-auto">
              Более 10+ опытных преподавателей готовы работать с тобой индивидуально
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    placeholder="Поиск репетиторов..."
                    className="pl-10 bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/70 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-white text-brand-blue-bright hover:bg-gray-100 h-12 px-8">
                <Filter className="w-5 h-5 mr-2" />
                Фильтры
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 средний рейтинг</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                <Users className="w-5 h-5" />
                <span className="font-semibold">500+ довольных учеников</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Предмет" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Город" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Цена" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedSubject("Все предметы")
                    setSelectedCity("Все города")
                    setSelectedPriceRange("Любая цена")
                  }}
              >
                Сбросить фильтры
              </Button>
            </div>
          </div>
        </section>

        {/* Tutors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                Найдено <span className="text-brand-pink-bright">{filteredAndSortedTutors.length}</span>{" "}
                {getTutorWordForm(filteredAndSortedTutors.length)}
              </h2>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="price-low">Сначала дешевые</SelectItem>
                  <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  <SelectItem value="experience">По опыту</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTutors.map((tutor) => (
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
                        <Button
                            variant="outline"
                            size="sm"
                            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0 bg-white hover:bg-pink-50 hover:border-pink-300"
                        >
                          <Heart className="w-4 h-4 text-gray-400 hover:text-brand-pink-bright" />
                        </Button>
                        {tutor.online && (
                            <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>

                      <div className="text-center flex-grow flex flex-col">
                        <h3 className="font-bold text-lg mb-1">{tutor.name}</h3>
                        <p className="text-brand-blue-bright font-semibold mb-1">{tutor.subject}</p>
                        <p className="text-sm text-gray-600 mb-3 flex-grow">{tutor.university}</p>

                        <div className="flex items-center justify-center space-x-4 mb-3 text-gray-500 text-sm">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold">{tutor.rating}</span>
                            <span className="text-xs">({tutor.reviews})</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{tutor.students}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-center space-x-2 mb-3">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{tutor.location}</span>
                          {tutor.online && (
                              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                Онлайн
                              </Badge>
                          )}
                        </div>

                        <div className="bg-brand-blue-pastel/50 text-brand-blue-bright text-sm py-2 px-4 rounded-full mb-4 min-h-[2.5rem] flex items-center justify-center">
                          {tutor.achievement}
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <div className="text-2xl font-bold text-brand-blue-bright">
                              {tutor.price.toLocaleString()} ₽
                              <span className="text-sm text-gray-500 font-normal">/урок</span>
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

                        <div className="flex space-x-2 mt-auto">
                          <Link href={`/tutor/${tutor.id}`} className="flex-1">
                            <Button className="w-full bg-brand-blue-bright hover:bg-brand-blue-steel text-white">
                              Подробнее
                            </Button>
                          </Link>
                          <Button variant="outline" className="px-3 bg-transparent">
                            💬
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm border-2 border-brand-pink-bright text-brand-pink-bright hover:bg-brand-pink-bright hover:text-white rounded-full"
              >
                Загрузить еще репетиторов
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-brand-blue-bright rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">TutorHub</span>
                </div>
                <p className="text-gray-400">Лучшая платформа для поиска репетиторов и онлайн-обучения</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Компания</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Карьера
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Блог
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Поддержка</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Помощь
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Политика
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Условия
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 TutorHub. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}
