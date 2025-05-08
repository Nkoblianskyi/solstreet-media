import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Target } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

export const metadata = {
  title: "Nosotros | SolStreet Media",
  description:
    "Conozca más sobre SolStreet Media, nuestra historia, valores y equipo de profesionales en marketing offline.",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Conozca más sobre SolStreet Media, nuestra historia, valores y equipo de profesionales.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 mb-4">
              SolStreet Media nació en 2015 con una visión clara: revolucionar el marketing offline en España,
              combinando creatividad, estrategia y resultados medibles.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Lo que comenzó como una pequeña agencia especializada en vallas publicitarias en Barcelona, ha crecido
              hasta convertirse en un referente nacional en soluciones integrales de marketing offline.
            </p>
            <p className="text-lg text-gray-600">
              Hoy, con un equipo de más de 25 profesionales y cientos de proyectos exitosos, seguimos fieles a nuestra
              misión: ayudar a las empresas a conectar con sus audiencias a través de experiencias publicitarias
              memorables en el mundo físico.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/7f56b82d4a30dbbe671442218a2d6fce.jpg"
              alt="Equipo de SolStreet Media"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-lightblue-darker rounded-full">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Excelencia</h3>
                <p className="text-gray-600 text-center">
                  Nos esforzamos por superar las expectativas en cada proyecto, prestando atención a cada detalle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-lightblue-darker rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Innovación</h3>
                <p className="text-gray-600 text-center">
                  Exploramos constantemente nuevas ideas y tecnologías para mantener nuestras soluciones a la
                  vanguardia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-lightblue-darker rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Colaboración</h3>
                <p className="text-gray-600 text-center">
                  Trabajamos estrechamente con nuestros clientes, convirtiéndonos en una extensión de su equipo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-lightblue-darker rounded-full">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Compromiso</h3>
                <p className="text-gray-600 text-center">
                  Nos comprometemos con los plazos y resultados, manteniendo la transparencia en todo momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>


        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-lightblue p-6 rounded-lg flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-xl mb-2">Experiencia probada</h3>
                <p className="text-gray-600">
                  Con más de 8 años en el sector y cientos de proyectos exitosos, contamos con la experiencia necesaria
                  para enfrentar cualquier desafío.
                </p>
              </div>
            </div>

            <div className="bg-lightblue p-6 rounded-lg flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-xl mb-2">Enfoque integral</h3>
                <p className="text-gray-600">
                  Ofrecemos soluciones completas, desde la estrategia inicial hasta la implementación final, con un
                  único punto de contacto.
                </p>
              </div>
            </div>

            <div className="bg-lightblue p-6 rounded-lg flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-xl mb-2">Creatividad sin límites</h3>
                <p className="text-gray-600">
                  Nuestro equipo creativo desarrolla conceptos originales y memorables que destacan en un entorno
                  saturado de mensajes.
                </p>
              </div>
            </div>

            <div className="bg-lightblue p-6 rounded-lg flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-xl mb-2">Resultados medibles</h3>
                <p className="text-gray-600">
                  Implementamos métricas y sistemas de seguimiento para evaluar el impacto real de nuestras campañas y
                  optimizar continuamente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-16 md:py-24 bg-lightblue">
          <div className="container">
            <AnimatedElement animation="slideUp" delay={0.2}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Servicios</h2>
                <p className="text-lg text-gray-600">
                  Ofrecemos una amplia gama de soluciones de marketing offline para ayudar a su empresa a destacar.
                </p>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedElement animation="slideUp" delay={0.3}>
                <Card className="bg-white">
                  <CardHeader>
                    <div className="h-48 relative mb-4">
                      <Image
                        src="/50ad7bbe43d51c2ca65e0aad57d526c6.jpg"
                        alt="Vallas publicitarias"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <CardTitle>Vallas Publicitarias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Diseño e instalación de vallas publicitarias impactantes en ubicaciones estratégicas de alto
                      tráfico.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/servicios/vallas-publicitarias">Más información</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slideUp" delay={0.4}>
                <Card className="bg-white">
                  <CardHeader>
                    <div className="h-48 relative mb-4">
                      <Image
                        src="/1cb993403d4d0e2037ad0c184c876995.jpg"
                        alt="Folletos y Catálogos"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <CardTitle>Folletos y Catálogos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Diseño y producción de materiales impresos de alta calidad que comunican eficazmente su mensaje.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/servicios/folletos-catalogos">Más información</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slideUp" delay={0.5}>
                <Card className="bg-white">
                  <CardHeader>
                    <div className="h-48 relative mb-4">
                      <Image
                        src="/5652d6596737ab7cd89fc25385d9aac8.jpg"
                        alt="Publicidad en Transporte"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <CardTitle>Publicidad en Transporte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Campañas publicitarias en autobuses, metro y otros medios de transporte público con gran
                      visibilidad.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/servicios/publicidad-transporte">Más información</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>
            </div>

            <AnimatedElement animation="fadeIn" delay={0.6}>
              <div className="text-center mt-12">
                <Button asChild>
                  <Link href="/servicios">Ver todos los servicios</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </section>
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos de marketing offline.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
