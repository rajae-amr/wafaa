import { motion } from 'framer-motion'
import { Star, Award } from 'lucide-react'

export default function DetailedResultsTable3Slide() {
  const impactData = [
    {
      num: 1,
      item: 'البرنامج التدريبي زاد من قدرتي على تصميم دروس رقمية فعالة',
      m: 4.92,
      sd: 0.29
    },
    {
      num: 2,
      item: 'أصبحت استخدم أدوات رقمية جديدة بعد المشاركة في التدريب',
      m: 4.75,
      sd: 0.62
    },
    {
      num: 3,
      item: 'ساعدني التدريب على توظيف المنصات التعليمية لإدارة المحتوى بفعالية',
      m: 4.83,
      sd: 0.39
    },
    {
      num: 4,
      item: 'البرنامج التدريبي عزز ثقتي في استخدام التكنولوجيا داخل الصف',
      m: 4.83,
      sd: 0.39
    },
    {
      num: 5,
      item: 'أصبحت أستطيع تقييم تعلم الطالبات باستخدام أدوات إلكترونية',
      m: 4.83,
      sd: 0.39
    },
    {
      num: 6,
      item: 'البرنامج التدريبي زاد من قدرتي على التواصل الرقمي مع الطالبات وأولياء الأمور',
      m: 4.50,
      sd: 0.80
    },
    {
      num: 7,
      item: 'أصبح دمج الأدوات الرقمية في دروسي أكثر سهولة بعد التدريب',
      m: 4.83,
      sd: 0.39
    },
    {
      num: 8,
      item: 'بشكل عام، كان التدريب العملي أثر إيجابي في تطوير كفاءاتي الرقمية التعليمية',
      m: 4.83,
      sd: 0.39
    }
  ]

  const getStars = (value: number) => {
    if (value >= 4.8) return 5
    if (value >= 4.5) return 4
    return 3
  }

  return (
    <>
      <div className="slide-background" />
      <div className="slide-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* العنوان */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-2">
              جدول (7): أثر التدريب (القياس البعدي)
            </h2>
            <p className="text-sm text-gray-600 font-semibold">
              المتوسطات الحسابية والانحرافات المعيارية (n=12)
            </p>
          </motion.div>

          {/* الجدول */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-green-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
                    <th className="p-3 text-center font-black border-l border-green-400" style={{ width: '5%' }}>م</th>
                    <th className="p-3 text-right font-black border-l border-green-400" style={{ width: '55%' }}>العبارة</th>
                    <th className="p-3 text-center font-black border-l border-green-400" style={{ width: '15%' }}>
                      M
                    </th>
                    <th className="p-3 text-center font-black border-l border-green-400" style={{ width: '15%' }}>
                      SD
                    </th>
                    <th className="p-3 text-center font-black" style={{ width: '10%' }}>
                      التقييم
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {impactData.map((row, index) => {
                    const stars = getStars(row.m)
                    return (
                      <motion.tr
                        key={row.num}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        className={`${index % 2 === 0 ? 'bg-green-50/50' : 'bg-white/50'} hover:bg-green-100/50 transition-colors`}
                      >
                        <td className="p-3 text-center font-bold text-gray-800 border-l border-gray-200">{row.num}</td>
                        <td className="p-3 text-right text-gray-700 font-semibold leading-tight border-l border-gray-200">
                          {row.item}
                        </td>
                        <td className="p-3 text-center font-black text-green-700 text-lg border-l border-gray-200">
                          {row.m.toFixed(2)}
                        </td>
                        <td className="p-3 text-center font-bold text-gray-600 border-l border-gray-200">
                          {row.sd.toFixed(2)}
                        </td>
                        <td className="p-3 text-center border-gray-200">
                          <div className="flex justify-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* الملاحظة */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-green-50 border-r-4 border-green-500 rounded-lg p-3"
          >
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-green-700">ملاحظة:</strong> جميع القيم تشير إلى تقييم إيجابي مرتفع جداً للتدريب العملي، 
              مع انحرافات معيارية منخفضة تعكس اتفاقاً كبيراً بين المعلمات.
            </p>
          </motion.div>

          {/* النقاط الرئيسية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-emerald-600" />
                <h4 className="font-black text-emerald-800 text-sm">أعلى تقييم</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">تصميم دروس: <span className="text-emerald-600 font-black">4.92</span></p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-green-600" />
                <h4 className="font-black text-green-800 text-sm">المتوسط العام</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">جميع البنود: <span className="text-green-600 font-black">4.79</span></p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-blue-600" />
                <h4 className="font-black text-blue-800 text-sm">النطاق</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">من <span className="text-blue-600 font-black">4.50</span> إلى <span className="text-blue-600 font-black">4.92</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
