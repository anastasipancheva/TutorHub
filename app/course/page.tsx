"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Play, Users, Star, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const programs = [
    {
        id: 1,
        title: "Все секреты успешного сочинения ЕГЭ",
        description:
            "Разбираем ошибки, смотрим сочинения на максимальный балл + в подарок готовое клише для сочинения и 4 экспертные проверки в течение года",
        price: 1500,
        category: "ЕГЭ",
        image: "/images/coorses/1.jpg",
        instructor: "Анастасия Панчева",
        features: ["Универсальный план", "Домашние задания", "Проверка сочинения с подробным разбором", "Постоянная связь"],
        buyLink: "https://t.me/anastasipancheva",
    },
    {
        id: 2,
        title: "Разбор всех утверждений из 19 задания ОГЭ математика",
        description:
            "Подготовка к заданию в ОГЭ, направленному на использование теоритических знаний: какую информацию вы сможете найти в справочнике, что очевидно, а что - нет, где могут встретиться ловушки, что стоит зазубрить и многое другое.",
        price: 1000,
        category: "ОГЭ",
        image: "/images/coorses/2.jpg",
        instructor: "Анастасия Панчева",
        features: ["Понятные занятия", "Разбор ошибок", "Поддержка 24/7", "100% результат"],
        buyLink: "https://t.me/anastasipancheva",
    },
    {
        id: 3,
        title: "Сочинение + изложение в ОГЭ по русскому",
        description:
            "Освой два главных задания для ОГЭ и набери максимальный балл. + Проверка от эксперта на 2 сочинения и 2 изложения",
        price: 1200,
        category: "ОГЭ",
        image: "/images/coorses/3.png",
        instructor: "Анастасия Панчева",
        features: ["100% результат", "Разбор ошибок", "Экспертная проверка", "Четкий план"],
        buyLink: "https://t.me/anastasipancheva",
    },
    {
        id: 4,
        title: "Полная подготовка к 16 заданию в ЕГЭ по профильной математике",
        description:
            "Самые понятные структуры составления математической модели с пошаговым решением и планом действий в зависимости от условий задачи",
        price: 1500,
        category: "ЕГЭ",
        image: "/images/coorses/4.png",
        instructor: "Анастасия Панчева",
        features: [
            "Авторские материалы",
            "Сложные задачи",
            "Видеоразборы",
            "Связь 24/7",
            "План решения строго по критериям",
        ],
        buyLink: "https://t.me/anastasipancheva",
    },
    {
        id: 5,
        title:
            "Как успешно сдать ОГЭ по математике: базовый набор номеров, которого хватит на троечку, даже если надежда уже покидает тебя",
        description:
            "Универсальная программа для пошагового достижения заветной сдачи экзамена: разбор именно тех легких номеров, которых будет достаточно, чтобы получить тройку! + Лайфхаки для их выполнения",
        price: 2000,
        category: "ОГЭ",
        image: "/images/coorses/5.png",
        instructor: "Анастасия Панчева",
        features: [
            "Базовый минимум",
            "Объяснение на пальцах",
            "Практические советы, которые работают на всех",
            "Педагог с большим опытом подготовки с нуля",
        ],
        buyLink: "https://t.me/anastasipancheva",
    },
    {
        id: 6,
        title: "Базовый набор ОГЭ по математике на уверенную 4",
        description:
            "Универсальная программа для подготовки на 4 по пути наименьшего сопротивления. Разбор самых понятных и очевидных заданий для набора 15+ баллов",
        price: 2200,
        category: "ОГЭ",
        image: "/images/coorses/6.png",
        instructor: "Анастасия Панчева",
        features: [
            "Объяснение на пальцах",
            "Разбор алгоритмов",
            "Пошаговая инструкция",
            "Подготовка к хорошему результату",
        ],
        buyLink: "https://t.me/anastasipancheva",
    },
    {
        id: 7,
        title: "Самый понятный разбор ВСЕХ времен английского языка БЕЗ ВОДЫ",
        description: "Полный разбор всех времен английского языка с понятными объяснениями и практическими упражнениями",
        fullDescription: "",
        price: 2200,
        category: "Универсально",
        image: "/images/coorses/7.jpg",
        instructor: "Ксения Серёдкина",
        features: ["Объяснение на пальцах", "Разбор всех времен", "Без воды", "Упражнения для практики"],
        buyLink: "https://t.me/Kakihtam",
    },
]

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredPrograms, setFilteredPrograms] = useState(programs)
    const [expandedFeatures, setExpandedFeatures] = useState<{ [key: number]: boolean }>({})

    const handleSearch = (value: string) => {
        setSearchTerm(value)
        const filtered = programs.filter(
            (program) =>
                program.title.toLowerCase().includes(value.toLowerCase()) ||
                program.description.toLowerCase().includes(value.toLowerCase()) ||
                program.instructor.toLowerCase().includes(value.toLowerCase()),
        )
        setFilteredPrograms(filtered)
    }

    const toggleFeatures = (courseId: number) => {
        setExpandedFeatures((prev) => ({
            ...prev,
            [courseId]: !prev[courseId],
        }))
    }

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
                        <Link href="/courses" className="text-brand-pink-bright font-semibold">
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

            <div className="container mx-auto px-4 py-12">
                {/* Back to Home Button */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-brand-blue-steel hover:text-brand-blue-bright mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Вернуться на главную
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-brand-blue-pastel py-20 rounded-3xl mb-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-blue-bright">
                            Универсальные программы
                            <span className="block text-brand-pink-bright">обучения</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-brand-blue-bright/80 max-w-3xl mx-auto">
                            Каждая программа проверена не только временем, но и опытом
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    placeholder="Поиск программ..."
                                    value={searchTerm}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="pl-10 bg-white/90 backdrop-blur-md border-brand-pink-pastel/50 text-slate-800 placeholder:text-gray-500 h-12"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                                <Play className="w-5 h-5" />
                                <span className="font-semibold">100+ часов занятий</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">100+ учеников</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-brand-blue-bright">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="font-semibold">4.9 средний рейтинг</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="py-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Все наши <span className="text-brand-pink-bright">{programs.length}</span> программ
                        </h2>
                        <p className="text-center text-gray-600">
                            {searchTerm
                                ? `Найдено ${filteredPrograms.length} программ по запросу "${searchTerm}"`
                                : "Выберите подходящую программу для достижения ваших целей"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPrograms.map((course) => (
                            <Card
                                key={course.id}
                                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm border-0 overflow-hidden rounded-2xl"
                            >
                                <Link href={`/courses/${course.id}`}>
                                    <div className="relative">
                                        <div className="w-full aspect-[1550/1024] overflow-hidden">
                                            <Image
                                                src={course.image || "/placeholder.svg?height=1024&width=1550"}
                                                alt={course.title}
                                                width={1550}
                                                height={1024}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Play className="w-12 h-12 text-white" />
                                        </div>
                                        <Badge className="absolute top-4 left-4 bg-brand-pink-bright text-white">{course.category}</Badge>
                                    </div>
                                </Link>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-gray-500">{course.instructor}</span>
                                    </div>
                                    <Link href={`/courses/${course.id}`}>
                                        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-brand-blue-bright hover:text-brand-pink-bright transition-colors cursor-pointer">
                                            {course.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {course.features
                                            .slice(0, expandedFeatures[course.id] ? course.features.length : 2)
                                            .map((feature, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="outline"
                                                    className="text-xs bg-brand-blue-pastel/50 text-brand-blue-bright border-brand-blue-bright/30"
                                                >
                                                    {feature}
                                                </Badge>
                                            ))}
                                        {course.features.length > 2 && (
                                            <Badge
                                                variant="outline"
                                                className="text-xs bg-gray-50 text-gray-600 cursor-pointer hover:bg-gray-100"
                                                onClick={() => toggleFeatures(course.id)}
                                            >
                                                {expandedFeatures[course.id] ? "Скрыть" : `+${course.features.length - 2}`}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-brand-blue-bright">
                          {course.price.toLocaleString()} ₽
                        </span>
                                            </div>
                                        </div>
                                        <Link href={`/courses/${course.id}`}>
                                            <Button className="w-full bg-brand-pink-bright hover:bg-brand-pink-pastel text-white">
                                                Подробнее
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredPrograms.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">Программы не найдены. Попробуйте изменить поисковый запрос.</p>
                        </div>
                    )}
                </section>
            </div>

            {/* Payment Methods */}
            <section className="py-16 bg-brand-blue-pastel">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue-bright">Удобные способы оплаты</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="p-6 bg-white/80 backdrop-blur-md border-0">
                            <div className="w-16 h-16 bg-brand-blue-bright/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💳</span>
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-brand-blue-bright">Перевод по номеру карты</h3>
                            <p className="text-gray-600">Т-Банк, СберБанк, Альфа Банк, Озон Банк, ГазпромБанк</p>
                        </Card>
                        <Card className="p-6 bg-white/80 backdrop-blur-md border-0">
                            <div className="w-16 h-16 bg-brand-blue-bright/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-brand-blue-bright">СБП</h3>
                            <p className="text-gray-600">Система быстрых платежей по номеру телефона</p>
                        </Card>
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
