import { motion } from 'framer-motion'
import { AnimatedSlideProps } from '@/types'

export default function AnimatedSlide({ children, isActive, slideKey, className = '' }: AnimatedSlideProps) {
  return (
    <motion.div
      key={slideKey}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -100 }}
      exit={{ opacity: 0, x: -100 }}
      className={`slide ${isActive ? 'active' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
