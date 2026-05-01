'use client'

import { AnimatePresence } from 'framer-motion'
import { usePresentation } from '@/hooks/usePresentation'
import { 
  ProgressBar, 
  SlideIndicator, 
  Navigation, 
  AnimatedSlide,
  SlideLogo 
} from '@/components/ui'
import {
  TitleSlide,
  AcknowledgmentsSlide,
  IntroductionSlide,
  ProblemSlide,
  ResearchQuestionSlide,
  ImportanceSlide,
  MethodologySlide,
  ImplementationSlide,
  DataCollectionSlide,
  DataMethodologySlide,
  DetailedResultsTable1Slide,
  DetailedResultsTable2Slide,
  DetailedResultsTable3Slide,
  DigitalCompetenciesSlide,
  ChallengesSlide,
  TrainingImpactSlide,
  ResultsSummarySlide,
  DiscussionSlide,
  RecommendationsSlide,
  ConclusionSlide, 
  ResearcherSlide 
} from '@/components/slides'

export default function Presentation() {
  const {
    currentSlide,
    progress,
    totalSlides,
    slides,
    goToSlide,
    nextSlide,
    prevSlide,
    canGoNext,
    canGoPrev
  } = usePresentation()

  const renderSlideContent = (slideId: number) => {
    switch (slideId) {
      case 0:
        return <TitleSlide />
      case 1:
        return <AcknowledgmentsSlide />
      case 2:
        return <IntroductionSlide />
      case 3:
        return <ProblemSlide />
      case 4:
        return <ResearchQuestionSlide />
      case 5:
        return <ImportanceSlide />
      case 6:
        return <MethodologySlide />
      case 7:
        return <ImplementationSlide />
      case 8:
        return <DataCollectionSlide />
      case 9:
        return <DataMethodologySlide />
      case 10:
        return <DetailedResultsTable1Slide />
      case 11:
        return <DetailedResultsTable2Slide />
      case 12:
        return <DetailedResultsTable3Slide />
      case 13:
        return <DigitalCompetenciesSlide />
      case 14:
        return <ChallengesSlide />
      case 15:
        return <TrainingImpactSlide />
      case 16:
        return <ResultsSummarySlide />
      case 17:
        return <DiscussionSlide />
      case 18:
        return <RecommendationsSlide />
      case 19:
        return <ConclusionSlide />
      case 20:
        return <ResearcherSlide />
      default:
        return (
          <div className="slide-background">
            <div className="slide-content">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
                    {slides[slideId]?.title || 'شريحة'}
                  </h2>
                  <p className="text-xl text-gray-600">قيد التطوير...</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="slide-container">
      {/* Logo - يظهر في جميع الشرائح */}
      <SlideLogo position="top-right" size="lg" />

      {/* Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Slide Indicators */}
      <SlideIndicator 
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
      />

      {/* Slides */}
      <AnimatePresence mode="wait">
        <AnimatedSlide 
          key={slides[currentSlide]?.name || 'slide'}
          isActive={true}
          slideKey={slides[currentSlide]?.name || 'slide'}
          className={currentSlide === 14 ? 'conclusion-special' : ''}
        >
          {renderSlideContent(currentSlide)}
        </AnimatedSlide>
      </AnimatePresence>

      {/* Navigation Controls */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  )
}
