import { motion } from 'framer-motion'
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'

interface BarChartProps {
  data: {
    label: string
    before: number
    after: number
    change?: number
  }[]
  title?: string
  maxValue?: number
}

export function BarChart({ data, title, maxValue = 5 }: BarChartProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      )}
      
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></div>
          <span className="text-sm font-medium text-gray-700">قبلي</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
          <span className="text-sm font-medium text-gray-700">بعدي</span>
        </div>
      </div>

      <div className="space-y-5">
        {data.map((item, index) => {
          const changeValue = item.change ?? (item.after - item.before)
          const isPositive = changeValue > 0.05
          const isNegative = changeValue < -0.05
          const isNeutral = !isPositive && !isNegative
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/50 rounded-xl p-3 border border-gray-200"
            >
              {/* Label and Change */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800 text-sm">{item.label}</span>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full font-bold text-sm ${
                  isPositive ? 'bg-green-100 text-green-700' : 
                  isNegative ? 'bg-red-100 text-red-700' : 
                  'bg-gray-100 text-gray-600'
                }`}>
                  {isPositive && <ArrowUp className="w-4 h-4" />}
                  {isNegative && <ArrowDown className="w-4 h-4" />}
                  {isNeutral && <Minus className="w-4 h-4" />}
                  <span>{changeValue > 0 ? '+' : ''}{changeValue.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Bars Container */}
              <div className="relative">
                {/* Before Bar */}
                <div className="mb-2">
                  <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.before / maxValue) * 100}%` }}
                      transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-between px-3 shadow-md"
                    >
                      <span className="text-xs font-bold text-white opacity-80">قبلي</span>
                      <span className="text-sm font-black text-white">{item.before.toFixed(2)}</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* After Bar */}
                <div>
                  <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.after / maxValue) * 100}%` }}
                      transition={{ delay: index * 0.08 + 0.4, duration: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-between px-3 shadow-md"
                    >
                      <span className="text-xs font-bold text-white opacity-80">بعدي</span>
                      <span className="text-sm font-black text-white">{item.after.toFixed(2)}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
