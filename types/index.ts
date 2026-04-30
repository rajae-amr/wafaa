export interface Slide {
  id: number
  name: string
  title?: string
  subtitle?: string
  component?: React.ComponentType<any>
}

export interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export interface SlideIndicatorProps {
  slides: Slide[]
  currentSlide: number
  onSlideSelect: (slideId: number) => void
}

export interface ProgressBarProps {
  progress: number
}

export interface SlideContentProps {
  children: React.ReactNode
  className?: string
}

export interface AnimatedSlideProps {
  children: React.ReactNode
  isActive: boolean
  slideKey: string
  className?: string
}
