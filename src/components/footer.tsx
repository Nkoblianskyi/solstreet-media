import Link from "next/link"
import { Logo } from "./logo"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-lightblue py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Logo asLink={true} />
          <p className="text-sm text-gray-600">
            Agencia de marketing offline especializada en la creación de billboards, brochures y publicidad en
            transporte público.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/trabajos" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Trabajos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/politica-privacidad" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/politica-cookies" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Contacto</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span className="text-sm text-gray-600">Carrer de Balmes, 191, 08006 Barcelona, España</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm text-gray-600">+34 934 567 890</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm text-gray-600">info@solstreetmedia.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} SolStreet Media. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
