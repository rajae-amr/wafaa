import { motion } from 'framer-motion'
import { LucideIcon, Info, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react'

interface InfoBoxProps {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'success' | 'tip'
  icon?: LucideIcon
  title?: string
  delay?: number
}

export function InfoBox({ children, type = 'info', icon, title, delay = 0 }: InfoBoxProps) {
  const types = {
    info: {
      bg: 'bg-blue-50 border-blue-200',
      icon: Info,
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-800',
    },
    warning: {
      bg: 'bg-amber-50 border-amber-200',
      icon: AlertCircle,
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-800',
    },
    success: {
      bg: 'bg-green-50 border-green-200',
      icon: CheckCircle,
      iconColor: 'text-green-600',
      titleColor: 'text-green-800',
    },
    tip: {
      bg: 'bg-purple-50 border-purple-200',
      icon: Lightbulb,
      iconColor: 'text-purple-600',
      titleColor: 'text-purple-800',
    },
  }

  const config = types[type]
  const IconComponent = icon || config.icon

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`${config.bg} border rounded-xl p-4 backdrop-blur-sm`}
    >
      <div className="flex gap-3">
        <IconComponent className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          {title && (
            <h4 className={`font-bold mb-2 ${config.titleColor}`}>{title}</h4>
          )}
          <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}
