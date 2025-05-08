"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

interface LogoProps {
  asLink?: boolean
}

export function Logo({ asLink = false }: LogoProps) {
  const LogoContent = (
    <>
      <motion.div
        className="text-secondary"
        initial={{ rotate: -45 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ rotate: -45, scale: 1.1 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.div>
      <motion.span
        className="text-xl font-bold text-primary"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SOLSTREET MEDIA
      </motion.span>
    </>
  )

  if (asLink) {
    return (
      <Link href="/" className="flex items-center space-x-2">
        {LogoContent}
      </Link>
    )
  }

  return <div className="flex items-center space-x-2">{LogoContent}</div>
}
