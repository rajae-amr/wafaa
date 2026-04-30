import { motion } from 'framer-motion'
import Image from 'next/image'

interface SlideLogoProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
}

export default function SlideLogo({ position = 'top-right', size = 'md' }: SlideLogoProps) {
  const positions = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  }

  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`fixed ${positions[position]} z-50`}
    >
      <div className={`${sizes[size]} relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-2 border border-blue-100`}>
        <Image
          src="/slide_logo.PNG"
          alt="Logo"
          fill
          className="object-contain p-1"
        />
      </div>
    </motion.div>
  )
}
