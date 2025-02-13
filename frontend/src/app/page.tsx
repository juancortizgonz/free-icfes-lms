import Link from "next/link"

function example() {
  console.log("Click")
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4l font-bold">¡Bienvenido al LMS freeICFES!</h1>
      <p className="mt-4 text-lg">Tu plataforma gratuita para prepararte para el ICFES.</p>
      <nav className="mt-4">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Ir al Dashboard
        </Link>
      </nav>
    </main>
  );
}
