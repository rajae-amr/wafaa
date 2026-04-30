import { motion } from 'framer-motion'
import { GraduationCap, Heart, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react'
import { PRESENTER_INFO } from '@/constants/slides'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function ConclusionSlide() {
  const keyPoints = [
    {
      icon: CheckCircle,
      title: 'فاعلية التدريب العملي',
      text: 'تقديم أدلة كمية على فاعلية التدريب العملي في تعزيز الكفاءات الرقمية لمعلمات الحلقة الثالثة',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'التدريب كعملية تحول',
      text: 'التدريب ليس مجرد نقل مهارات، وإنما عملية تحول في التصورات والممارسات تتطلب دعماً مستمراً',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'التحول الرقمي المتكامل',
      text: 'نجاح التحول الرقمي يعتمد على تكامل التدريب الفعال مع الدعم المؤسسي والمتابعة المستمرة',
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              الخاتمة
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                >
                  <Card delay={0.5 + index * 0.15} className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-br ${point.color} rounded-xl shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{point.title}</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-right">
                        {point.text}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <InfoBox type="success" title="الرسالة الختامية" delay={1.0}>
              <p className="text-sm leading-relaxed">
                تمثل هذه الدراسة <strong>خطوة عملية نحو تطوير التعليم الرقمي القائم على الأدلة</strong>. 
                الاستثمار في التنمية المهنية الرقمية للمعلمين يمثل خطوة أساسية نحو <strong>تعليم أكثر جودة وابتكاراً</strong> 
                واستجابة لمتطلبات المستقبل.
              </p>
            </InfoBox>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Card delay={1.2} className="bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="text-center space-y-6">
                <h3 className="text-4xl font-bold text-gray-800">شكراً لحسن استماعكم</h3>
                <div className="flex gap-4 justify-center">
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-xl text-blue-600 font-bold mb-2">الباحثة: {PRESENTER_INFO.name}</p>
                  <p className="text-lg text-gray-700">إشراف: {PRESENTER_INFO.supervisor}</p>
                  <p className="text-sm text-gray-600 mt-4">مجمع زايد التعليمي - الخران • {String(2026)}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
