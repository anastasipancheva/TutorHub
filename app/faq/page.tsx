"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, HelpCircle, ArrowLeft, ChevronDown, Search } from "lucide-react"

type FaqItem = {
    question: string
    answer: string
}

type FaqCategory = {
    title: string
    questions: FaqItem[]
}

const faqCategories: FaqCategory[] = [
    {
        title: "Общие вопросы",
        questions: [
            {
                question: "Что такое TutorHub?",
                answer:
                    "TutorHub — это онлайн-платформа, которая объединяет учеников и квалифицированных репетиторов. Мы помогаем найти идеального преподавателя для индивидуальных занятий по любому предмету.",
            },
            {
                question: "Как работает платформа?",
                answer:
                    "Вы выбираете предмет, просматриваете профили репетиторов, читаете отзывы и выбираете подходящего преподавателя. Затем связываетесь с ним для организации занятий.",
            },
            {
                question: "Безопасно ли пользоваться TutorHub?",
                answer:
                    "Да, все наши репетиторы проходят тщательную проверку. Мы также предоставляем систему отзывов и рейтингов для дополнительной безопасности.",
            },
        ],
    },
    {
        title: "Поиск репетитора",
        questions: [
            {
                question: "Как найти подходящего репетитора?",
                answer:
                    "Изучайте анкеты тех преподавателей, которые подходят вам по предмету. Каждый педагог оставил о себе информацию, с помощью которой вы поймёте, подходит ли он вам. Стоит обратить внимание на отзывы других учеников.",
            },
            {
                question: "Можно ли сменить репетитора?",
                answer:
                    "Конечно! Если текущий репетитор вам не подходит, вы можете в любое время найти другого преподавателя на нашей платформе.",
            },
            {
                question: "Как связаться с репетитором?",
                answer:
                    "После выбора репетитора нажмите кнопку 'Связаться' в его профиле. Вы сможете написать сообщение или позвонить напрямую.",
            },
        ],
    },
    {
        title: "Занятия и оплата",
        questions: [
            {
                question: "Сколько стоят занятия?",
                answer: "Стоимость варьируется. Точную цену указывает каждый преподаватель в своем профиле.",
            },
            {
                question: "Как происходит оплата?",
                answer: "Оплата происходит напрямую между учеником и репетитором. Способ оплаты обсуждается индивидуально.",
            },
            {
                question: "Есть ли пробные занятия?",
                answer:
                    "Многие репетиторы предлагают пробные занятия со скидкой или бесплатно. Уточните этот вопрос при первом контакте с преподавателем.",
            },
            {
                question: "Можно ли заниматься онлайн?",
                answer: "Да, все наши репетиторы проводят занятия онлайн через удобную для всех платформу.",
            },
        ],
    },
    {
        title: "Для репетиторов",
        questions: [
            {
                question: "Как стать репетитором на TutorHub?",
                answer: "Напишите лично автору этой платформы в любую социальную сеть по нику anastasipancheva",
            },
            {
                question: "Какие требования к репетиторам?",
                answer:
                    "Опыт преподавания от 1 года, высокие результаты ЕГЭ (от 85 баллов) и успешный опыт подготовки учеников.",
            },
            {
                question: "Сколько можно заработать?",
                answer:
                    "Доход зависит от количества учеников, предмета и вашей квалификации. Со своей стороны мы делаем всё возможное, чтобы учеников у вас было как можно больше :)",
            },
            {
                question: "Берет ли платформа комиссию?",
                answer: "TutorHub не берет комиссию с занятий. Вы получаете 100% от стоимости урока.",
            },
        ],
    },
]

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState("")

    const toggleItem = (id: string) => {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }

    const filteredCategories = faqCategories
        .map((category) => ({
            ...category,
            questions: category.questions.filter(
                (q) =>
                    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        }))
        .filter((category) => category.questions.length > 0)

    return (
        <div className="min-h-screen bg-brand-beige text-slate-800">
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
                        <Link href="/tutors" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                            Репетиторы
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                            О нас
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="container mx-auto px-4 py-10">
                <Link href="/" className="inline-flex items-center text-brand-blue-bright hover:text-brand-pink-bright mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Назад на главную
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Часто задаваемые <span className="text-brand-pink-bright">вопросы</span>
                </h1>
                <p className="text-xl text-gray-700 mb-10">Найдите ответы на самые популярные вопросы о TutorHub</p>

                <Card className="mb-12 bg-white/70 backdrop-blur-md shadow-lg border-0">
                    <CardContent className="p-6">
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Поиск по вопросам..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-bright"
                            />
                        </div>
                    </CardContent>
                </Card>

                <div className="max-w-4xl mx-auto">
                    {filteredCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-center text-brand-blue-bright">{category.title}</h2>
                            <div className="space-y-4">
                                {category.questions.map((item: FaqItem, itemIndex: number) => {
                                    const itemId = `${categoryIndex}-${itemIndex}`
                                    const isOpen = openItems.includes(itemId)
                                    return (
                                        <Card key={itemIndex} className="bg-white/80 border-0 shadow-md">
                                            <CardContent className="p-0">
                                                <button
                                                    onClick={() => toggleItem(itemId)}
                                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-pink-pastel/30 transition-colors"
                                                >
                                                    <div className="flex items-start space-x-4">
                                                        <div className="w-8 h-8 bg-brand-blue-bright rounded-full flex items-center justify-center mt-1">
                                                            <HelpCircle className="w-5 h-5 text-white" />
                                                        </div>
                                                        <h3 className="text-lg font-semibold">{item.question}</h3>
                                                    </div>
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                                {isOpen && (
                                                    <div className="px-6 pb-6">
                                                        <div className="ml-12 text-gray-600 leading-relaxed">{item.answer}</div>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mt-20">
                    <Card className="bg-gradient-to-r from-brand-blue-bright to-brand-pink-bright text-white shadow-lg border-0">
                        <CardContent className="p-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Если вы не нашли ответ на свой вопрос, наша создательница всегда готова ответить на всё!
                            </p>
                            <div className="flex justify-center">
                                <Link href="https://t.me/anastasipancheva">
                                    <Button
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-bright text-lg px-8 py-4 bg-transparent"
                                    >
                                        Связаться
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
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
