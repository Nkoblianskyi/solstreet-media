import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getBlogPosts } from "../../../data/blog"
import { Button } from "../../../components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | SolStreet Media",
      description: "El artículo que busca no existe o ha sido movido.",
    }
  }

  return {
    title: `${post.title} | SolStreet Media`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Convertir el contenido Markdown a HTML (simplificado para este ejemplo)
  const contentHtml = post.content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
    .replace(/\*\*(.*)\*\*/gm, "<strong>$1</strong>")
    .replace(/\*(.*)\*/gm, "<em>$1</em>")
    .replace(/\n\n/gm, '</p><p class="mb-4">')
    .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc mb-2">$1</li>')

  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
            </Link>
          </Button>

          <h1 className="text-4xl font-bold">{post.title}</h1>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="h-4 w-4 mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: `<p class="mb-4">${contentHtml}</p>` }} />
            </div>
          </div>

          <div>
            <div className="bg-lightblue p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Artículos relacionados</h3>
              <div className="space-y-4">
                {getBlogPosts()
                  .filter((p) => p.category === post.category && p.id !== post.id)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <div key={relatedPost.id} className="flex gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Categorías</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(getBlogPosts().map((p) => p.category))).map((category) => (
                    <span key={category} className="bg-white px-3 py-1 rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">¿Necesita ayuda con su proyecto?</h3>
                <p className="text-gray-600 mb-4">
                  Contáctenos hoy mismo para discutir cómo podemos ayudarle con sus necesidades de marketing offline.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contacto">Contactar ahora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
