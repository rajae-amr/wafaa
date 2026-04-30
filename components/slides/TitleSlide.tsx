import { motion } from 'framer-motion'
import { PRESENTER_INFO } from '@/constants/slides'
import { GraduationCap, Award, Sparkles, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function TitleSlide() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full blur-3xl opacity-20"
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-1/4 w-16 h-16 border-4 border-blue-300/30 rounded-lg"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-sky-300/30 rounded-full"
        />
      </div>
      
      <div className="slide-content relative z-20">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
          {/* Header with Icons */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg"
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-3 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl shadow-lg"
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Main Title with 3D Effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="text-center mb-6 relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 opacity-20 blur-3xl" />
            
            {/* Title */}
            <h3 className="relative text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="block text-transparent bg-clip-text bg-blue-600 animate-gradient-shift">
                {PRESENTER_INFO.title}
              </span>
            </h3>
            
            {/* Subtitle with Animation */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 leading-tight"
            >
              {PRESENTER_INFO.subtitle}
            </motion.h2>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"
          />
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Researcher Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-3">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">الباحثة</p>
                    <p className="text-2xl font-black text-gray-800">{PRESENTER_INFO.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Supervisor Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-xl border border-sky-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-3">
                    <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider">إشراف</p>
                    <p className="text-2xl font-black text-gray-800">{PRESENTER_INFO.supervisor}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Decorative Elements */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center justify-center gap-8 mt-12"
          >
            {/* Stats/Badges */}
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">بحث علمي</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full border border-sky-200">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-sky-700">دولة الإمارات</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-200">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-indigo-700">2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
