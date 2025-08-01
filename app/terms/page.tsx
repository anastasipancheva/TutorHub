import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
                    <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        На главную
                    </Link>
                    <article className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-a:text-sky-600 hover:prose-a:text-sky-700">
                        <h1>Пользовательское соглашение</h1>
                        <p className="text-sm text-gray-500">Последнее обновление: 15 июля 2025 г.</p>

                        <h2>1. Общие положения</h2>
                        <p>
                            Настоящее Пользовательское соглашение (далее — "Соглашение") регулирует отношения между платформой
                            TutorHub (далее — "Сайт", "Платформа", "Администрация") и физическим лицом (далее — "Пользователь"),
                            использующим Сайт. Использование Сайта, включая просмотр информации и регистрацию, означает полное и
                            безоговорочное принятие Пользователем условий настоящего Соглашения.
                        </p>

                        <h2>2. Термины и определения</h2>
                        <ul>
                            <li>
                                <strong>Пользователь</strong> — любое физическое лицо, осуществляющее доступ к Сайту.
                            </li>
                            <li>
                                <strong>Ученик</strong> — Пользователь, ищущий образовательные услуги.
                            </li>
                            <li>
                                <strong>Репетитор</strong> — Пользователь, предлагающий образовательные услуги и размещающий свою анкету
                                на Сайте.
                            </li>
                            <li>
                                <strong>Контент</strong> — любая информация, размещенная на Сайте, включая тексты, изображения,
                                видеоматериалы, статьи и анкеты.
                            </li>
                        </ul>

                        <h2>3. Права и обязанности сторон</h2>
                        <h3>3.1. Обязанности Репетитора</h3>
                        <p>Регистрируясь на Сайте, Репетитор соглашается и обязуется:</p>
                        <ul>
                            <li>Предоставлять достоверную информацию о своем образовании, опыте и квалификации.</li>
                            <li>
                                <strong>
                                    Предоставлять каждому Ученику, найденному посредством Платформы, активную ссылку на сайт TutorHub.
                                </strong>{" "}
                                Данное действие направлено на взаимное продвижение всех участников образовательного сообщества Платформы
                                и поддержание ее целостности.
                            </li>
                            <li>Своевременно обновлять информацию в своей анкете, включая расписание и стоимость услуг.</li>
                        </ul>

                        <h3>3.2. Права и обязанности Ученика</h3>
                        <ul>
                            <li>Ученик имеет право выбирать любого Репетитора на Сайте для получения образовательных услуг.</li>
                            <li>
                                Ученик может свободно делиться ссылкой на Сайт с другими учениками или репетиторами, не
                                зарегистрированными на Платформе.
                            </li>
                        </ul>

                        <h2>4. Интеллектуальная собственность</h2>
                        <h3>4.1. Контент, принадлежащий Администрации</h3>
                        <p>
                            Весь Контент, созданный и размещенный на Сайте Администрацией, включая, но не ограничиваясь,{" "}
                            <strong>статьи в разделе "Блог"</strong>, тексты, дизайн, логотипы, является интеллектуальной
                            собственностью TutorHub.{" "}
                            <strong>
                                Копирование, распространение, перепечатка или любое иное использование данного Контента без
                                предварительного письменного согласия Администрации строго запрещено.
                            </strong>
                        </p>

                        <h3>4.2. Контент, размещаемый Пользователями</h3>
                        <p>
                            Контент, размещаемый Репетиторами в своих анкетах (включая фотографии, видеоматериалы, тексты описаний),
                            является их интеллектуальной собственностью. Однако, размещая данный Контент на Сайте, Репетитор
                            предоставляет Администрации неисключительное право на его использование для целей функционирования и
                            продвижения Платформы.
                        </p>
                        <p>
                            <strong>
                                Всем Пользователям и третьим лицам строго запрещается копировать, сохранять, распространять или иным
                                образом использовать в личных, коммерческих или любых других целях фотографии, видео и текстовые
                                материалы из анкет других Пользователей без их прямого письменного согласия.
                            </strong>
                        </p>

                        <h2>5. Ограничение ответственности</h2>
                        <p>
                            Платформа TutorHub является информационным посредником, предоставляющим площадку для взаимодействия
                            Учеников и Репетиторов. Администрация не является стороной в договоренностях между Учеником и Репетитором
                            и не несет ответственности за качество предоставляемых образовательных услуг, а также за выполнение
                            финансовых обязательств между сторонами.
                        </p>

                        <h2>6. Заключительные положения</h2>
                        <p>
                            Администрация оставляет за собой право вносить изменения в настоящее Соглашение в одностороннем порядке.
                            Новая редакция Соглашения вступает в силу с момента ее публикации на Сайте. Продолжение использования
                            Сайта после внесения изменений означает согласие Пользователя с новой редакцией.
                        </p>

                        <h2>7. Контактная информация</h2>
                        <p>
                            По всем вопросам, связанным с настоящим Соглашением, вы можете обратиться в службу поддержки по адресу:
                            <br />
                            Email: <a href="mailto:[Контактный Email]">pancheva.nastya@gmail.com. Или в любой соц сети по нику anastasipancheva</a>
                        </p>
                    </article>
                </div>
            </div>
        </div>
    )
}
