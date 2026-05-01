import { motion } from 'framer-motion'
import { TrendingUp, ArrowUp } from 'lucide-react'

export default function DetailedResultsTable1Slide() {
  const competenciesData = [
    {
      num: 1,
      item: 'أستخدم الأجهزة الرقمية (مثل الحاسب اللوحي أو الحاسوب) في دروسي بانتظام',
      before: { m: 4.58, sd: 0.67 },
      after: { m: 4.58, sd: 0.79 },
      change: { m: 0.00, sd: 0.12 }
    },
    {
      num: 2,
      item: 'أوظف المنصات التعليمية الرقمية في إدارة محتوى التعلم',
      before: { m: 3.75, sd: 1.29 },
      after: { m: 4.33, sd: 0.98 },
      change: { m: 0.58, sd: -0.31 }
    },
    {
      num: 3,
      item: 'أتمكن من تصميم دروس رقمية باستخدام أدوات تفاعلية',
      before: { m: 3.58, sd: 1.44 },
      after: { m: 4.42, sd: 1.00 },
      change: { m: 0.84, sd: -0.44 }
    },
    {
      num: 4,
      item: 'أستخدم الموارد الرقمية (مثل الفيديوهات التعليمية) لدعم تعلم الطالبات',
      before: { m: 4.00, sd: 1.41 },
      after: { m: 4.08, sd: 1.08 },
      change: { m: 0.08, sd: -0.33 }
    },
    {
      num: 5,
      item: 'أجيد استخدام أدوات التقييم الإلكتروني لقياس تعلم الطالبات',
      before: { m: 3.33, sd: 1.50 },
      after: { m: 4.33, sd: 0.98 },
      change: { m: 1.00, sd: -0.52 }
    },
    {
      num: 6,
      item: 'أتمكن من التواصل مع الطالبات عبر الوسائط الرقمية بفاعلية',
      before: { m: 3.08, sd: 1.31 },
      after: { m: 4.42, sd: 0.90 },
      change: { m: 1.34, sd: -0.41 }
    },
    {
      num: 7,
      item: 'أستخدم التكنولوجيا لتسهيل التواصل مع أولياء الأمور',
      before: { m: 3.08, sd: 1.51 },
      after: { m: 3.75, sd: 1.22 },
      change: { m: 0.67, sd: -0.29 }
    },
    {
      num: 8,
      item: 'أشعر بأنني متمكنة من استخدام التكنولوجيا لدعم مهامي التعليمية والإدارية',
      before: { m: 3.42, sd: 1.24 },
      after: { m: 4.67, sd: 0.49 },
      change: { m: 1.25, sd: -0.75 }
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
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-2">
              جدول (5): الكفاءات الرقمية قبل وبعد التدريب
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
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-blue-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
                    <th className="p-3 text-center font-black border-l border-blue-400" style={{ width: '5%' }}>م</th>
                    <th className="p-3 text-right font-black border-l border-blue-400" style={{ width: '40%' }}>العبارة</th>
                    <th className="p-3 text-center font-black border-l border-blue-400" style={{ width: '15%' }}>
                      القبلي<br/>
                      <span className="text-xs font-normal">M (SD)</span>
                    </th>
                    <th className="p-3 text-center font-black border-l border-blue-400" style={{ width: '15%' }}>
                      البعدي<br/>
                      <span className="text-xs font-normal">M (SD)</span>
                    </th>
                    <th className="p-3 text-center font-black border-l border-blue-400" style={{ width: '12.5%' }}>
                      ΔM
                    </th>
                    <th className="p-3 text-center font-black" style={{ width: '12.5%' }}>
                      ΔSD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competenciesData.map((row, index) => (
                    <motion.tr
                      key={row.num}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className={`${index % 2 === 0 ? 'bg-blue-50/50' : 'bg-white/50'} hover:bg-blue-100/50 transition-colors`}
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
                        row.change.m > 0.5 ? 'text-green-600' : 
                        row.change.m > 0 ? 'text-blue-600' : 
                        'text-gray-600'
                      }`}>
                        {row.change.m > 0 ? '+' : ''}{row.change.m.toFixed(2)}
                        {row.change.m > 0.5 && <ArrowUp className="w-3 h-3 inline ml-1" />}
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
            className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-3"
          >
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-blue-700">ملاحظة:</strong> ΔM = المتوسط البعدي – المتوسط القبلي (القيمة الموجبة تعني تحسناً)، 
              ΔSD = الانحراف المعياري البعدي – الانحراف المعياري القبلي (القيمة السالبة تعني زيادة الاتفاق).
            </p>
          </motion.div>

          {/* النقاط الرئيسية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <h4 className="font-black text-green-800 text-sm">أكبر تحسن</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">التواصل الرقمي: <span className="text-green-600 font-black">+1.34</span></p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <h4 className="font-black text-blue-800 text-sm">تحسن ملحوظ</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">التمكن التكنولوجي: <span className="text-blue-600 font-black">+1.25</span></p>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <h4 className="font-black text-purple-800 text-sm">تحسن جيد</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">التقييم الإلكتروني: <span className="text-purple-600 font-black">+1.00</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
