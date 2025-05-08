import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-lightblue py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slideRight" delay={0.2}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Publicidad exterior que <span className="text-primary">impacta</span> y conecta
              </h1>
              <p className="text-lg text-gray-600">
                Creamos soluciones de marketing offline que capturan la atención y generan resultados tangibles para su
                negocio en Barcelona y toda España.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contacto">Solicitar presupuesto</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/trabajos">Ver nuestros trabajos</Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fadeIn" delay={0.4}>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/hero.png"
                alt="Publicidad exterior en la ciudad"
                fill
                className="object-contain"
                priority
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre SolStreet Media</h2>
              <p className="text-lg text-gray-600">
                Somos una agencia de marketing offline con sede en Barcelona, especializada en crear experiencias
                publicitarias memorables en espacios físicos.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement animation="scale" delay={0.3}>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-lightblue-darker flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">10+</span>
                  </div>
                  <CardTitle>Años de experiencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Más de una década creando campañas publicitarias efectivas para empresas de todos los tamaños.
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement animation="scale" delay={0.4}>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-lightblue-darker flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">200+</span>
                  </div>
                  <CardTitle>Clientes satisfechos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hemos ayudado a más de 200 empresas a alcanzar sus objetivos de marketing y publicidad.
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement animation="scale" delay={0.5}>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-lightblue-darker flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">500+</span>
                  </div>
                  <CardTitle>Proyectos completados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Desde pequeñas campañas locales hasta grandes despliegues nacionales para marcas reconocidas.
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Trabajos</h2>
              <p className="text-lg text-gray-600">
                Descubra algunos de nuestros proyectos más destacados y cómo hemos ayudado a nuestros clientes a
                alcanzar sus objetivos.
              </p>
            </div>
          </AnimatedElement>

          <Tabs defaultValue="todos" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="vallas">Vallas</TabsTrigger>
                <TabsTrigger value="impresos">Impresos</TabsTrigger>
                <TabsTrigger value="transporte">Transporte</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <AnimatedElement key={item} animation="scale" delay={0.2 + index * 0.1}>
                    <Link
                      href={`/trabajos/${
                        item === 1
                          ? "campana-vallas-restaurante-mediterraneo"
                          : item === 2
                            ? "catalogo-productos-muebles-modernos"
                            : item === 3
                              ? "campana-autobuses-festival-musica"
                              : item === 4
                                ? "vallas-digitales-lanzamiento-tecnologico"
                                : item === 5
                                  ? "folletos-promocionales-cadena-gimnasios"
                                  : "publicidad-metro-escuela-idiomas"
                      }`}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={
                              item === 1
                                ? "/restaurant-billboard-advertising-1.png"
                                : item === 2
                                  ? "/furniture-catalog-design-1.png"
                                  : item === 3
                                    ? "/bus-advertising-music-festival-1.png"
                                    : item === 4
                                      ? "/digital-billboard.png"
                                      : item === 5
                                        ? "/rotating-billboard.png"
                                        : "/large-advertising-canvas.png"
                            }
                            alt={`Proyecto ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                            {item === 1
                              ? "Campaña de vallas publicitarias para Restaurante Mediterráneo"
                              : item === 2
                                ? "Catálogo de productos para Muebles Modernos"
                                : item === 3
                                  ? "Campaña en autobuses para Festival de Música"
                                  : item === 4
                                    ? "Vallas digitales para Lanzamiento de Producto Tecnológico"
                                    : item === 5
                                      ? "Folletos promocionales para Cadena de Gimnasios"
                                      : "Publicidad en Metro para Escuela de Idiomas"}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Categoría: {item % 3 === 0 ? "Transporte" : item % 2 === 0 ? "Impresos" : "Vallas"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vallas">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 4].map((item, index) => (
                  <AnimatedElement key={item} animation="scale" delay={0.2 + index * 0.1}>
                    <Link
                      href={`/trabajos/${item === 1 ? "campana-vallas-restaurante-mediterraneo" : "vallas-digitales-lanzamiento-tecnologico"}`}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={item === 1 ? "/restaurant-billboard-advertising-1.png" : "/digital-billboard.png"}
                            alt={`Proyecto ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                            {item === 1
                              ? "Campaña de vallas publicitarias para Restaurante Mediterráneo"
                              : "Vallas digitales para Lanzamiento de Producto Tecnológico"}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">Categoría: Vallas</p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="impresos">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[2, 5].map((item, index) => (
                  <AnimatedElement key={item} animation="scale" delay={0.2 + index * 0.1}>
                    <Link
                      href={`/trabajos/${item === 2 ? "catalogo-productos-muebles-modernos" : "folletos-promocionales-cadena-gimnasios"}`}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={
                              item === 2
                                ? "/furniture-catalog-design-1.png"
                                : "/9f7f46acc446a3b8d76188058ee52716.jpg"
                            }
                            alt={`Proyecto ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                            {item === 2
                              ? "Catálogo de productos para Muebles Modernos"
                              : "Folletos promocionales para Cadena de Gimnasios"}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">Categoría: Impresos</p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transporte">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[3, 6].map((item, index) => (
                  <AnimatedElement key={item} animation="scale" delay={0.2 + index * 0.1}>
                    <Link
                      href={`/trabajos/${item === 3 ? "campana-autobuses-festival-musica" : "publicidad-metro-escuela-idiomas"}`}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={
                              item === 3
                                ? "/bus-advertising-music-festival-1.png"
                                : "/9f7f46acc446a3b8d76188058ee52716.jpg"
                            }
                            alt={`Proyecto ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                            {item === 3
                              ? "Campaña en autobuses para Festival de Música"
                              : "Publicidad en Metro para Escuela de Idiomas"}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">Categoría: Transporte</p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <AnimatedElement animation="fadeIn" delay={0.6}>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/trabajos">Ver todos los trabajos</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="container">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
              <p className="text-lg text-gray-600">
                Descubra las ventajas de trabajar con SolStreet Media para sus necesidades de marketing offline.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement animation="slideRight" delay={0.3}>
              <div className="bg-white p-6 rounded-lg flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl mb-2">Experiencia y conocimiento local</h3>
                  <p className="text-gray-600">
                    Nuestro equipo tiene un profundo conocimiento del mercado español y las preferencias locales, lo que
                    nos permite crear campañas que realmente conectan con su público objetivo.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideRight" delay={0.4}>
              <div className="bg-white p-6 rounded-lg flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl mb-2">Soluciones personalizadas</h3>
                  <p className="text-gray-600">
                    No creemos en soluciones genéricas. Cada proyecto se adapta específicamente a las necesidades y
                    objetivos únicos de su empresa.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideRight" delay={0.5}>
              <div className="bg-white p-6 rounded-lg flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl mb-2">Calidad premium</h3>
                  <p className="text-gray-600">
                    Utilizamos materiales y tecnologías de la más alta calidad para garantizar que su publicidad se vea
                    profesional y duradera.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideRight" delay={0.6}>
              <div className="bg-white p-6 rounded-lg flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl mb-2">Servicio integral</h3>
                  <p className="text-gray-600">
                    Nos encargamos de todo el proceso, desde el diseño inicial hasta la instalación final, para que
                    usted pueda centrarse en su negocio.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Últimos Artículos</h2>
              <p className="text-lg text-gray-600">
                Manténgase al día con las últimas tendencias y consejos en marketing offline.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <AnimatedElement key={item} animation="slideUp" delay={0.3 + index * 0.1}>
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/marketing-article.png?key=l3z77&height=200&width=400&query=marketing article ${item}`}
                      alt={`Artículo ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(
                        2025,
                        Math.floor(Math.random() * 4),
                        Math.floor(Math.random() * 28) + 1,
                      ).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                    </div>
                    <CardTitle>Tendencias en publicidad exterior para 2025</CardTitle>
                    <CardDescription>
                      Descubra las últimas innovaciones y tendencias en el mundo de la publicidad exterior.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" asChild className="p-0 h-auto">
                      <Link href={`/blog/articulo-${item}`} className="flex items-center text-primary">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animation="fadeIn" delay={0.6}>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/blog">Ver todos los artículos</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="container">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
              <p className="text-lg text-gray-600">Respuestas a las preguntas más comunes sobre nuestros servicios.</p>
            </div>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <AnimatedElement animation="slideUp" delay={0.3}>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-medium text-xl mb-2">¿Cuál es el proceso de trabajo con SolStreet Media?</h3>
                  <p className="text-gray-600">
                    Nuestro proceso comienza con una consulta inicial para entender sus necesidades y objetivos. Luego,
                    desarrollamos un concepto creativo, lo refinamos según sus comentarios, y finalmente procedemos a la
                    producción e instalación.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slideUp" delay={0.4}>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-medium text-xl mb-2">¿Cuánto tiempo tarda en completarse un proyecto?</h3>
                  <p className="text-gray-600">
                    El tiempo varía según la complejidad y el alcance del proyecto. Un proyecto de vallas publicitarias
                    típico puede tardar de 2 a 4 semanas, mientras que los materiales impresos pueden estar listos en
                    1-2 semanas.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slideUp" delay={0.5}>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-medium text-xl mb-2">¿Trabajan en toda España o solo en Barcelona?</h3>
                  <p className="text-gray-600">
                    Aunque nuestra sede está en Barcelona, ofrecemos servicios en toda España. Tenemos una red de
                    colaboradores que nos permite implementar campañas a nivel nacional.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slideUp" delay={0.6}>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-medium text-xl mb-2">¿Ofrecen servicios de diseño o solo de producción?</h3>
                  <p className="text-gray-600">
                    Ofrecemos un servicio integral que incluye tanto diseño como producción. Nuestro equipo de
                    diseñadores creativos puede desarrollar conceptos desde cero o trabajar con sus ideas existentes.
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slideRight" delay={0.3}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacte con nosotros</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estamos aquí para ayudarle con sus necesidades de marketing offline. Póngase en contacto con nosotros
                  para discutir su próximo proyecto.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Dirección</h3>
                      <p className="text-gray-600">Carrer de Balmes, 191, 08006 Barcelona, España</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Teléfono</h3>
                      <p className="text-gray-600">+34 934 567 890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600">info@solstreetmedia.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/contacto">Formulario de contacto</Link>
                  </Button>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn" delay={0.5}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/24ffcfb1e082b236f6898007351d7f76.jpg" alt="Mapa de ubicación" fill className="object-cover" />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  )
}
