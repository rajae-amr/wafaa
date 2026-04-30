import { NavigationProps } from '@/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext }: NavigationProps) {
  return (
    <div className="nav-controls">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="nav-btn flex items-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        السابق
      </button>
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="nav-btn flex items-center gap-2"
      >
        التالي
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
