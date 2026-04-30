import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface HorizontalBarChartProps {
  data: {
    label: string
    value: number
    color?: string
  }[]
  title?: string
  maxValue?: number
}

export function HorizontalBarChart({ data, title, maxValue = 5 }: HorizontalBarChartProps) {
  const getColor = (value: number) => {
    if (value >= 4.8) return 'from-green-500 to-green-600'
    if (value >= 4.5) return 'from-blue-500 to-blue-600'
    if (value >= 4.0) return 'from-indigo-500 to-indigo-600'
    return 'from-purple-500 to-purple-600'
  }

  const getStars = (value: number) => {
    if (value >= 4.8) return 5
    if (value >= 4.5) return 4
    if (value >= 4.0) return 3
    return 2
  }

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      )}
      <div className="space-y-4">
        {data.map((item, index) => {
          const stars = getStars(item.value)
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className="bg-white/50 rounded-xl p-3 border border-gray-200"
            >
              {/* Label and Value */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-800 flex-1 text-right pr-2">
                  {item.label}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-black text-blue-600 min-w-[3rem] text-center">
                    {item.value.toFixed(2)}
                  </span>
                </div>
              </div>
              
              {/* Bar */}
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value / maxValue) * 100}%` }}
                  transition={{ delay: index * 0.06 + 0.2, duration: 0.6, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${item.color || getColor(item.value)} shadow-md flex items-center justify-end px-2`}
                >
                  <span className="text-xs font-bold text-white">{((item.value / maxValue) * 100).toFixed(0)}%</span>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
