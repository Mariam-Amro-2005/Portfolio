import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">Mariam's Portfolio</h1>
                <p className="text-xl mb-12">Choose your focus area:</p>
                <div className="flex gap-6">
                    <Link
                        href="/fullstack"
                        className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                        Fullstack Development
                    </Link>
                    <Link
                        href="/ai"
                        className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        AI & Data Science
                    </Link>
                </div>
            </div>
        </main>
    );
}