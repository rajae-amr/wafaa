import { motion } from 'framer-motion'
import { Sparkles, Star, TrendingUp, Award, Target } from 'lucide-react'
import { InfoBox } from '@/components/ui/InfoBox'
import { Badge } from '@/components/ui/Badge'
import { StatCard } from '@/components/ui/Card'

export default function TrainingImpactSlide() {
  const impactData = [
    {
      label: 'تصميم دروس رقمية فعالة',
      value: 4.92,
      description: 'أعلى تقييم - اتفاق شبه تام'
    },
    {
      label: 'استخدام أدوات رقمية جديدة',
      value: 4.75,
      description: 'تنوع في الأدوات المستخدمة'
    },
    {
      label: 'توظيف المنصات التعليمية',
      value: 4.83,
      description: 'إدارة المحتوى بفعالية'
    },
    {
      label: 'تعزيز الثقة في التكنولوجيا',
      value: 4.83,
      description: 'ثقة عالية داخل الصف'
    },
    {
      label: 'التقييم الإلكتروني',
      value: 4.83,
      description: 'قياس تعلم الطالبات'
    },
    {
      label: 'التواصل الرقمي',
      value: 4.50,
      description: 'مع الطالبات وأولياء الأمور'
    },
    {
      label: 'سهولة دمج الأدوات',
      value: 4.83,
      description: 'دمج سلس في الدروس'
    },
    {
      label: 'الأثر الإيجابي العام',
      value: 4.83,
      description: 'تطوير الكفاءات الرقمية'
    }
  ]
  
  const getStars = (value: number) => {
    if (value >= 4.8) return 5
    if (value >= 4.5) return 4
    return 3
  }
  
  const getColorClasses = (value: number) => {
    if (value >= 4.8) return {
      badge: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      progress: 'bg-gradient-to-r from-emerald-400 to-emerald-600'
    }
    if (value >= 4.7) return {
      badge: 'bg-gradient-to-r from-green-500 to-green-600',
      progress: 'bg-gradient-to-r from-green-400 to-green-600'
    }
    if (value >= 4.5) return {
      badge: 'bg-gradient-to-r from-blue-500 to-blue-600',
      progress: 'bg-gradient-to-r from-blue-400 to-blue-600'
    }
    return {
      badge: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      progress: 'bg-gradient-to-r from-indigo-400 to-indigo-600'
    }
  }

  return (
    <>
      <div className="slide-background" />
      <div className="slide-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <Badge variant="success" size="lg">النتائج - أثر التدريب</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
            >
              أثر البرنامج التدريبي (القياس البعدي)
            </motion.h2>
          </div>

          {/* Stats Overview */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6"
          >
            <StatCard
              icon={Star}
              value="4.92"
              label="أعلى تقييم"
              delay={0.6}
              color="green"
            />
            <StatCard
              icon={Sparkles}
              value="4.79"
              label="المتوسط العام"
              delay={0.7}
              color="blue"
            />
            <StatCard
              icon={Star}
              value="100%"
              label="رضا المعلمات"
              delay={0.8}
              color="indigo"
            />
          </motion.div>

          {/* بطاقات التقييم */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-6">
            {impactData.map((item, index) => {
              const stars = getStars(item.value)
              const colorClasses = getColorClasses(item.value)
              const percentage = (item.value / 5) * 100
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="bg-white/90 backdrop-blur-xl border-2 border-blue-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  {/* النجوم */}
                  <div className="flex justify-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* القيمة */}
                  <div className="flex justify-center mb-3">
                    <div className={`px-5 py-2 rounded-full font-black text-2xl ${colorClasses.badge} text-white shadow-md`}>
                      {item.value.toFixed(2)}
                    </div>
                  </div>
                  
                  {/* شريط التقدم */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.9 + index * 0.05 + 0.3, duration: 0.6 }}
                      className={`h-full ${colorClasses.progress} rounded-full flex items-center justify-end pr-1`}
                    >
                      <span className="text-xs font-bold text-white">{percentage.toFixed(0)}%</span>
                    </motion.div>
                  </div>
                  
                  {/* العنوان */}
                  <h4 className="text-sm font-bold text-gray-800 text-center mb-1 leading-tight">
                    {item.label}
                  </h4>
                  
                  {/* الوصف */}
                  <p className="text-xs text-gray-600 text-center leading-tight">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* ملخص النتائج */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <InfoBox type="success" title="أعلى تقييم" delay={1.5}>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-bold">تصميم دروس: 4.92/5</span>
                </div>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <InfoBox type="info" title="المتوسط العام" delay={1.6}>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-bold">4.79/5 (95.8%)</span>
                </div>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <InfoBox type="success" title="النطاق" delay={1.7}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-bold">4.50 - 4.92</span>
                </div>
              </InfoBox>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
