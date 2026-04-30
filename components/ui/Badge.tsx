import { motion } from 'framer-motion'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'info'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Badge({ children, variant = 'primary', size = 'md', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
    secondary: 'bg-gradient-to-r from-sky-500 to-sky-600 text-white',
    success: 'bg-gradient-to-r from-green-500 to-green-600 text-white',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
        inline-flex items-center justify-center rounded-full font-semibold
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </motion.span>
  )
}

interface PulseBadgeProps {
  children: React.ReactNode
  color?: string
}

export function PulseBadge({ children, color = 'blue' }: PulseBadgeProps) {
  return (
    <div className="relative inline-flex">
      <span className={`absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${color}-400 opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 bg-${color}-500`}></span>
      </span>
      {children}
    </div>
  )
}
