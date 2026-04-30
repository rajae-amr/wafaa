import './globals.css'
import { Inter } from 'next/font/google'
import { Tajawal } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tajawal = Tajawal({ 
  subsets: ['arabic'], 
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-arabic'
})

export const metadata = {
  title: 'أثر التدريب العملي في تعزيز الكفاءات الرقمية',
  description: 'عرض تقديمي حول أثر التدريب العملي في تعزيز الكفاءات الرقمية لدى المعلمات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} ${tajawal.variable} font-arabic bg-background text-text`}>
        {children}
      </body>
    </html>
  )
}
