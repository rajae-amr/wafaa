import { useState, useEffect, useCallback } from 'react'
import { SLIDES_DATA } from '@/constants/slides'

export const usePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const totalSlides = SLIDES_DATA.length

  const goToSlide = useCallback((slideId: number) => {
    if (slideId >= 0 && slideId < totalSlides) {
      setCurrentSlide(slideId)
    }
  }, [totalSlides])

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide, totalSlides])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
  }, [nextSlide, prevSlide])

  useEffect(() => {
    setProgress(((currentSlide + 1) / totalSlides) * 100)
  }, [currentSlide, totalSlides])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return {
    currentSlide,
    progress,
    totalSlides,
    slides: SLIDES_DATA,
    goToSlide,
    nextSlide,
    prevSlide,
    canGoNext: currentSlide < totalSlides - 1,
    canGoPrev: currentSlide > 0
  }
}
