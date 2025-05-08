import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Servicios | SolStreet Media",
  description:
    "Descubra nuestra amplia gama de servicios de marketing offline, desde vallas publicitarias hasta publicidad en transporte público.",
}

const services = [
  {
    id: "vallas-publicitarias",
    title: "Vallas Publicitarias",
    description:
      "Diseño e instalación de vallas publicitarias impactantes en ubicaciones estratégicas de alto tráfico.",
    image: "/50ad7bbe43d51c2ca65e0aad57d526c6.jpg",
    features: [
      "Vallas estáticas tradicionales",
      "Vallas digitales LED",
      "Vallas rotativas",
      "Lonas publicitarias de gran formato",
      "Selección estratégica de ubicaciones",
    ],
  },
  {
    id: "folletos-catalogos",
    title: "Folletos y Catálogos",
    description: "Diseño y producción de materiales impresos de alta calidad que comunican eficazmente su mensaje.",
    image: "/1cb993403d4d0e2037ad0c184c876995.jpg",
    features: [
      "Folletos promocionales",
      "Catálogos de productos",
      "Flyers y volantes",
      "Dípticos y trípticos",
      "Impresión en materiales premium",
    ],
  },
  {
    id: "publicidad-transporte",
    title: "Publicidad en Transporte",
    description:
      "Campañas publicitarias en autobuses, metro y otros medios de transporte público con gran visibilidad.",
    image: "/5652d6596737ab7cd89fc25385d9aac8.jpg",
    features: [
      "Publicidad exterior en autobuses",
      "Publicidad interior en metro y autobuses",
      "Marquesinas y paradas de autobús",
      "Estaciones de metro y tren",
      "Campañas integrales multisoporte",
    ],
  },
  {
    id: "stands-ferias",
    title: "Stands para Ferias",
    description: "Diseño y construcción de stands atractivos y funcionales para ferias y eventos comerciales.",
    image: "/91c9c38a7d53b4cf6690a1af2077f6aa.jpg",
    features: [
      "Stands modulares personalizados",
      "Stands de diseño exclusivo",
      "Mostradores y expositores",
      "Gráficas y elementos visuales",
      "Montaje y desmontaje",
    ],
  },
  {
    id: "senaletica",
    title: "Señalética Corporativa",
    description: "Desarrollo e implementación de sistemas de señalización para empresas y espacios comerciales.",
    image: "/e2f2c195116271b2a8849e9e297e6e69.jpg",
    features: [
      "Rótulos corporativos",
      "Señalización interior",
      "Directorios y placas",
      "Señalética de seguridad",
      "Sistemas de orientación",
    ],
  },
  {
    id: "merchandising",
    title: "Merchandising Promocional",
    description: "Creación de productos promocionales personalizados con la imagen de su empresa.",
    image: "/promotional-merchandise.png",
    features: [
      "Artículos de oficina",
      "Productos textiles",
      "Accesorios tecnológicos",
      "Packaging personalizado",
      "Regalos corporativos",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de soluciones de marketing offline para ayudar a su empresa a destacar.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/servicios/${service.id}`}>Más información</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-lightblue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿No encuentra lo que busca?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Ofrecemos soluciones personalizadas adaptadas a sus necesidades específicas. Contáctenos para discutir su
            proyecto.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
