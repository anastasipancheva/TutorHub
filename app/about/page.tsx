import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Heart, Target, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-beige">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-brand-pink-pastel/30 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-brand-blue-bright rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-brand-blue-bright">TutorHub</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                            Главная
                        </Link>
                        <Link href="/tutors" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                            Репетиторы
                        </Link>
                        <Link href="/about" className="text-brand-pink-bright font-semibold">
                            О нас
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-brand-blue-steel hover:text-brand-blue-bright mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Назад на главную
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue-bright">
                        О <span className="text-brand-pink-bright">TutorHub</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Мы — самосозданная ассоциация профессиональных репетиторов, объединенных общей целью: помочь каждому ученику
                        найти своего идеального преподавателя и достичь академических успехов.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="mb-16">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-brand-blue-bright rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-brand-blue-bright">Наша миссия</h2>
                            </div>
                            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                                TutorHub создан для того, чтобы сделать качественное образование доступным каждому. Мы верим, что
                                персональный подход к обучению — это ключ к успеху. Наша платформа объединяет лучших репетиторов со всей
                                России, которые готовы поделиться своими знаниями и опытом с учениками любого уровня подготовки.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-blue-bright">
                        Наши <span className="text-brand-pink-bright">ценности</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-pink-bright rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">Индивидуальность</h3>
                            <p className="text-gray-600">
                                Каждый ученик уникален. Мы подбираем репетиторов и методики обучения, учитывая личные особенности и цели
                                каждого студента.
                            </p>
                        </Card>
                        <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-blue-bright rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">Качество</h3>
                            <p className="text-gray-600">
                                Все наши репетиторы проходят тщательный отбор. Мы работаем только с преподавателями, имеющими достойный
                                опыт.
                            </p>
                        </Card>
                        <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-blue-steel rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">Поддержка</h3>
                            <p className="text-gray-600">
                                Мы сопровождаем процесс обучения от начала до конца, однако в процессе обучения никак не участвуем. Мы
                                даём Вам варианты репетиторов, а Вы приступаете к работе с ними.
                            </p>
                        </Card>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="mb-16">
                    <Card className="bg-brand-blue-bright text-white">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">TutorHub в цифрах</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                                    <p className="text-lg opacity-90">Репетиторов</p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
                                    <p className="text-lg opacity-90">Довольных учеников</p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                                    <p className="text-lg opacity-90">Предметов</p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                                    <p className="text-lg opacity-90">Успешных экзаменов</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* How it works */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-blue-bright">
                        Как мы <span className="text-brand-pink-bright">работаем</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-pink-bright text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">Анализ потребностей</h3>
                            <p className="text-gray-600">
                                На основе своего запроса вы можете подобрать подходящего для Вас репетитора
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-blue-bright text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">Связь с репетитором</h3>
                            <p className="text-gray-600">
                                После выбора идеального преподавателя Вы связываетесь с ним и приступаете к занятиям
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-blue-steel text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue-bright">Достижение результата</h3>
                            <p className="text-gray-600">В комфортном режиме приходите к поставленным целям</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue-bright">Готовы начать обучение?</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Присоединяйтесь к ученикам, которые уже достигли своих целей с TutorHub
                            </p>
                            <Link href="/">
                                <Button
                                    size="lg"
                                    className="bg-brand-pink-bright hover:bg-brand-pink-pastel text-white text-lg px-8 py-4 rounded-full"
                                >
                                    Найти репетитора
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-slate-800 text-white py-12 mt-16">
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
