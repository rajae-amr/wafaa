import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function Card({ children, className = '', delay = 0, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`
        bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl p-6 shadow-lg
        ${hover ? 'hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  iconColor?: string
}

export function IconCard({ icon: Icon, title, description, delay = 0, iconColor = 'text-blue-500' }: IconCardProps) {
  return (
    <Card delay={delay}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-blue-50 rounded-xl">
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

interface StatCardProps {
  icon: LucideIcon
  value: string | number
  label: string
  delay?: number
  color?: string
}

export function StatCard({ icon: Icon, value, label, delay = 0, color = 'blue' }: StatCardProps) {
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    sky: 'text-sky-600 bg-sky-50',
    indigo: 'text-indigo-600 bg-indigo-50',
  }

  return (
    <Card delay={delay}>
      <div className="flex items-center gap-4">
        <div className={`p-3 ${colorClasses[color as keyof typeof colorClasses].split(' ')[1]} rounded-xl`}>
          <Icon className={`w-6 h-6 ${colorClasses[color as keyof typeof colorClasses].split(' ')[0]}`} />
        </div>
        <div>
          <div className={`text-3xl font-black ${colorClasses[color as keyof typeof colorClasses].split(' ')[0]}`}>
            {value}
          </div>
          <div className="text-sm text-gray-600 font-medium">{label}</div>
        </div>
      </div>
    </Card>
  )
}

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  points: string[]
  delay?: number
}

export function FeatureCard({ icon: Icon, title, points, delay = 0 }: FeatureCardProps) {
  return (
    <Card delay={delay}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        <ul className="space-y-2 text-right">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
