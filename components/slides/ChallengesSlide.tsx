import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react'
import { ColumnChart } from '@/components/charts'
import { InfoBox } from '@/components/ui/InfoBox'
import { Badge } from '@/components/ui/Badge'

export default function ChallengesSlide() {
  const challengesData = [
    {
      label: 'قلة التدريب الموجّه',
      before: 3.58,
      after: 3.64,
      change: 0.06
    },
    {
      label: 'ضعف الاتصال بالإنترنت',
      before: 3.67,
      after: 3.91,
      change: 0.24
    },
    {
      label: 'قلة الأجهزة المتاحة',
      before: 3.33,
      after: 3.64,
      change: 0.31
    },
    {
      label: 'صعوبة اختيار الأدوات المناسبة',
      before: 2.67,
      after: 3.36,
      change: 0.69
    },
    {
      label: 'الحاجة للدعم الفني المستمر',
      before: 2.92,
      after: 3.55,
      change: 0.63
    },
    {
      label: 'ضيق الوقت أثناء الحصص',
      before: 3.58,
      after: 4.25,
      change: 0.67
    },
    {
      label: 'تفاوت مهارات الطالبات',
      before: 3.67,
      after: 3.82,
      change: 0.15
    },
    {
      label: 'قلة التعاون بين الزملاء',
      before: 3.25,
      after: 2.82,
      change: -0.43
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
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              <Badge variant="info" size="lg">النتائج - التحديات</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
            >
              التحديات قبل وبعد التدريب
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl p-6 shadow-xl max-w-7xl mx-auto mb-8"
          >
            <ColumnChart data={challengesData} maxValue={5} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <InfoBox type="warning" title="أبرز التحديات" delay={0.8}>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>اختيار الأدوات:</strong> +0.69</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ضيق الوقت:</strong> +0.67</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>الدعم الفني:</strong> +0.63</span>
                  </li>
                </ul>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <InfoBox type="success" title="تحسن" delay={1.0}>
                <div className="flex items-start gap-2 text-sm">
                  <TrendingDown className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>التعاون:</strong> -0.43</span>
                </div>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <InfoBox type="info" title="التفسير" delay={1.2}>
                <p className="text-sm">
                  زيادة التحديات تعكس <strong>وعياً أكبر</strong> بالمتطلبات الحقيقية
                </p>
              </InfoBox>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
