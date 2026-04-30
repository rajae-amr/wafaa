import { motion } from 'framer-motion'
import { TrendingUp, Award, Target, BarChart3 } from 'lucide-react'
import { StatCard } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function ResultsSlide() {
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
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-8"
          >
            النتائج الرئيسية
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StatCard
              icon={Award}
              value="4.92"
              label="المتوسط العام"
              delay={0.5}
              color="blue"
            />
            <StatCard
              icon={TrendingUp}
              value="98%"
              label="نسبة الكفاءة"
              delay={0.6}
              color="green"
            />
            <StatCard
              icon={Target}
              value="12"
              label="معلمة مشاركة"
              delay={0.7}
              color="sky"
            />
            <StatCard
              icon={BarChart3}
              value="5"
              label="محاور رئيسية"
              delay={0.8}
              color="indigo"
            />
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <InfoBox type="success" title="نتيجة إيجابية" delay={1.0}>
              أظهرت النتائج مستوى عالٍ من الكفاءة الرقمية لدى المعلمات بمتوسط 4.92 من 5
            </InfoBox>

            <InfoBox type="info" title="ملاحظة مهمة" delay={1.1}>
              تفوقت المعلمات في مجالات التواصل الرقمي وإنشاء المحتوى التعليمي
            </InfoBox>

            <InfoBox type="tip" title="توصية" delay={1.2}>
              يُنصح بتعزيز مهارات حل المشكلات التقنية والأمن السيبراني
            </InfoBox>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
