import { motion } from 'framer-motion'
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'

interface ColumnChartProps {
  data: {
    label: string
    before: number
    after: number
    change?: number
  }[]
  title?: string
  maxValue?: number
}

export function ColumnChart({ data, title, maxValue = 5 }: ColumnChartProps) {
  // حساب النطاق الديناميكي لإظهار الفروق بشكل أوضح
  const allValues = data.flatMap(item => [item.before, item.after])
  const minValue = Math.min(...allValues)
  const maxDataValue = Math.max(...allValues)
  
  // استخدام نطاق ضيق جداً يبدأ من أقل قيمة مباشرة
  const dynamicMin = minValue - 0.5 // نبدأ من أقل قيمة - 0.5
  const dynamicMax = maxDataValue + 0.3 // نضيف 0.3 فوق أعلى قيمة
  const valueRange = dynamicMax - dynamicMin
  
  // دالة لحساب ارتفاع العمود - نستخدم النسبة المئوية من النطاق
  const getHeight = (value: number) => {
    if (valueRange === 0) return 50 // تجنب القسمة على صفر
    const normalizedValue = (value - dynamicMin) / valueRange
    const percentage = normalizedValue * 100
    return Math.max(10, Math.min(100, percentage)) // بين 10% و 100%
  }

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      )}
      
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-b from-orange-400 to-orange-500 rounded"></div>
          <span className="text-sm font-medium text-gray-700">قبلي</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-b from-green-500 to-green-600 rounded"></div>
          <span className="text-sm font-medium text-gray-700">بعدي</span>
        </div>
      </div>

      {/* مؤشر النطاق */}
      <div className="text-center mb-4">
        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          النطاق: {dynamicMin.toFixed(1)} - {dynamicMax.toFixed(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => {
          const changeValue = item.change ?? (item.after - item.before)
          const changePercentage = item.before > 0 ? ((changeValue / item.before) * 100) : 0
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
              {/* Change Badge */}
              <div className="flex justify-center mb-2">
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full font-bold text-xs ${
                  isPositive ? 'bg-green-100 text-green-700' : 
                  isNegative ? 'bg-red-100 text-red-700' : 
                  'bg-gray-100 text-gray-600'
                }`}>
                  {isPositive && <ArrowUp className="w-3 h-3" />}
                  {isNegative && <ArrowDown className="w-3 h-3" />}
                  {isNeutral && <Minus className="w-3 h-3" />}
                  <span>{changePercentage > 0 ? '+' : ''}{changePercentage.toFixed(1)}%</span>
                </div>
              </div>

              {/* Columns Container */}
              <div className="flex items-end justify-center gap-2 mb-3 relative" style={{ height: '192px' }}>
                {/* خط الأساس */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
                
                {/* Before Column */}
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(getHeight(item.before) / 100) * 192}px` }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg shadow-lg relative flex items-end justify-center pb-1"
                  >
                    <span className="text-xs font-black text-white">{item.before.toFixed(2)}</span>
                  </motion.div>
                  <span className="text-xs text-gray-500 mt-1 font-medium">قبلي</span>
                </div>
                
                {/* After Column */}
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(getHeight(item.after) / 100) * 192}px` }}
                    transition={{ delay: index * 0.08 + 0.4, duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-gradient-to-t from-green-600 to-green-500 rounded-t-lg shadow-lg relative flex items-end justify-center pb-1"
                  >
                    <span className="text-xs font-black text-white">{item.after.toFixed(2)}</span>
                  </motion.div>
                  <span className="text-xs text-gray-500 mt-1 font-medium">بعدي</span>
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
