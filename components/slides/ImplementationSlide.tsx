import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Lightbulb, FileText, Video, ClipboardCheck, Presentation, Award } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function ImplementationSlide() {
  const trainingSessions = [
    {
      number: String(1),
      icon: Lightbulb,
      title: 'مدخل مفاهيمي للذكاء الاصطناعي',
      description: 'تقديم مفاهيم الذكاء الاصطناعي في التعليم ودوره في تخطيط الدروس',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: String(2),
      icon: FileText,
      title: 'إنشاء المحتوى النصي',
      description: 'التدريب على استخدام نماذج لغوية لإعداد خطط الدروس والأنشطة',
      color: 'from-green-500 to-green-600'
    },
    {
      number: String(3),
      icon: Video,
      title: 'المحتوى المرئي والصوتي',
      description: 'تحويل النصوص إلى فيديوهات تعليمية وشخصيات افتراضية ناطقة',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: String(4),
      icon: ClipboardCheck,
      title: 'تصميم أدوات التقييم',
      description: 'بناء اختبارات إلكترونية وتحليل نتائج الطلبة آلياً',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: String(5),
      icon: Presentation,
      title: 'التدريس المصغّر',
      description: 'تنفيذ دروس قصيرة مع تغذية راجعة تفصيلية',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      number: String(6),
      icon: Award,
      title: 'التقييم الختامي',
      description: 'تقييم التطور ووضع خطة مهنية للاستدامة',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  const programDetails = [
    { icon: Calendar, label: 'مدة البرنامج', value: 'شهر ونصف', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, label: 'عدد الجلسات', value: String(6) + ' جلسات', color: 'from-green-500 to-green-600' },
    { icon: Users, label: 'الساعات التدريبية', value: String(12) + ' ساعة', color: 'from-purple-500 to-purple-600' }
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
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-6"
          >
            إجراءات التطبيق (البرنامج التدريبي)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {programDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card delay={0.5 + index * 0.1}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${detail.color} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{detail.label}</p>
                        <p className="text-xl font-bold text-gray-800">{detail.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <InfoBox type="info" title="البرنامج التدريبي" delay={0.8}>
              <p className="text-sm">
                برنامج تعزيز الكفاءات الرقمية باستخدام أدوات الذكاء الاصطناعي - منهجية التعلم المهني القائم على التطبيق العملي
              </p>
            </InfoBox>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingSessions.map((session, index) => {
              const Icon = session.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <Card delay={1.0 + index * 0.1} className="h-full">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${session.color} rounded-xl flex items-center justify-center`}>
                          <span className="text-lg font-black text-white">{session.number}</span>
                        </div>
                        <div className={`p-2 bg-gradient-to-br ${session.color} rounded-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{session.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{session.description}</p>
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
