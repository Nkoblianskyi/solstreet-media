import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "../../data/blog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | SolStreet Media",
  description: "Artículos y noticias sobre marketing offline, publicidad exterior y tendencias en el sector.",
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Blog</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Artículos y noticias sobre marketing offline, publicidad exterior y tendencias en el sector.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-xs bg-lightblue px-2 py-1 rounded-full text-primary">{post.category}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500">Por {post.author}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="p-0 h-auto">
                  <Link href={`/blog/${post.slug}`} className="flex items-center text-primary">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
