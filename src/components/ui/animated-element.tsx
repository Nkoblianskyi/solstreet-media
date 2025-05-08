"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideRight" | "scale" | "bounce"
  delay?: number
  duration?: number
  once?: boolean
}

export function AnimatedElement({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimatedElementProps) {
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay,
        },
      },
    },
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={animations[animation]}
    >
      {children}
    </motion.div>
  )
}
