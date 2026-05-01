import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown } from 'lucide-react'

export default function DetailedResultsTable2Slide() {
  const challengesData = [
    {
      num: 1,
      item: 'قلة التدريب الموجّه يجعل تطبيق الأدوات الرقمية أمرًا صعبًا',
      before: { m: 3.58, sd: 1.38 },
      after: { m: 3.64, sd: 1.21 },
      change: { m: 0.06, sd: -0.17 }
    },
    {
      num: 2,
      item: 'ضعف الاتصال بالإنترنت يعيق تنفيذ الأنشطة الرقمية في الصف',
      before: { m: 3.67, sd: 1.50 },
      after: { m: 3.91, sd: 1.14 },
      change: { m: 0.24, sd: -0.36 }
    },
    {
      num: 3,
      item: 'قلة الأجهزة المتاحة تحد من قدرتي على تطبيق الأنشطة الرقمية',
      before: { m: 3.33, sd: 1.50 },
      after: { m: 3.64, sd: 1.29 },
      change: { m: 0.31, sd: -0.21 }
    },
    {
      num: 4,
      item: 'أواجه صعوبة في اختيار الأدوات الرقمية المناسبة لموضوع الدرس',
      before: { m: 2.67, sd: 1.07 },
      after: { m: 3.36, sd: 1.12 },
      change: { m: 0.69, sd: 0.05 }
    },
    {
      num: 5,
      item: 'أحتاج إلى دعم فني مستمر لاستخدام الأدوات الرقمية بكفاءة',
      before: { m: 2.92, sd: 1.16 },
      after: { m: 3.55, sd: 1.13 },
      change: { m: 0.63, sd: -0.03 }
    },
    {
      num: 6,
      item: 'ضيق الوقت أثناء الحصص الدراسية يمنعني من تنفيذ أنشطة رقمية',
      before: { m: 3.58, sd: 1.51 },
      after: { m: 4.25, sd: 1.06 },
      change: { m: 0.67, sd: -0.45 }
    },
    {
      num: 7,
      item: 'تفاوت مستوى مهارات الطالبات التقنية يمثل تحديًا في تطبيق الأنشطة الرقمية',
      before: { m: 3.67, sd: 1.15 },
      after: { m: 3.82, sd: 1.25 },
      change: { m: 0.15, sd: 0.10 }
    },
    {
      num: 8,
      item: 'قلة التعاون بين الزملاء تحد من تبادل الخبرات الرقمية داخل المدرسة',
      before: { m: 3.25, sd: 1.22 },
      after: { m: 2.82, sd: 1.47 },
      change: { m: -0.43, sd: 0.25 }
    }
  ]

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
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 mb-2">
              جدول (6): التحديات قبل وبعد التدريب
            </h2>
            <p className="text-sm text-gray-600 font-semibold">
              المتوسطات الحسابية والانحرافات المعيارية مع مقدار التغير (n=12)
            </p>
          </motion.div>

          {/* الجدول */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-orange-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-red-500 text-white">
                    <th className="p-3 text-center font-black border-l border-orange-400" style={{ width: '5%' }}>م</th>
                    <th className="p-3 text-right font-black border-l border-orange-400" style={{ width: '40%' }}>العبارة</th>
                    <th className="p-3 text-center font-black border-l border-orange-400" style={{ width: '15%' }}>
                      القبلي<br/>
                      <span className="text-xs font-normal">M (SD)</span>
                    </th>
                    <th className="p-3 text-center font-black border-l border-orange-400" style={{ width: '15%' }}>
                      البعدي<br/>
                      <span className="text-xs font-normal">M (SD)</span>
                    </th>
                    <th className="p-3 text-center font-black border-l border-orange-400" style={{ width: '12.5%' }}>
                      ΔM
                    </th>
                    <th className="p-3 text-center font-black" style={{ width: '12.5%' }}>
                      ΔSD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {challengesData.map((row, index) => (
                    <motion.tr
                      key={row.num}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className={`${index % 2 === 0 ? 'bg-orange-50/50' : 'bg-white/50'} hover:bg-orange-100/50 transition-colors`}
                    >
                      <td className="p-3 text-center font-bold text-gray-800 border-l border-gray-200">{row.num}</td>
                      <td className="p-3 text-right text-gray-700 font-semibold leading-tight border-l border-gray-200">
                        {row.item}
                      </td>
                      <td className="p-3 text-center font-bold text-gray-800 border-l border-gray-200">
                        {row.before.m.toFixed(2)}<br/>
                        <span className="text-xs text-gray-600">({row.before.sd.toFixed(2)})</span>
                      </td>
                      <td className="p-3 text-center font-bold text-gray-800 border-l border-gray-200">
                        {row.after.m.toFixed(2)}<br/>
                        <span className="text-xs text-gray-600">({row.after.sd.toFixed(2)})</span>
                      </td>
                      <td className={`p-3 text-center font-black border-l border-gray-200 ${
                        row.change.m < 0 ? 'text-green-600' : 
                        row.change.m > 0.5 ? 'text-red-600' : 
                        'text-orange-600'
                      }`}>
                        {row.change.m > 0 ? '+' : ''}{row.change.m.toFixed(2)}
                        {row.change.m < 0 && <TrendingDown className="w-3 h-3 inline ml-1" />}
                      </td>
                      <td className={`p-3 text-center font-bold ${
                        row.change.sd < 0 ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {row.change.sd > 0 ? '+' : ''}{row.change.sd.toFixed(2)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* الملاحظة */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-orange-50 border-r-4 border-orange-500 rounded-lg p-3"
          >
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-orange-700">ملاحظة:</strong> بالنسبة لعبارات التحديات، انخفاض المتوسط (ΔM سالب) يعني تحسناً (أي تراجع التحدي). 
              ΔSD السالب يعني زيادة اتفاق المعلمات على مستوى التحدي.
            </p>
          </motion.div>

          {/* النقاط الرئيسية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <h4 className="font-black text-red-800 text-sm">أكبر زيادة</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">اختيار الأدوات: <span className="text-red-600 font-black">+0.69</span></p>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                <h4 className="font-black text-orange-800 text-sm">زيادة ملحوظة</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">ضيق الوقت: <span className="text-orange-600 font-black">+0.67</span></p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4 text-green-600" />
                <h4 className="font-black text-green-800 text-sm">تحسن</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">التعاون: <span className="text-green-600 font-black">-0.43</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
