import { motion } from 'framer-motion'
import { Users, Building2, GraduationCap, BookOpen, Globe, Lightbulb, Target, Award } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function ImportanceSlide() {
  const beneficiaries = [
    {
      icon: Building2,
      title: 'صانعو القرار',
      text: 'تصميم البرامج التدريبية وتطوير استراتيجيات تعزيز الكفاءات الرقمية، مما يسهم في تحسين جودة التعليم ورفع مستوى الأداء المؤسسي.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'المعلمات',
      text: 'توصيات عملية وبرامج تدريبية تسهم في تطوير مهاراتهن الرقمية، وتمكينهن من توظيف التكنولوجيا بفاعلية في الصفوف الدراسية.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'الطلبة',
      text: 'تحسين كفاءة المعلمات الرقمية ينعكس إيجابيًا على جودة التعلم، ويعزز قدراتهم على التعلم التفاعلي والتعاوني.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'الباحثون',
      text: 'نموذج تطبيقي لدراسة أثر البرامج التدريبية في سياق محلي إماراتي، يمكن أن يكون أساسًا لدراسات مستقبلية.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const importanceTypes = [
    { icon: Lightbulb, title: 'أهمية علمية', text: 'إثراء الأدبيات التربوية العربية المتعلقة بالكفاءات الرقمية والتدريب المهني في السياق الإماراتي' },
    { icon: Target, title: 'أهمية تطبيقية', text: 'تقديم برنامج تدريبي عملي يمكن الاستفادة منه في تطوير مهارات المعلمات الرقمية وتحسين الممارسات الصفية' },
    { icon: Award, title: 'أهمية قيادية', text: 'دعم متخذي القرار والقادة التربويين ببيانات تساعد في تخطيط برامج التنمية المهنية' },
    { icon: Globe, title: 'أهمية مجتمعية', text: 'الإسهام في تحسين جودة التعليم وإعداد طلبة أكثر جاهزية لمتطلبات العصر الرقمي' }
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
            أهمية البحث
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <InfoBox type="info" title="الفئات المستفيدة" delay={0.5}>
              <p className="text-sm">
                تقدم هذه الدراسة معلومات عملية وعلمية ذات قيمة مباشرة لعدة فئات مستهدفة في المجتمع التعليمي
              </p>
            </InfoBox>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beneficiaries.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  <Card delay={0.7 + index * 0.1} className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-right">
                        {item.text}
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
            transition={{ delay: 1.2 }}
            className="mt-6"
          >
            <Card delay={1.2} className="bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">جوانب الأهمية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {importanceTypes.map((type, index) => {
                    const Icon = type.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        className="flex items-start gap-3 bg-white/60 p-4 rounded-xl"
                      >
                        <Icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{type.title}</h4>
                          <p className="text-sm text-gray-700 text-right leading-relaxed">{type.text}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
