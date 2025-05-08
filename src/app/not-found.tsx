import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-6 mb-4">Página no encontrada</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Lo sentimos, la página que está buscando no existe o ha sido movida.
      </p>
      <Button asChild size="lg">
        <Link href="/">Volver a la página de inicio</Link>
      </Button>
    </div>
  )
}
