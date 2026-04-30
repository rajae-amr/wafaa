import { motion } from 'framer-motion'
import { FileSearch, Users, BarChart3, Calendar, ClipboardList } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { InfoBox } from '@/components/ui/InfoBox'

export default function MethodologySlide() {
  const methodologyDetails = [
    {
      icon: FileSearch,
      title: 'نوع البحث',
      value: 'بحث إجرائي',
      description: 'تصميم قبلي - بعدي',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'العينة',
      value: String(12) + ' معلمة',
      description: 'من الحلقة الثالثة - مجمع زايد التعليمي (الخران)',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ClipboardList,
      title: 'الأداة',
      value: 'استبانة إلكترونية',
      description: '5 محاور للكفاءات الرقمية',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'التطبيق',
      value: 'قبلي وبعدي',
      description: 'قبل وبعد البرنامج التدريبي (4 أسابيع)',
      color: 'from-orange-500 to-orange-600'
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
              <Badge variant="primary" size="lg">منهجية البحث</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
            >
              منهجية البحث
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyDetails.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card delay={0.6 + index * 0.1} className="h-full text-center">
                    <div className="space-y-4">
                      <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl mx-auto w-fit`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-600">{item.description}</p>
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
            <InfoBox type="info" title="التحليل الإحصائي" delay={1.0}>
              <p className="text-sm">
                تم استخدام <strong>المتوسطات الحسابية والانحرافات المعيارية</strong> لتحليل البيانات الكمية، 
                مع مقارنة النتائج بين القياس القبلي والبعدي لقياس أثر البرنامج التدريبي على الكفاءات الرقمية.
              </p>
            </InfoBox>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
