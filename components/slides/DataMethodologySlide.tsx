import { motion } from 'framer-motion'
import { Database, Users, CheckCircle, FileSpreadsheet, Shield, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { InfoBox } from '@/components/ui/InfoBox'

export default function DataMethodologySlide() {
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
          {/* العنوان */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-3">
              البيانات والمنهجية
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              جمع البيانات والمعالجة الإحصائية
            </p>
          </motion.div>

          {/* جمع البيانات */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card delay={0.5}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">جمع البيانات</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-800">الأداة</h4>
                    </div>
                    <p className="text-sm text-gray-700 font-semibold">استبانة إلكترونية</p>
                    <p className="text-xs text-gray-600 mt-1">قبلية وبعدية</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-800">العينة</h4>
                    </div>
                    <p className="text-sm text-gray-700 font-semibold">12 معلمة</p>
                    <p className="text-xs text-gray-600 mt-1">بعد تنقيح البيانات</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <h4 className="font-bold text-gray-800">المحاور</h4>
                    </div>
                    <p className="text-sm text-gray-700 font-semibold">3 محاور رئيسة</p>
                    <p className="text-xs text-gray-600 mt-1">24 بند إجمالاً</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* المحاور الثلاثة */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <InfoBox type="info" title="المحور الأول" delay={0.7}>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-800">الكفاءات الرقمية</p>
                  <p className="text-xs text-gray-600">8 بنود (قبلي وبعدي)</p>
                  <ul className="text-xs text-gray-700 space-y-1 mt-2">
                    <li>• استخدام الأجهزة الرقمية</li>
                    <li>• المنصات التعليمية</li>
                    <li>• التصميم الرقمي</li>
                    <li>• التقييم الإلكتروني</li>
                  </ul>
                </div>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <InfoBox type="warning" title="المحور الثاني" delay={0.8}>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-800">التحديات</p>
                  <p className="text-xs text-gray-600">8 بنود (قبلي وبعدي)</p>
                  <ul className="text-xs text-gray-700 space-y-1 mt-2">
                    <li>• قلة التدريب الموجّه</li>
                    <li>• البنية التحتية</li>
                    <li>• ضيق الوقت</li>
                    <li>• الدعم الفني</li>
                  </ul>
                </div>
              </InfoBox>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <InfoBox type="success" title="المحور الثالث" delay={0.9}>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-800">أثر التدريب</p>
                  <p className="text-xs text-gray-600">8 بنود (بعدي فقط)</p>
                  <ul className="text-xs text-gray-700 space-y-1 mt-2">
                    <li>• تصميم دروس فعالة</li>
                    <li>• أدوات جديدة</li>
                    <li>• تعزيز الثقة</li>
                    <li>• سهولة الدمج</li>
                  </ul>
                </div>
              </InfoBox>
            </motion.div>
          </div>

          {/* المعالجة الإحصائية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Card delay={1.0}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">المعالجة الإحصائية</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 text-sm">المؤشرات المستخدمة:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <strong>M:</strong> المتوسط الحسابي
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <strong>SD:</strong> الانحراف المعياري
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <strong>Δ:</strong> مقدار التغير
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 text-sm">الأدوات:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                        برنامج Excel
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        دالة AVERAGE
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        دالة STDEV.S
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* الاعتبارات الأخلاقية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <Card delay={1.1}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-gray-800">الاعتبارات الأخلاقية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">إخفاء هويات المشاركات بالكامل</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">موافقة مستنيرة من جميع المشاركات</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">تخزين آمن للبيانات المحمية</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
