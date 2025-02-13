import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4l font-bold">¡Bienvenido al LMS freeICFES!</h1>
      <p className="mt-4 text-lg">Tu plataforma gratuita para prepararte para el ICFES.</p>
      <nav className="mt-4">
        <Link href="/register" className="text-blue-500 hover:underline">
          Regístrate aquí
        </Link>
      </nav>
    </main>
  );
}
