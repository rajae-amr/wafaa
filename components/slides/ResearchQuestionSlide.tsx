import { motion } from 'framer-motion'
import { HelpCircle, Target } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function ResearchQuestionSlide() {
  const subQuestions = [
    'ما واقع الكفاءات الرقمية لدى معلمات الحلقة الثالثة قبل تنفيذ البرنامج التدريبي؟',
    'ما أبرز التحديات التي تواجه المعلمات في تطبيق الكفاءات الرقمية؟',
    'ما أثر البرنامج التدريبي في تعزيز الكفاءات الرقمية لدى معلمات الحلقة الثالثة في مجمع زايد التعليمي- الخران؟'
  ]

  return (
    <>
      <div className="slide-background" />
      <div className="slide-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center h-full"
        >
          <div className="max-w-5xl mx-auto space-y-10">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center"
            >
              أسئلة البحث
            </motion.h2>

            <Card delay={0.5} className="bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex-shrink-0">
                    <HelpCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">السؤال الرئيسي:</h3>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 leading-relaxed text-right">
                      ما أثر البرنامج التدريبي العملي في تعزيز الكفاءات الرقمية لدى معلمات الحلقة الثالثة في مجمع زايد التعليمي – الخران؟
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-200">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    الأسئلة الفرعية:
                  </h4>
                  <ul className="space-y-4">
                    {subQuestions.map((question, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.15 }}
                        className="flex items-start gap-4 bg-white/60 p-4 rounded-xl border border-blue-100"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <span className="flex-1 text-gray-700 text-lg leading-relaxed text-right">{question}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </>
  )
}
