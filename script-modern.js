// Modern Presentation Controller
class ModernPresentation {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.generateIndicators();
        this.updateProgress();
        this.updateCounter();
        
        // Show first slide
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
        }
        
        console.log('Modern Presentation initialized with', this.totalSlides, 'slides');
    }
    
    setupEventListeners() {
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                case 'PageDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
                case 'f':
                case 'F':
                case 'F11':
                    e.preventDefault();
                    this.toggleFullscreen();
                    break;
                case 'Escape':
                    if (document.fullscreenElement) {
                        this.toggleFullscreen();
                    }
                    break;
            }
        });
        
        // Touch/Swipe support
        let touchStartX = 0;
        let touchStartY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (!e.changedTouches[0]) return;
            
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;
            
            // Horizontal swipe
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });
        
        // Mouse wheel navigation
        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    this.nextSlide();
                } else if (e.deltaY < 0) {
                    this.previousSlide();
                }
            }, 50);
        }, { passive: true });
    }
    
    generateIndicators() {
        const indicatorsContainer = document.getElementById('slideIndicators');
        if (!indicatorsContainer) return;
        
        // أسماء الشرائح
        const slideNames = [
            'العنوان',
            'شكر وتقدير',
            'المقدمة',
            'مشكلة البحث',
            'سؤال البحث',
            'أهمية البحث',
            'المنهجية',
            'إحصائيات العينة',
            'إجراءات التطبيق',
            'أداة البيانات',
            'النتائج (1)',
            'النتائج (2)',
            'المناقشة',
            'التوصيات',
            'الخاتمة'
        ];
        
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const indicatorWrapper = document.createElement('div');
            indicatorWrapper.className = 'indicator-wrapper';
            
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === this.currentSlide) {
                indicator.classList.add('active');
            }
            
            const label = document.createElement('span');
            label.className = 'indicator-label';
            label.textContent = slideNames[i] || `شريحة ${i + 1}`;
            
            indicatorWrapper.appendChild(indicator);
            indicatorWrapper.appendChild(label);
            
            indicatorWrapper.addEventListener('click', () => this.goToSlide(i));
            indicatorsContainer.appendChild(indicatorWrapper);
        }
    }
    
    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }
    
    updateCounter() {
        const currentSlideEl = document.getElementById('currentSlide');
        const totalSlidesEl = document.getElementById('totalSlides');
        
        if (currentSlideEl) {
            currentSlideEl.textContent = this.currentSlide + 1;
        }
        
        if (totalSlidesEl) {
            totalSlidesEl.textContent = this.totalSlides;
        }
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || index === this.currentSlide || this.isAnimating) {
            return;
        }
        
        this.isAnimating = true;
        
        const currentSlideEl = this.slides[this.currentSlide];
        const nextSlideEl = this.slides[index];
        
        // Determine direction
        const direction = index > this.currentSlide ? 'next' : 'prev';
        
        // Remove active class from current slide
        currentSlideEl.classList.remove('active');
        currentSlideEl.classList.add(direction === 'next' ? 'prev' : 'next');
        
        // Add active class to next slide
        nextSlideEl.classList.remove('prev', 'next');
        nextSlideEl.classList.add('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Update UI
        this.updateProgress();
        this.updateCounter();
        this.updateIndicators();
        this.updateNavigationButtons();
        
        // Reset animation lock
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            
            // Update button icon
            const btn = document.getElementById('fullscreenBtn');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-compress"></i>';
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            
            // Update button icon
            const btn = document.getElementById('fullscreenBtn');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
    }
}

// Initialize presentation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.presentation = new ModernPresentation();
});

// Expose to window for external access
window.ModernPresentation = ModernPresentation;
