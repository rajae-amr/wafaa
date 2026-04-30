import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, AlertCircle, CheckCircle, Award } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function DiscussionSlide() {
  const mainFindings = [
    {
      icon: CheckCircle,
      title: 'تحسن الكفاءات الرقمية',
      text: 'تحسنت جميع الكفاءات بعد التدريب، خاصة التواصل الرقمي (من 3.08 إلى 4.42) والشعور بالتمكن (من 3.42 إلى 4.67). بقي الاستخدام المنتظم للأجهزة مستقراً عند 4.58 لأنه كان مرتفعاً مسبقاً.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: AlertCircle,
      title: 'ارتفاع التحديات المدركة',
      text: 'ارتفعت التحديات مثل صعوبة اختيار الأدوات (+0.69) وضيق الوقت (+0.67)، وهذا يعكس زيادة الوعي بمتطلبات التطبيق الفعلي وليس فشل التدريب. انخفض تحدي قلة التعاون (-0.43) مما يدل على تحسن البيئة التعاونية.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'تقييم إيجابي للتدريب',
      text: 'حصل التدريب على تقييم مرتفع جداً (4.50-4.92) مع اتفاق كبير بين المعلمات. أعلى تقييم كان لتصميم الدروس الرقمية (4.92)، مما يؤكد فعالية البرنامج التدريبي العملي.',
      color: 'from-blue-500 to-blue-600'
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
            مناقشة النتائج
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <InfoBox type="info" title="هدف المناقشة" delay={0.5}>
              <p className="text-sm">
                تقديم تفسير تحليلي للنتائج الكمية وربطها بأسئلة البحث والإطار النظري والدراسات السابقة
              </p>
            </InfoBox>
          </motion.div>

          <div className="space-y-6">
            {mainFindings.map((finding, index) => {
              const Icon = finding.icon
              return (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                >
                  <Card delay={0.7 + index * 0.2}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-br ${finding.color} rounded-xl shadow-lg flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-gray-800">{finding.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed text-right">
                          {finding.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Card delay={1.4} className="bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-800">التفسير الشامل</h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-right">
                    يعكس <strong>التحسن الكبير</strong> فعالية التدريب العملي في تنمية المهارات الرقمية. 
                    <strong>ارتفاع التحديات</strong> يعكس "منحنى الوعي" حيث تزداد المعرفة بالصعوبات مع زيادة الخبرة العملية. 
                    <strong>انخفاض الانحرافات المعيارية</strong> يشير إلى تجانس الخبرات وتقليل الفجوات الفردية. 
                    النتائج تتفق مع دراسات (عبد الرحمن، 2020) و(خليفة، 2021) حول فعالية التدريب العملي في تطوير الكفاءات الرقمية.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
