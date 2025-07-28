"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
    Star,
    Clock,
    Users,
    Award,
    CheckCircle,
    ArrowLeft,
    Play,
    Download,
    MessageCircle,
    Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"
import { coursesData } from "@/lib/courses-data"

function VkIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.49.402v1.15c0 .3-.096.483-.943.483-1.946 0-4.1-1.173-5.617-3.358-2.289-3.063-2.913-5.371-2.913-5.846 0-.33.132-.483.433-.483h1.744c.33 0 .453.15.58.5.658 1.997 1.744 3.747 2.19 2.384.346-1.063.012-3.45-.33-3.944-.246-.35-.696-.548-1.096-.548-.264 0 .132-.5.58-.715.33-.16 1.146-.25 2.008-.25 1.15 0 1.463.082 1.908.5.726.7.494 3.4.494 4.514 0 .947-.18 1.128.33 1.128.58 0 1.596-.715 2.456-2.05 1.01-1.51 1.78-3.847 1.78-3.847.132-.33.33-.483.66-.483h1.744c.99 0 1.21.5.99 1.18-.33 1.063-2.39 4.048-2.39 4.048-.528.747-.396 1.08 0 1.744.33.548 1.43 1.427 2.125 2.291.99 1.26.66 2.012-.264 2.012z" />
        </svg>
    )
}

interface CoursePageProps {
    params: Promise<{ id: string }>
}

export default function CoursePage({ params }: CoursePageProps) {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
    const [activeTab, setActiveTab] = useState("description")

    useEffect(() => {
        params.then(setResolvedParams)
    }, [params])

    if (!resolvedParams) {
        return <div>Loading...</div>
    }

    const course = coursesData[Number.parseInt(resolvedParams.id)]

    if (!course) {
        return notFound()
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
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/courses"
                        className="inline-flex items-center text-brand-blue-steel hover:text-brand-blue-bright mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Вернуться к курсам
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="mb-16">
                    {/* Title and Badge */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <Badge className="bg-brand-pink-bright text-white">{course.category}</Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue-bright">{course.title}</h1>
                    </div>

                    {/* Image */}
                    <div className="relative mb-8 text-center">
                        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto inline-block">
                            <Image
                                src={course.image || "/placeholder.svg?height=699&width=1052"}
                                alt={course.title}
                                width={1052}
                                height={699}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Description and Info */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed whitespace-pre-line text-left">
                            {course.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="text-center">
                                <Play className="w-6 h-6 text-brand-blue-bright mx-auto mb-2" />
                                <div className="text-sm text-gray-600">Уроков</div>
                                <div className="font-semibold">{course.lessons}</div>
                            </div>
                            <div className="text-center">
                                <Users className="w-6 h-6 text-brand-blue-bright mx-auto mb-2" />
                                <div className="text-sm text-gray-600">Преподаватель</div>
                                <div className="font-semibold text-xs">{course.instructor}</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={course.buyLink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    className="bg-brand-pink-bright hover:bg-brand-pink-pastel text-white text-lg px-8 py-4"
                                >
                                    Купить за {course.price.toLocaleString()} ₽
                                </Button>
                            </Link>
                            <Link href={course.buyLink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-brand-blue-bright text-brand-blue-bright hover:bg-brand-blue-bright hover:text-white text-lg px-8 py-4 bg-transparent"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Задать вопрос
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Tutor Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-brand-beige to-brand-blue-pastel/20 rounded-3xl p-8 md:p-12 text-slate-800 relative overflow-hidden border border-brand-pink-pastel/20 shadow-xl">
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue-bright">Твой преподаватель</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                                {/* Left Column - Info */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-bright">{course.tutorInfo.name}</h3>

                                    <div className="space-y-3">
                                        {course.tutorInfo.achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6">
                                        <h4 className="font-bold mb-4 text-brand-blue-bright">Социальные сети</h4>
                                        <div className="flex space-x-4">
                                            {course.tutorInfo.socialLinks.telegram && (
                                                <Link
                                                    href={course.tutorInfo.socialLinks.telegram}
                                                    className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                                                >
                                                    <Send className="w-6 h-6" />
                                                </Link>
                                            )}
                                            {course.tutorInfo.socialLinks.vk && (
                                                <Link
                                                    href={course.tutorInfo.socialLinks.vk}
                                                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                                                >
                                                    <VkIcon className="w-6 h-6" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Column - Photo */}
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-brand-pink-bright/30 shadow-2xl">
                                            <Image
                                                src={course.tutorInfo.photo || "/placeholder.svg?height=256&width=256"}
                                                alt={course.tutorInfo.name}
                                                width={256}
                                                height={256}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Stats */}
                                <div className="space-y-8">
                                    <div className="text-right">
                                        <h4 className="font-bold mb-6 text-xl text-brand-blue-bright">Результаты учеников:</h4>
                                        <div className="space-y-6">
                                            {course.tutorInfo.stats.map((stat, index) => (
                                                <div key={index} className="text-right">
                                                    <div className="text-4xl md:text-5xl font-bold text-green-500 mb-1">{stat.label}</div>
                                                    <div className="text-lg font-semibold mb-2 text-brand-blue-bright">{stat.value}</div>
                                                    <div className="text-sm text-gray-600 leading-tight">{stat.description}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs */}
                <section className="mb-16">
                    <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
                        {[
                            { id: "description", label: "Описание" },
                            { id: "content", label: "Программа курса" },
                            { id: "requirements", label: "Требования" },
                            { id: "bonuses", label: "Бонусы" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                                    activeTab === tab.id
                                        ? "text-brand-pink-bright border-brand-pink-bright"
                                        : "text-gray-600 border-transparent hover:text-brand-pink-bright"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {activeTab === "description" && (
                                <div className="space-y-8">
                                    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                        <h2 className="text-3xl font-bold mb-6 text-brand-blue-bright">О курсе</h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                                            {course.fullDescription}
                                        </p>

                                        <h3 className="text-2xl font-bold mb-4 text-brand-blue-bright">Что вы изучите:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {course.whatYouWillLearn.map((item, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            )}

                            {activeTab === "content" && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold mb-6 text-brand-blue-bright">Программа курса</h2>
                                    {course.courseContent.map((module, index) => (
                                        <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">{module.module}</h3>
                                            <div className="space-y-3">
                                                {module.lessons.map((lesson, lessonIndex) => (
                                                    <div key={lessonIndex} className="flex items-center space-x-3">
                                                        <div className="w-6 h-6 bg-brand-blue-bright/20 rounded-full flex items-center justify-center">
                                                            <span className="text-xs font-semibold text-brand-blue-bright">{lessonIndex + 1}</span>
                                                        </div>
                                                        <span className="text-gray-700">{lesson}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            )}

                            {activeTab === "requirements" && (
                                <div className="space-y-8">
                                    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                        <h2 className="text-3xl font-bold mb-6 text-brand-blue-bright">Требования</h2>
                                        <div className="space-y-4">
                                            {course.requirements.map((requirement, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-5 h-5 text-brand-blue-bright flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{requirement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                        <h2 className="text-3xl font-bold mb-6 text-brand-blue-bright">Для кого этот курс</h2>
                                        <div className="space-y-4">
                                            {course.targetAudience.map((audience, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <Users className="w-5 h-5 text-brand-pink-bright flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{audience}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            )}

                            {activeTab === "bonuses" && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold mb-6 text-brand-blue-bright">Бонусы курса</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {course.bonuses.map((bonus, index) => (
                                            <Card
                                                key={index}
                                                className="p-6 bg-gradient-to-br from-brand-pink-pastel/20 to-brand-blue-pastel/20 border-0 shadow-lg"
                                            >
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-brand-pink-bright/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Award className="w-6 h-6 text-brand-pink-bright" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-brand-blue-bright mb-2">Бонус {index + 1}</h3>
                                                        <p className="text-gray-700">{bonus}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl sticky top-24 border-0">
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold text-brand-blue-bright mb-2">
                                        {course.price.toLocaleString()} ₽
                                    </div>
                                    <div className="text-gray-600">Полный доступ к курсу</div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <Link href={course.buyLink} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full bg-brand-pink-bright hover:bg-brand-pink-pastel text-white text-lg py-3">
                                            Купить курс
                                        </Button>
                                    </Link>
                                    <Link href={course.buyLink} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="outline"
                                            className="w-full border-2 border-brand-blue-bright text-brand-blue-bright hover:bg-brand-blue-bright hover:text-white bg-transparent"
                                        >
                                            <MessageCircle className="w-4 h-4 mr-2" />
                                            Задать вопрос
                                        </Button>
                                    </Link>
                                </div>

                                <div className="space-y-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Длительность: {course.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Play className="w-4 h-4" />
                                        <span>Уроков: {course.lessons}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Award className="w-4 h-4" />
                                        <span>Уровень: {course.level}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Download className="w-4 h-4" />
                                        <span>Пожизненный доступ</span>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 bg-gradient-to-br from-brand-pink-pastel/20 to-brand-blue-pastel/20 border-0 shadow-lg">
                                <h3 className="font-bold text-xl mb-4 text-brand-blue-bright">Особенности курса</h3>
                                <div className="space-y-3">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                <h3 className="font-bold text-xl mb-4 text-brand-blue-bright">Преподаватель</h3>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                                        <Image
                                            src={course.tutorInfo.photo || "/placeholder.svg?height=64&width=64"}
                                            alt={course.tutorInfo.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="font-semibold text-brand-blue-bright">{course.instructor}</div>
                                    <div className="text-sm text-gray-600 mt-2">{course.tutorInfo.experience}</div>
                                    <div className="flex items-center justify-center space-x-1 mt-2">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-semibold">{course.tutorInfo.rating}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
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
