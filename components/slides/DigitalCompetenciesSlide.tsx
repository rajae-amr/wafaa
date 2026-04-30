import { motion } from 'framer-motion'
import { TrendingUp, Award } from 'lucide-react'
import { ColumnChart } from '@/components/charts'
import { InfoBox } from '@/components/ui/InfoBox'
import { Badge } from '@/components/ui/Badge'

export default function DigitalCompetenciesSlide() {
  const competenciesData = [
    {
      label: 'استخدام الأجهزة الرقمية بانتظام',
      before: 4.58,
      after: 4.58,
      change: 0.00
    },
    {
      label: 'توظيف المنصات التعليمية',
      before: 3.75,
      after: 4.33,
      change: 0.58
    },
    {
      label: 'تصميم دروس رقمية تفاعلية',
      before: 3.58,
      after: 4.42,
      change: 0.84
    },
    {
      label: 'استخدام الموارد الرقمية',
      before: 4.00,
      after: 4.08,
      change: 0.08
    },
    {
      label: 'أدوات التقييم الإلكتروني',
      before: 3.33,
      after: 4.33,
      change: 1.00
    },
    {
      label: 'التواصل مع الطالبات رقمياً',
      before: 3.08,
      after: 4.42,
      change: 1.34
    },
    {
      label: 'التواصل مع أولياء الأمور',
      before: 3.08,
      after: 3.75,
      change: 0.67
    },
    {
      label: 'التمكن من التكنولوجيا',
      before: 3.42,
      after: 4.67,
      change: 1.25
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
          className="space-y-6"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <TrendingUp className="w-8 h-8 text-green-600" />
              <Badge variant="success" size="lg">النتائج - الكفاءات الرقمية</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
            >
              مستوى الكفاءات الرقمية قبل وبعد التدريب
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl p-6 shadow-xl max-w-7xl mx-auto mb-8"
          >
            <ColumnChart data={competenciesData} maxValue={5} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <InfoBox type="success" title="أكبر التحسينات" delay={0.8}>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>التواصل الرقمي:</strong> +1.34</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>التمكن:</strong> +1.25</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>التقييم:</strong> +1.00</span>
                  </li>
                </ul>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <InfoBox type="info" title="ملاحظات" delay={1.0}>
                <ul className="space-y-2 text-sm">
                  <li>• الأجهزة: مرتفع أساساً (4.58)</li>
                  <li>• التدريب ركز على المنصات</li>
                  <li>• التطبيق عزز الثقة</li>
                </ul>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <InfoBox type="tip" title="الخلاصة" delay={1.2}>
                تحسن في <strong>7 من 8</strong> كفاءات رقمية
              </InfoBox>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
