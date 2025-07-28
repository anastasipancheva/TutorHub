import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, ArrowLeft, CheckCircle, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

export default function CareerPage() {
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
                        <Link href="/tutors" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                            Репетиторы
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-brand-pink-bright transition-colors">
                            О нас
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-brand-blue-bright hover:text-brand-blue-steel mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Назад на главную
                    </Link>
                </div>

                {/* Hero */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Карьера в{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-bright to-brand-blue-steel">
              TutorHub
            </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Станьте частью нашей команды профессиональных репетиторов и помогайте ученикам достигать их академических
                        целей, работая в удобном для вас формате.
                    </p>
                </section>

                {/* Why Join */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Почему стоит{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-bright to-brand-blue-steel">
              присоединиться
            </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-blue-bright rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Высокий доход</h3>
                            <p className="text-gray-600 text-sm">От 1000 до 3000 ₽/час в зависимости от предмета и опыта</p>
                        </Card>
                        <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-blue-steel rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Гибкий график</h3>
                            <p className="text-gray-600 text-sm">Работайте в удобное время, составляйте расписание сами</p>
                        </Card>
                        <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-blue-pastel rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Постоянные ученики</h3>
                            <p className="text-gray-600 text-sm">Мы делаем все возможное, чтобы поток учеников шёл к вам</p>
                        </Card>
                        <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-brand-pink-bright rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Профессиональный рост</h3>
                            <p className="text-gray-600 text-sm">Развивайтесь как преподаватель, набираясь опыта</p>
                        </Card>
                    </div>
                </section>

                {/* Requirements */}
                <section className="mb-16 flex justify-center">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-4xl w-full">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-center mb-8">
                                Требования к{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-bright to-brand-blue-steel">
                  кандидатам
                </span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                                        Образование и опыт
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Опыт преподавания от 1 года</li>
                                        <li>• Высокие результаты ЕГЭ (от 85 баллов)</li>
                                        <li>• Успешный опыт подготовки учеников к экзаменам</li>
                                        <li>• Хорошие отзывы от учеников</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                                        Личные качества
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Терпение и умение объяснять сложные темы</li>
                                        <li>• Ответственность и пунктуальность</li>
                                        <li>• Коммуникабельность и доброжелательность</li>
                                        <li>• Желание помогать ученикам достигать целей</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Process */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Процесс{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-bright to-brand-blue-steel">
              отбора
            </span>
                    </h2>
                    <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-blue-bright text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-bold mb-2">Заявка</h3>
                            <p className="text-gray-600 text-sm">Заполните анкету и отправьте её руководительнице сообщества</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-blue-steel text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-bold mb-2">Мини-собеседование</h3>
                            <p className="text-gray-600 text-sm">В личном формате обсудим нюансы работы</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-pink-pastel text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-bold mb-2">Старт работы</h3>
                            <p className="text-gray-600 text-sm">Публикация вашей анкеты на сайте</p>
                        </div>
                    </div>
                </section>

                {/* Subjects */}
                <section className="mb-16">
                    <Card className="bg-gradient-to-r from-brand-blue-bright to-brand-blue-steel text-white rounded-3xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                                Предметы, преподавателей по которым мы ищем
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                {[
                                    "География",
                                    "Иностранные языки",
                                    "Физика",
                                    "Литература",
                                    "Химия",
                                    "Информатика",
                                    "Биология",
                                    "История",
                                ].map((subject) => (
                                    <div key={subject} className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                                        <div className="text-2xl font-bold mb-1">{subject}</div>
                                        <div className="text-sm opacity-90">Ваша стоимость за час</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы стать частью команды?</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Присоединяйтесь к TutorHub и начните зарабатывать, делясь своими знаниями
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="https://t.me/anastasipancheva">
                                    <Button
                                        size="lg"
                                        className="bg-brand-blue-bright hover:bg-brand-blue-steel text-white text-lg px-8 py-4"
                                    >
                                        Подать заявку
                                    </Button>
                                </Link>
                                <Link href="/faq">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-brand-blue-bright text-brand-blue-bright hover:bg-brand-blue-bright hover:text-white text-lg px-8 py-4 bg-transparent"
                                    >
                                        Найти ответ на свой вопрос
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
