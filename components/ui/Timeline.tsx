import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface TimelineItem {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

interface TimelineProps {
  items: TimelineItem[]
  delay?: number
}

export function Timeline({ items, delay = 0 }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const Icon = item.icon
        const itemDelay = delay + index * 0.15
        const color = item.color || 'blue'
        
        return (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: itemDelay, duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            {/* Icon Circle */}
            <div className="relative flex-shrink-0">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              {index < items.length - 1 && (
                <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-${color}-200`} />
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 bg-white/60 backdrop-blur-sm border border-blue-100 rounded-xl p-4 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
