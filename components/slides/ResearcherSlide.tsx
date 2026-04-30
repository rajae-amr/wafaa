import { motion } from 'framer-motion'
import { User, GraduationCap, BookOpen, BadgeCheck, Award, Sparkles, Brain, Users } from 'lucide-react'
import { PRESENTER_INFO } from '@/constants/slides'
import { Card } from '@/components/ui/Card'

export default function ResearcherSlide() {
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
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/70 backdrop-blur-xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-indigo-500/10" />
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 p-[3px] shadow-lg">
                      <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
                        <User className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -left-1 bg-white rounded-full p-2 shadow-md border border-blue-100">
                      <BadgeCheck className="w-5 h-5 text-green-600" />
                    </div>
                  </motion.div>

                  <div className="space-y-2">
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-sm font-semibold text-blue-700"
                    >
                      الملف الشخصي للباحثة
                    </motion.div>
                    <motion.h2
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500"
                    >
                      {PRESENTER_INFO.name}
                    </motion.h2>
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-gray-700 font-semibold text-lg"
                    >
                      معلمة لغة إنجليزية | باحثة تربوية
                    </motion.div>
                    <motion.p
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.55, duration: 0.5 }}
                      className="text-sm text-gray-600 leading-relaxed max-w-2xl"
                    >
                      مؤهلة تمتلك مهارات متقدمة في توظيف التكنولوجيا والذكاء الاصطناعي في التعليم، قادرة على تصميم بيئة تعليمية تفاعلية مبتكرة
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-3 justify-start md:justify-end"
                >
                  <div className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm">
                    بحث علمي
                  </div>
                  <div className="px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-semibold text-sm">
                    دولة الإمارات
                  </div>
                  <div className="px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm">
                    2026
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* المؤهلات والشهادات */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <Card delay={0.65}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-black text-gray-800">المؤهلات والشهادات المهنية</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <BadgeCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">الرخصة المهنية للمعلمين</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">دبلوم في القيادة التربوية</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                    <Brain className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">دبلوم في الذكاء الاصطناعي في التعليم</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-sky-50 rounded-lg border border-sky-100">
                    <Users className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">دبلوم تدريب المدرب المحترف (TOT) المعزز بالذكاء الاصطناعي – معتمد دولياً</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Card className="h-full" delay={0.75}>
                <div className="space-y-4 text-right">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-lg font-black text-gray-800">الإشراف</div>
                  </div>
                  <div className="text-gray-700 font-semibold break-words">{PRESENTER_INFO.supervisor}</div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="h-full" delay={0.85}>
                <div className="space-y-4 text-right">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-lg font-black text-gray-800">عنوان البحث</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-gray-800 font-black text-2xl leading-snug break-words">
                      {PRESENTER_INFO.title}
                    </div>
                    <div className="text-gray-700 font-semibold leading-relaxed break-words">
                      {PRESENTER_INFO.subtitle}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-center text-gray-600 font-semibold"
          >
            شكرًا لحسن الاستماع
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
