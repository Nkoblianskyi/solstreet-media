"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "./logo"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/", label: "Inicio" },
            { href: "/nosotros", label: "Nosotros" },
            { href: "/servicios", label: "Servicios" },
            { href: "/trabajos", label: "Trabajos" },
            { href: "/blog", label: "Blog" },
            { href: "/contacto", label: "Contacto" },
          ].map((item, i) => (
            <motion.div key={item.href} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
              <Link href={item.href} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button asChild>
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </motion.div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" onClick={closeMenu} className="text-lg font-medium hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link
                href="/nosotros"
                onClick={closeMenu}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/servicios"
                onClick={closeMenu}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/trabajos"
                onClick={closeMenu}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Trabajos
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Contacto
              </Link>
              <Button asChild className="mt-4">
                <Link href="/contacto" onClick={closeMenu}>
                  Solicitar presupuesto
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
