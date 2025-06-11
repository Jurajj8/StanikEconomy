"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedImageProps extends Omit<ImageProps, "ref"> {
  delay?: number
  duration?: number
  once?: boolean
  animation?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "float"
}

export function AnimatedImage({
  delay = 0,
  duration = 0.7,
  once = true,
  animation = "fadeIn",
  className,
  ...props
}: AnimatedImageProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const getAnimationVariants = () => {
    switch (animation) {
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        }
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        }
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        }
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        }
      case "float":
        return {
          hidden: { opacity: 0, y: 0 },
          visible: {
            opacity: 1,
            y: [0, -10, 0],
            transition: {
              opacity: { duration: 0.5, delay },
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay,
              },
            },
          },
        }
      case "fadeIn":
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants()}
      className={`relative overflow-hidden ${className}`}
    >
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${props.className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      />
    </motion.div>
  )
}
