import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[--brand-beige]">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-md">
                    <Link
                        href="/"
                        className="inline-flex items-center text-[--brand-blue-bright] hover:text-[--brand-pink-bright] mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        На главную
                    </Link>
                    <article className="prose prose-lg max-w-none text-gray-900 prose-headings:text-gray-900 prose-a:text-[--brand-blue-bright] hover:prose-a:text-[--brand-pink-bright]">
                        <h1 className="text-transparent bg-gradient-to-r from-[--brand-blue-bright] to-[--brand-pink-bright] bg-clip-text">
                            Политика конфиденциальности
                        </h1>
                        <p className="text-sm text-gray-500">Последнее обновление: 15 июля 2025 г.</p>

                        <h2>1. Введение</h2>
                        <p>
                            Добро пожаловать на TutorHub (далее — "Сайт", "мы", "нас"). Мы ценим вашу конфиденциальность и стремимся
                            защищать ваши персональные данные. Настоящая Политика конфиденциальности объясняет, какие данные мы
                            собираем, как мы их используем и защищаем.
                        </p>

                        <h2>2. Какие данные мы собираем</h2>
                        <p>Мы собираем следующие категории персональных данных:</p>
                        <ul>
                            <li>
                                <strong>Данные, которые вы предоставляете напрямую:</strong>
                                <ul>
                                    <li><strong>Для учеников и их представителей:</strong> имя, фамилия, контактный email, номер телефона, информация для связи, отзывы.</li>
                                    <li><strong>Для репетиторов:</strong> имя, фамилия, фото, контактный email, номер телефона, информация об образовании, опыте работы, специализации, достижениях, ссылки на соцсети, расписание, платёжные данные.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Данные, собираемые автоматически:</strong>
                                <ul>
                                    <li><strong>Техническая информация:</strong> IP-адрес, браузер, ОС, устройство.</li>
                                    <li><strong>Данные об использовании:</strong> посещённые страницы, время на сайте, переходы по ссылкам, cookie.</li>
                                </ul>
                            </li>
                        </ul>

                        <h2>3. Как мы используем ваши данные</h2>
                        <ul>
                            <li>Предоставление и улучшение работы сайта</li>
                            <li>Создание и управление профилями</li>
                            <li>Связь между учениками и репетиторами</li>
                            <li>Поддержка пользователей</li>
                            <li>Информирование и маркетинг (с согласия)</li>
                            <li>Безопасность и защита от мошенничества</li>
                            <li>Аналитика и развитие платформы</li>
                        </ul>

                        <h2>4. Передача данных третьим лицам</h2>
                        <ul>
                            <li><strong>Репетиторам и ученикам:</strong> контактные данные — после подтверждения связи</li>
                            <li><strong>Поставщикам услуг:</strong> хостинг, аналитика, платежи — только необходимые данные</li>
                            <li><strong>По требованию закона:</strong> по запросу госорганов</li>
                        </ul>

                        <h2>5. Ваши права</h2>
                        <ul>
                            <li>Доступ к своим данным</li>
                            <li>Исправление неточностей</li>
                            <li>Удаление данных</li>
                            <li>Отзыв согласия</li>
                            <li>Ограничение обработки</li>
                        </ul>
                        <p>
                            Для реализации этих прав, свяжитесь с нами:{" "}
                            <a href="mailto:pancheva.nastya@gmail.com">pancheva.nastya@gmail.com</a>
                        </p>

                        <h2>6. Безопасность данных</h2>
                        <p>Мы принимаем меры для защиты ваших данных от несанкционированного доступа, утраты и изменения.</p>

                        <h2>7. Cookie</h2>
                        <p>Мы используем cookie для улучшения работы сайта. Вы можете управлять ими в браузере.</p>

                        <h2>8. Конфиденциальность детей</h2>
                        <p>Сайт для пользователей 14+. Если ребёнок случайно отправил данные — свяжитесь с нами.</p>

                        <h2>9. Изменения в политике</h2>
                        <p>Мы можем обновлять политику, опубликовав новую версию на этой странице.</p>

                        <h2>10. Контакты</h2>
                        <p>Email: <a href="mailto:pancheva.nastya@gmail.com">pancheva.nastya@gmail.com</a></p>
                    </article>
                </div>
            </div>
        </div>
    )
}
