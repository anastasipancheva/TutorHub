import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Send, ArrowLeft } from "lucide-react"

export default function ContactsPage() {
    const contacts = [
        {
            icon: <Phone className="w-6 h-6 text-sky-600" />,
            title: "Телефон",
            value: "+7 (913) 816-84-50",
            href: "tel:+79138168450",
            cta: "Позвонить",
        },
        {
            icon: <Mail className="w-6 h-6 text-sky-600" />,
            title: "Электронная почта",
            value: "pancheva.nastya@gmail.com",
            href: "mailto:pancheva.nastya@gmail.com",
            cta: "Написать",
        },
        {
            icon: <Send className="w-6 h-6 text-sky-600" />,
            title: "Telegram",
            value: "@anastasipancheva",
            href: "https://t.me/anastasipancheva",
            cta: "Написать в Telegram",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-mint-50 to-sky-100 py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        На главную
                    </Link>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Свяжитесь со мной</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Я всегда открыта для вопросов, предложений о сотрудничестве или просто для интересного разговора. Выберите
                            удобный для вас способ связи.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contacts.map((contact, index) => (
                            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-sky-100 rounded-full mb-4">{contact.icon}</div>
                                    <CardTitle>{contact.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center justify-center h-full">
                                    <p className="text-gray-700 font-medium mb-6">{contact.value}</p>
                                    <Button asChild className="mt-auto bg-sky-600 hover:bg-sky-700">
                                        <a href={contact.href} target="_blank" rel="noopener noreferrer">
                                            {contact.cta}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-12 p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Остались вопросы?</h2>
                        <p className="text-center text-gray-600 mb-6">
                            Если у вас есть технические проблемы с сайтом, предложения по улучшению или вы хотите стать частью нашей
                            команды репетиторов, не стесняйтесь писать на почту.
                        </p>
                        <div className="text-center">
                            <Button asChild variant="outline" size="lg">
                                <a href="mailto:pancheva.nastya@gmail.com">Написать на почту</a>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
