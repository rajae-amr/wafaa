import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function ResultsSummarySlide() {
  const summaryData = [
    {
      title: 'الكفاءات الرقمية',
      icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      stats: [
        { label: 'ارتفاع في المتوسطات', value: '7/8 عبارات' },
        { label: 'ثبات في المتوسطات', value: '1/8 عبارة' },
        { label: 'زيادة الاتفاق', value: '7/8 عبارات' }
      ],
      note: 'تحسن ملحوظ في جميع الكفاءات باستثناء الاستخدام المنتظم للأجهزة الذي كان مرتفعاً أساساً'
    },
    {
      title: 'التحديات',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      stats: [
        { label: 'ارتفاع في المتوسطات', value: '7/8 عبارات' },
        { label: 'انخفاض في المتوسطات', value: '1/8 عبارة' },
        { label: 'زيادة الاتفاق', value: '5/8 عبارات' }
      ],
      note: 'زيادة التحديات تعكس وعياً أكبر بالمتطلبات الحقيقية للتطبيق الرقمي'
    },
    {
      title: 'أثر التدريب',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      stats: [
        { label: 'نطاق التقييمات', value: '4.50 - 4.92' },
        { label: 'الانحراف المعياري', value: '0.29 - 0.80' },
        { label: 'مستوى الاتفاق', value: 'مرتفع جداً' }
      ],
      note: 'إجماع عالٍ على فعالية التدريب في تعزيز الكفاءات الرقمية'
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
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <Badge variant="primary" size="lg">ملخص النتائج</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
            >
              ملخص اتجاهات التغير (القبلي - البعدي)
            </motion.h2>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {summaryData.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <Card delay={0.5 + index * 0.15} className="h-full">
                    <div className="space-y-4">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>

                      {/* Stats */}
                      <div className="space-y-2">
                        {item.stats.map((stat, idx) => (
                          <div key={idx} className={`${item.bgColor} rounded-lg p-3`}>
                            <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                            <p className="text-lg font-black text-gray-800">{stat.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Note */}
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600 leading-relaxed">{item.note}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Key Findings */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="max-w-5xl mx-auto"
          >
            <Card delay={1.0} className="bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">النتائج الرئيسية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>أكبر التحسينات:</strong> التواصل الرقمي (+1.34)، التمكن من التكنولوجيا (+1.25)، التقييم الإلكتروني (+1.00)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p><strong>التحديات الأبرز:</strong> صعوبة اختيار الأدوات (+0.69)، ضيق الوقت (+0.67)، الحاجة للدعم الفني (+0.63)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p><strong>تحسن التعاون:</strong> انخفاض تحدي قلة التعاون بين الزملاء (-0.43) بفضل التدريب الجماعي</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p><strong>رضا عالٍ:</strong> جميع تقييمات أثر التدريب بين 4.50-4.92 مع اتفاق كبير بين المعلمات</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
