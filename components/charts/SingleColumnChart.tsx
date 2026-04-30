import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface SingleColumnChartProps {
  data: {
    label: string
    value: number
  }[]
  title?: string
  maxValue?: number
}

export function SingleColumnChart({ data, title, maxValue = 5 }: SingleColumnChartProps) {
  // حساب النطاق الديناميكي لإظهار الفروق
  const allValues = data.map(item => item.value)
  const minValue = Math.min(...allValues)
  const maxDataValue = Math.max(...allValues)
  
  const dynamicMin = minValue - 0.3
  const dynamicMax = maxDataValue + 0.2
  const valueRange = dynamicMax - dynamicMin
  
  const getHeight = (value: number) => {
    if (valueRange === 0) return 50
    const normalizedValue = (value - dynamicMin) / valueRange
    const percentage = normalizedValue * 100
    return Math.max(10, Math.min(100, percentage))
  }

  const getColor = (value: number) => {
    if (value >= 4.8) return 'from-emerald-500 to-emerald-600'
    if (value >= 4.7) return 'from-green-500 to-green-600'
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
      
      {/* مؤشر النطاق */}
      <div className="text-center mb-4">
        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          النطاق: {dynamicMin.toFixed(1)} - {dynamicMax.toFixed(1)}
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => {
          const stars = getStars(item.value)
          const heightPercentage = getHeight(item.value)
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/50 rounded-xl p-3 border border-gray-200"
            >
              {/* Stars */}
              <div className="flex justify-center gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Value Badge */}
              <div className="flex justify-center mb-3">
                <div className={`px-4 py-1.5 rounded-full font-black text-xl bg-gradient-to-r ${getColor(item.value)} text-white shadow-lg`}>
                  {item.value.toFixed(2)}
                </div>
              </div>

              {/* Column */}
              <div className="flex flex-col items-center mb-3 relative" style={{ height: '180px' }}>
                <div className="w-full flex-1 flex items-end justify-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(heightPercentage / 100) * 180}px` }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: "easeOut" }}
                    className={`w-full bg-gradient-to-t ${getColor(item.value)} rounded-t-lg shadow-lg relative flex flex-col items-center justify-end pb-2 px-1`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <Star className="w-6 h-6 fill-white text-white" />
                      <span className="text-sm font-black text-white">{item.value.toFixed(2)}</span>
                      <span className="text-xs font-bold text-white opacity-75">{((item.value / maxValue) * 100).toFixed(0)}%</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Label */}
              <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                {item.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
