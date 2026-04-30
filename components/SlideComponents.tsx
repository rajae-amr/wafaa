'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Award, TrendingUp, Lightbulb, CheckCircle, ArrowRight, Search, Users, LineChart, Star, Heart } from 'lucide-react'
import ChartComponent from './ChartComponent'

// Sample data for charts
const sampleData = {
  bar: {
    labels: ['المعرفة الرقمية', 'المهارات التقنية', 'التطبيق العملي', 'التقييم الإلكتروني'],
    datasets: [{
      label: 'قبل التدريب',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(37, 99, 235, 0.5)',
      borderColor: 'rgba(37, 99, 235, 1)',
      borderWidth: 2
    }, {
      label: 'بعد التدريب',
      data: [85, 88, 92, 89],
      backgroundColor: 'rgba(245, 158, 11, 0.5)',
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 2
    }]
  },
  radar: {
    labels: ['تصميم الدروس', 'المنصات التعليمية', 'الثقة التقنية', 'التقييم الإلكتروني', 'الابتكار الرقمي'],
    datasets: [{
      label: 'الكفاءة الرقمية',
      data: [92, 83, 83, 83, 88],
      backgroundColor: 'rgba(124, 58, 237, 0.2)',
      borderColor: 'rgba(124, 58, 237, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(124, 58, 237, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(124, 58, 237, 1)'
    }]
  },
  pie: {
    labels: ['ممتاز', 'جيد جداً', 'جيد', 'متوسط'],
    datasets: [{
      data: [8, 3, 1, 0],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)'
      ],
      borderWidth: 2
    }]
  }
}

export const IntroductionSlide = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">المقدمة</h2>
    <div className="text-xl text-text-secondary max-w-4xl mx-auto space-y-6">
      <p>
        في عصر التحول الرقمي، أصبحت الكفاءات الرقمية ضرورة حتمية للمعلمين في القرن الحادي والعشرين.
      </p>
      <p>
        تهدف هذه الدراسة إلى قياس أثر التدريب العملي في تعزيز هذه الكفاءات لدى المعلمات في دولة الإمارات.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text mb-2">التعليم الرقمي</h3>
          <p className="text-text-secondary">تحويل المناهج التقليدية إلى صيغ رقمية تفاعلية</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <Target className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text mb-2">الكفاءة الرقمية</h3>
          <p className="text-text-secondary">المهارات اللازمة لاستخدام التكنولوجيا في التعليم</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text mb-2">التدريب العملي</h3>
          <p className="text-text-secondary">التطبيق الفعلي للمهارات في بيئة تعليمية حقيقية</p>
        </div>
      </div>
    </div>
  </motion.div>
)

export const ProblemSlide = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">مشكلة البحث</h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-red-400 font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text mb-2">الفجوة الرقمية</h3>
              <p className="text-text-secondary">وجود فجوة بين المهارات الرقمية المطلوبة والمهارات المتوفرة لدى المعلمات</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-400 font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text mb-2">التحديات التقنية</h3>
              <p className="text-text-secondary">صعوبة في توظيف المنصات التعليمية وأدوات التقييم الإلكتروني</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-400 font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text mb-2">الحاجة للتدريب</h3>
              <p className="text-text-secondary">ضرورة توفير تدريب عملي ومكثف لسد هذه الفجوات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const QuestionSlide = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">سؤال البحث</h2>
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <Search className="w-20 h-20 text-primary mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-text mb-6">
          ما أثر التدريب العملي في تعزيز الكفاءات الرقمية لدى المعلمات؟
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <p className="text-text-secondary">المعرفة الرقمية</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <p className="text-text-secondary">المهارات التقنية</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-text-secondary">التطبيق العملي</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const ImportanceSlide = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">أهمية البحث</h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <TrendingUp className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-text mb-3">الأهمية النظرية</h3>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>يساهم في تطوير نظريات التعليم الرقمي</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>يقدم إطاراً مفاهيمياً للكفاءة الرقمية</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>يعزز الأدبيات في مجال تكنولوجيا التعليم</span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <Lightbulb className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold text-text mb-3">الأهمية التطبيقية</h3>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>يساعد في تطوير برامج تدريبية فعالة</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>يحسن من جودة التعليم الرقمي</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>يدعم التحول الرقمي في التعليم</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
)

export const MethodologySlide = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">المنهجية</h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-text mb-4">المنهج شبه التجريبي</h3>
            <p className="text-text-secondary mb-6">تصميم قبلي-بعدي لمجموعة واحدة</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text mb-2">عينة البحث</h4>
              <p className="text-text-secondary">12 معلمة من مدارس دبي</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text mb-2">البرنامج التدريبي</h4>
              <p className="text-text-secondary">6 أسابيع تدريب عملي</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-10 h-10 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text mb-2">أداة القياس</h4>
              <p className="text-text-secondary">استبيان الكفاءة الرقمية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const SampleStatsSlide = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">إحصائيات العينة</h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-text mb-4">الخصائص الديموغرافية</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">عدد المعلمات</span>
              <span className="text-2xl font-bold text-primary">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">متوسط الخبرة</span>
              <span className="text-2xl font-bold text-accent">8 سنوات</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">المراحل التعليمية</span>
              <span className="text-lg font-bold text-secondary">ابتدائي + إعدادي</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-text mb-4">التوزيع حسب التخصص</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-text-secondary">الرياضيات</span>
                <span className="text-text">33%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '33%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-text-secondary">العلوم</span>
                <span className="text-text">25%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-text-secondary">اللغة العربية</span>
                <span className="text-text">42%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '42%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const ResultsSlide1 = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">النتائج (1) - التحليل الكمي</h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-text mb-6 text-center">مقارنة قبل وبعد التدريب</h3>
        <ChartComponent type="bar" data={sampleData.bar} />
      </div>
    </div>
  </motion.div>
)

export const ResultsSlide2 = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="space-y-8"
  >
    <h2 className="slide-title">النتائج (2) - الكفاءة الرقمية</h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-text mb-6 text-center">مستوى الكفاءة الرقمية</h3>
          <ChartComponent type="radar" data={sampleData.radar} />
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-text mb-6 text-center">توزيع التقييمات</h3>
          <ChartComponent type="pie" data={sampleData.pie} />
        </div>
      </div>
    </div>
  </motion.div>
)
