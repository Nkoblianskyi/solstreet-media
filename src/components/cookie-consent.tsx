"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setOpen(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Política de Cookies</DialogTitle>
          <DialogDescription>
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra
            política de cookies.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm text-gray-600">
          <p>
            Las cookies necesarias son esenciales para el funcionamiento del sitio web. Las cookies analíticas nos
            ayudan a mejorar nuestro sitio web analizando el comportamiento de los usuarios.
          </p>
          <p className="mt-2">
            Para más información, consulte nuestra{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={acceptNecessary}>
            Solo necesarias
          </Button>
          <Button onClick={acceptAll}>Aceptar todas</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
