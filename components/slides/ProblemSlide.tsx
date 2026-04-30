import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, HelpCircle, Target, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function ProblemSlide() {
  const problemAspects = [
    {
      icon: AlertCircle,
      title: 'الواقع الحالي',
      text: 'تفاوت ملحوظ في مستوى الكفاءات الرقمية لدى معلمات الحلقة الثالثة في مجمع زايد التعليمي – الخران، مما قد يحد من استفادتهن من الإمكانات التكنولوجية المتاحة.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'المتغيرات البحثية',
      text: 'علاقة مباشرة بين البرنامج التدريبي (متغير مستقل) والكفاءات الرقمية للمعلمات (متغير تابع)، قابلة للقياس الموضوعي والاختبار التجريبي.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'الذكاء الاصطناعي',
      text: 'مع التوسع في استخدام أدوات الذكاء الاصطناعي، أصبحت الحاجة ملحّة لمعلمات قادرات على الاختيار الواعي للأدوات الرقمية وتوظيفها أخلاقيًا وتربويًا.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const researchQuestions = [
    'ما واقع الكفاءات الرقمية لدى المعلمات قبل تنفيذ البرنامج؟',
    'ما أبرز التحديات التي تواجههن في تطبيقها؟',
    'ما مدى تأثير البرنامج التدريبي في تطوير هذه الكفاءات؟'
  ]

  return (
    <>
      <div className="slide-background" />
      <div className="slide-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-6"
          >
            مشكلة البحث
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemAspects.map((aspect, index) => {
              const Icon = aspect.icon
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
                        <div className={`p-3 bg-gradient-to-br ${aspect.color} rounded-xl shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{aspect.title}</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-right">
                        {aspect.text}
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
            className="mt-6"
          >
            <Card delay={1.0} className="bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">السؤال الرئيسي</h3>
                </div>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-right leading-relaxed">
                  ما أثر البرنامج التدريبي في تعزيز الكفاءات الرقمية لدى معلمات الحلقة الثالثة في مجمع زايد التعليمي-الخران؟
                </p>
                
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">الأسئلة الفرعية:</h4>
                  <ul className="space-y-3">
                    {researchQuestions.map((question, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
                        <span className="flex-1 text-right">{question}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
