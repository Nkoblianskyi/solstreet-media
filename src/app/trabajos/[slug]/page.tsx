import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Building, Tag, MapPin, Quote } from "lucide-react"
import { getProjectBySlug, getProjects } from "../../../data/projects"
import { AnimatedElement } from "../../../components/ui/animated-element"
import type { Metadata } from "next"

interface WorkPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | SolStreet Media",
      description: "El proyecto que busca no existe o ha sido movido.",
    }
  }

  return {
    title: `${project.title} | SolStreet Media`,
    description: project.description,
  }
}

export default function WorkPage({ params }: WorkPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // Obtener proyectos relacionados (misma categoría, excluyendo el actual)
  const relatedProjects = getProjects()
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2)

  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/trabajos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a trabajos
            </Link>
          </Button>

          <AnimatedElement animation="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center text-gray-600">
                <Building className="h-5 w-5 mr-2 text-primary" />
                <span>Cliente: {project.client}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>Fecha: {project.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>Ubicación: {project.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="h-5 w-5 mr-2 text-primary" />
                <span>Categoría: {project.category}</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedElement animation="fadeIn" delay={0.3}>
              <div className="relative h-[500px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.4}>
              <div className="prose max-w-none">
                <p className="text-lg">{project.description}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">El Desafío</h2>
                <p>{project.challenge}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Nuestra Solución</h2>
                <p>{project.solution}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Resultados</h2>
                <p>{project.results}</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.5}>
              <div className="mt-12 bg-lightblue p-8 rounded-lg">
                <div className="flex items-start">
                  <Quote className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-lg italic mb-4">{project.testimonial.quote}</p>
                    <p className="font-bold">{project.testimonial.author}</p>
                    <p className="text-gray-600">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div>
            <AnimatedElement animation="slideRight" delay={0.4}>
              <div className="bg-lightblue p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Servicios Proporcionados</h3>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {relatedProjects.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Proyectos Relacionados</h3>
                    <div className="space-y-4">
                      {relatedProjects.map((relatedProject) => (
                        <Link
                          key={relatedProject.id}
                          href={`/trabajos/${relatedProject.slug}`}
                          className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <h4 className="font-medium text-primary">{relatedProject.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{relatedProject.client}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">¿Interesado en un proyecto similar?</h3>
                  <p className="text-gray-600 mb-4">
                    Contáctenos hoy mismo para discutir cómo podemos ayudarle con sus necesidades de marketing offline.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contacto">Solicitar presupuesto</Link>
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </>
  )
}
