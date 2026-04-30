import { motion } from 'framer-motion'
import { FileText, Calendar, Users, CheckCircle, ClipboardList } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function DataCollectionSlide() {
  const toolDetails = [
    {
      icon: FileText,
      title: 'نوع الأداة',
      description: 'استبانة إلكترونية',
      value: String(24) + ' بنداً',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ClipboardList,
      title: 'المحاور الرئيسية',
      description: String(3) + ' محاور',
      value: 'مقياس ليكرت الخماسي',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'معامل الثبات',
      description: 'ألفا كرونباخ',
      value: String(0.89),
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const mainAxes = [
    {
      title: 'واقع الكفاءات الرقمية قبل التدريب',
      items: String(8) + ' بنود',
      example: 'أمتلك القدرة على استخدام الأدوات الرقمية في تخطيط الدروس',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'التحديات في توظيف الأدوات الرقمية',
      items: String(8) + ' بنود',
      example: 'أواجه صعوبة في اختيار أداة رقمية مناسبة للأهداف التعليمية',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'أثر التدريب في تعزيز الكفاءات الرقمية',
      items: String(8) + ' بنود',
      example: 'أسهم البرنامج التدريبي في تحسين توظيفي للأدوات الرقمية',
      color: 'from-green-500 to-green-600'
    }
  ]

  const applicationSteps = [
    {
      phase: 'القياس القبلي',
      timing: 'قبل البرنامج التدريبي',
      purpose: 'تحديد مستوى الكفاءات الرقمية الأولي',
      color: 'from-orange-500 to-orange-600'
    },
    {
      phase: 'القياس البعدي',
      timing: 'بعد انتهاء البرنامج التدريبي',
      purpose: 'قياس أثر البرنامج التدريبي على الكفاءات',
      color: 'from-green-500 to-green-600'
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
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-6"
          >
            أداة جمع البيانات
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card delay={0.5 + index * 0.1} className="h-full">
                    <div className="space-y-4 text-center">
                      <div className={`p-4 bg-gradient-to-br ${detail.color} rounded-2xl mx-auto w-fit`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{detail.title}</h3>
                      <p className="text-gray-700">{detail.description}</p>
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        {detail.value}
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
            transition={{ delay: 0.8 }}
          >
            <InfoBox type="info" title="كيف تم استخدام الأداة" delay={0.8}>
              <p className="text-sm">
                تم تطبيق الاستبانة الإلكترونية على المعلمات في مرحلتين: <strong>قبل البرنامج التدريبي</strong> لتحديد المستوى الأولي، 
                و<strong>بعد البرنامج التدريبي</strong> لقياس التحسن والتطور في الكفاءات الرقمية.
              </p>
            </InfoBox>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 + index * 0.2 }}
              >
                <Card delay={1.0 + index * 0.2} className="h-full">
                  <div className="space-y-4">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${step.color} rounded-full`}>
                      <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-600">التوقيت:</p>
                          <p className="text-gray-800">{step.timing}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-600">الهدف:</p>
                          <p className="text-gray-800">{step.purpose}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800">المحاور الرئيسية للاستبانة</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mainAxes.map((axis, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.15 }}
                >
                  <Card delay={1.6 + index * 0.15} className="h-full">
                    <div className="space-y-4">
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${axis.color} rounded-full`}>
                        <p className="text-white font-bold">{axis.items}</p>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">{axis.title}</h4>
                      <div className="bg-gray-50 p-3 rounded-lg border-r-4 border-blue-500">
                        <p className="text-sm text-gray-600 italic">مثال: "{axis.example}"</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
