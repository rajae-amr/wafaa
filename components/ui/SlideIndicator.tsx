import { SlideIndicatorProps } from '@/types'

export default function SlideIndicator({ slides, currentSlide, onSlideSelect }: SlideIndicatorProps) {
  return (
    <div className="slide-indicators">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="indicator-wrapper"
          onClick={() => onSlideSelect(slide.id)}
        >
          <div className={`indicator ${currentSlide === slide.id ? 'active' : ''}`} />
          <span className="indicator-label">{slide.name}</span>
        </div>
      ))}
    </div>
  )
}
