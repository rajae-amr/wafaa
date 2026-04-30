import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Headphones, Users } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function RecommendationsSlide() {
  const recommendations = [
    {
      number: String(1),
      icon: TrendingUp,
      title: 'توسيع نطاق التدريب',
      text: 'توسيع نطاق هذا النوع من التدريب ليشمل معلمات المراحل الأخرى، مع التركيز على الجوانب العملية التطبيقية. تنفيذ برامج تدريبية متدرجة تراعي اختلاف مستويات الكفاءة الرقمية بين المعلمات.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: String(2),
      icon: Headphones,
      title: 'الدعم الفني المستمر',
      text: 'إنشاء فريق دعم فني متواجد باستمرار في المدرسة، أو تخصيص حصص أسبوعية لمساعدة المعلمات في تطبيق المهارات الجديدة، نظراً لارتفاع الحاجة إلى الدعم الفني بعد التدريب.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: String(3),
      icon: Users,
      title: 'تشجيع التعاون والبحث',
      text: 'إنشاء منصة رقمية للموارد والدروس التفاعلية، ومنتديات لتبادل الخبرات بين المعلمات. تشجيع البحوث المستقبلية التي تدمج بين الأساليب الكمية والنوعية للحصول على نتائج أكثر عمقاً وشمولاً.',
      color: 'from-purple-500 to-purple-600'
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
          className="space-y-8 max-w-7xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              <Badge variant="primary" size="lg">توصيات البحث</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
            >
              التوصيات
            </motion.h2>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon
              return (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                >
                  <Card delay={0.6 + index * 0.2}>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${rec.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <span className="text-3xl font-black text-white">{rec.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-gradient-to-br ${rec.color} rounded-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">{rec.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-right">
                          {rec.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </>
  )
}
