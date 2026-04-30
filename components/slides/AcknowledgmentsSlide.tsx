import { motion } from 'framer-motion'
import { Heart, Users, Award, Sparkles, Home } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function AcknowledgmentsSlide() {
  const acknowledgments = [
    {
      icon: Sparkles,
      title: 'الحمد لله',
      text: 'الحمد لله أولًا وآخرًا على نعمه وتوفيقه، الذي يسّر لي إتمام هذه الرسالة، وأسأله أن يجعل هذا العمل خالصًا لوجهه الكريم ونافعًا للعلم والتعليم.',
      color: 'from-yellow-500 to-yellow-600',
      delay: 0.5
    },
    {
      icon: Award,
      title: 'المشرفة',
      text: 'أتقدم بخالص الشكر والتقدير إلى أستاذتي المشرفة على هذه الرسالة، لما قدمته من توجيه علمي كريم، ومتابعة مستمرة، وملاحظات قيّمة كان لها الأثر الكبير في إنجاز هذا العمل بالصورة المطلوبة.',
      color: 'from-blue-500 to-blue-600',
      delay: 0.7
    },
    {
      icon: Users,
      title: 'مجمع زايد التعليمي والمعلمات',
      text: 'أتوجه بجزيل الشكر إلى إدارة مجمع زايد التعليمي – الخران وجميع المعلمات المشاركات في الدراسة، لتعاونهن الصادق، ودعمهن المستمر، ومساهمتهن الفاعلة في إنجاح تطبيق الدراسة الميدانية.',
      color: 'from-green-500 to-green-600',
      delay: 0.9
    },
    {
      icon: Home,
      title: 'الأسرة الكريمة',
      text: 'أتقدم بالشكر والعرفان إلى أسرتي الكريمة، على ما قدموه من دعم وتشجيع وصبر طوال فترة الدراسة، وكانوا خير سندٍ وعونٍ لي في مسيرتي العلمية.',
      color: 'from-pink-500 to-pink-600',
      delay: 1.1
    },
    {
      icon: Heart,
      title: 'كل من ساهم',
      text: 'أشكر كل من ساهم في دعمي ومساندتي، ولو بكلمة طيبة أو دعاء صادق، وأسأل الله أن يجزي الجميع خير الجزاء.',
      color: 'from-red-500 to-red-600',
      delay: 1.3
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-8"
          >
            شكر وتقدير
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acknowledgments.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.6 }}
                >
                  <Card delay={item.delay} className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
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
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center gap-3 mt-8"
          >
            <Heart className="w-8 h-8 text-red-500 animate-pulse" style={{ animationDelay: '0s' }} />
            <Heart className="w-8 h-8 text-red-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <Heart className="w-8 h-8 text-red-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
