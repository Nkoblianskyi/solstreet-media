import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProjects, getProjectsByCategory } from "../../data/projects"
import { AnimatedElement } from "../../components/ui/animated-element"

export const metadata = {
  title: "Trabajos | SolStreet Media",
  description:
    "Explore nuestra cartera de proyectos de marketing offline, incluyendo vallas publicitarias, folletos y publicidad en transporte.",
}

export default function WorksPage() {
  const projects = getProjects()
  const vallasProjects = getProjectsByCategory("Vallas")
  const impresosProjects = getProjectsByCategory("Impresos")
  const transporteProjects = getProjectsByCategory("Transporte")

  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-center">Nuestros Trabajos</h1>
            <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Explore nuestra cartera de proyectos y descubra cómo hemos ayudado a nuestros clientes a alcanzar sus
              objetivos.
            </p>
          </AnimatedElement>
        </div>
      </div>

      <div className="container py-16">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedElement key={project.id} animation="scale" delay={0.2 + index * 0.1}>
                  <Link href={`/trabajos/${project.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">Cliente: {project.client}</p>
                        <p className="text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vallas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vallasProjects.map((project, index) => (
                <AnimatedElement key={project.id} animation="scale" delay={0.2 + index * 0.1}>
                  <Link href={`/trabajos/${project.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">Cliente: {project.client}</p>
                        <p className="text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impresos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impresosProjects.map((project, index) => (
                <AnimatedElement key={project.id} animation="scale" delay={0.2 + index * 0.1}>
                  <Link href={`/trabajos/${project.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">Cliente: {project.client}</p>
                        <p className="text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transporte">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transporteProjects.map((project, index) => (
                <AnimatedElement key={project.id} animation="scale" delay={0.2 + index * 0.1}>
                  <Link href={`/trabajos/${project.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">Cliente: {project.client}</p>
                        <p className="text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <AnimatedElement animation="fadeIn" delay={0.6}>
          <div className="mt-16 bg-lightblue rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para crear su próximo proyecto?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos de marketing offline.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </>
  )
}
