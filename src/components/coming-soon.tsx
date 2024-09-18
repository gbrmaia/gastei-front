import { ClockIcon } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="container mx-auto py-12 px-6 text-center">
                <div className="mb-6">
                    <ClockIcon className="w-16 h-16 sm:w-24 sm:h-24 mx-auto text-white animate-bounce" />
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                    Em Breve!
                </h1>
                <p className="text-lg sm:text-2xl text-white mb-6">
                    Estamos trabalhando em algo incrível para você. Fique ligado!
                </p>
                <Link
                    href="/"
                    className="inline-block bg-white text-blue-600 font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                >
                    Voltar para a Página Inicial
                </Link>
            </div>
        </main>
    );
}
