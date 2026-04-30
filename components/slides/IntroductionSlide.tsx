import { motion } from 'framer-motion'
import { Laptop, Globe, TrendingUp, Target, AlertCircle, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function IntroductionSlide() {
  const keyPoints = [
    {
      icon: Laptop,
      title: 'التكنولوجيا في التعليم',
      text: 'أصبحت التكنولوجيا الرقمية أحد المرتكزات الأساسية في منظومة التعليم المعاصر، ومع بروز الذكاء الاصطناعي أصبح من الضروري أن يمتلك المعلمون الكفاءات الرقمية.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'رؤية الإمارات',
      text: 'حرصت دولة الإمارات على دمج التكنولوجيا في النظام التعليمي، وجعلت من التحول الرقمي هدفًا استراتيجيًا يعكس رؤيتها نحو بناء اقتصاد معرفي تنافسي.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: AlertCircle,
      title: 'الفجوة البحثية',
      text: 'تفاوت في مستوى الكفاءات الرقمية لدى معلمات الحلقة الثالثة في مجمع زايد التعليمي-الخران، مما قد يعيق فاعلية العملية التعليمية.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'هدف الدراسة',
      text: 'تشخيص واقع الكفاءات الرقمية، والكشف عن التحديات، وقياس أثر برنامج تدريبي مقترح في تعزيز هذه الكفاءات.',
      color: 'from-indigo-500 to-indigo-600'
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
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-8"
          >
            المقدمة
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <h3 className="text-xl font-bold text-gray-800">{point.title}</h3>
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
            transition={{ delay: 1.1 }}
            className="mt-6"
          >
            <InfoBox type="tip" title="أهمية الدراسة" delay={1.1}>
              <p className="text-sm">
                تمثل هذه الدراسة استجابة عملية لتوجهات الدولة في تطوير التعليم الرقمي وتعزيز جاهزية المعلمين لمواكبة متطلبات العصر، 
                مع التركيز على <strong>مجمع زايد التعليمي – الخران</strong> كنموذج لمؤسسة تعليمية تعمل على توفير بيئة تعليمية رقمية حديثة.
              </p>
            </InfoBox>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
