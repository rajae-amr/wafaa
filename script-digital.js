class DigitalPresentationController {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 1;
        this.totalSlides = 14;
        
        // Slide names for navigation points
        this.slideNames = [
            'العنوان',
            'الملخص', 
            'الشكر والتقدير',
            'المقدمة',
            'مشكلة البحث',
            'الإطار النظري',
            'المنهجية',
            'تحليل البيانات',
            'النتائج',
            'المناقشة',
            'التوصيات',
            'المراجع',
            'الملحقات',
            'الخاتمة'
        ];
        
        // Content database for interactive elements
        this.contentDatabase = {
            supervisor: {
                title: 'الإشراف الأكاديمي',
                content: `
                    <h4>أ.د. زفاء محمد السيد</h4>
                    <p>أستاذ المناهج وطرق التدريس</p>
                    <p>كلية التربية - جامعة القاهرة</p>
                    <ul>
                        <li>خبير في تطوير المناهج التعليمية</li>
                        <li>متخصص في التعلم الرقمي</li>
                        <li>له العديد من الأبحاث المنشورة</li>
                    </ul>
                `
            },
            school: {
                title: 'المدرسة التجريبية',
                content: `
                    <h4>مدرسة التجربة الابتدائية</h4>
                    <p>منطقة تعليمية النزه</p>
                    <ul>
                        <li>مدرسة رائدة في التعليم الرقمي</li>
                        <li>تطبق أحدث التقنيات التعليمية</li>
                        <li>تضم 500 طالب وطالبة</li>
                        <li>25 معلم ومعلمة</li>
                    </ul>
                `
            },
            family: {
                title: 'أسرتي',
                content: `
                    <h4>شكر وتقدير</h4>
                    <ul>
                        <li>والديّ العزيزين على دعمهما المستمر</li>
                        <li>زوجي الغالي على صبره وتشجيعه</li>
                        <li>أطفالي الأحبة على تحملي</li>
                        <li>إخوتي وأخواتي على وقوفهم معي</li>
                    </ul>
                `
            }
        };
        
        // Initialize Prezi properties
        this.zoomLevel = 0.65; // Optimized for full screen display
        this.panX = 0;
        this.panY = 0;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.initializeInteractiveElements();
        this.setupKeyboardNavigation();
        this.setupTouchNavigation();
        this.setupPreziControls();
        this.generateSlideNavPoints();
        this.generateSlideThumbnails();
        this.initCharts();
        this.updateSlideDisplay();
        this.setupSlidePositions();
        this.centerOnSlideWithAnimation(1);
        
        console.log('Digital Presentation Controller initialized');
    }
    
    setupSlidePositions() {
        // Create a Prezi-style 3D spiral layout
        const centerX = 2500;
        const centerY = 2500;
        const baseRadius = 1500;
        const heightVariation = 800;
        
        this.slides.forEach((slide, index) => {
            // Calculate spiral position
            const progress = index / this.totalSlides;
            const angle = progress * Math.PI * 4; // 2 full rotations
            const radius = baseRadius + progress * 500; // Expanding spiral
            
            // 3D position calculation - adjusted for larger slides
            const x = centerX + Math.cos(angle) * radius - 600;
            const y = centerY + Math.sin(angle) * radius - 450;
            const z = Math.sin(progress * Math.PI * 2) * heightVariation;
            
            // Responsive size calculation based on viewport
            const baseWidth = Math.min(1200, window.innerWidth * 0.8);
            const baseHeight = Math.min(900, window.innerHeight * 0.8);
            const sizeScale = 0.8 + progress * 0.4;
            const width = baseWidth * sizeScale;
            const height = baseHeight * sizeScale;
            
            // Store position data for calculations
            slide.dataset.posX = x;
            slide.dataset.posY = y;
            slide.dataset.posZ = z;
            slide.dataset.width = width;
            slide.dataset.height = height;
            
            // Set position and size using left/top for compatibility
            slide.style.left = `${x}px`;
            slide.style.top = `${y}px`;
            slide.style.width = `${width}px`;
            slide.style.height = `${height}px`;
            slide.style.zIndex = Math.floor(10 + z / 100);
            
            // 3D rotation and perspective
            const rotationX = Math.sin(angle) * 15;
            const rotationY = Math.cos(angle) * 15;
            const rotationZ = angle * 30;
            
            // Use transform for rotation and scale only
            slide.style.transform = `
                rotateX(${rotationX}deg) 
                rotateY(${rotationY}deg) 
                rotateZ(${rotationZ}deg) 
                scale(0.7)
            `;
            
            // Enable GPU acceleration
            slide.style.willChange = 'transform';
            
            // Store original transform for animations
            slide.dataset.originalTransform = slide.style.transform;
            slide.dataset.rotationX = rotationX;
            slide.dataset.rotationY = rotationY;
            slide.dataset.rotationZ = rotationZ;
        });
    }
    
    setupEventListeners() {
        // Navigation buttons
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Fullscreen button
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        if (this.fullscreenBtn) {
            this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        }
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Prevent context menu
        document.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    setupPreziControls() {
        const canvas = document.querySelector('.prezi-canvas');
        const zoomInBtn = document.getElementById('zoomIn');
        const zoomOutBtn = document.getElementById('zoomOut');
        const zoomResetBtn = document.getElementById('zoomReset');
        
        if (canvas) {
            // Enhanced mouse wheel zoom with smooth easing and cursor focus
            canvas.addEventListener('wheel', (e) => {
                e.preventDefault();
                
                // Get cursor position relative to canvas
                const rect = canvas.getBoundingClientRect();
                const cursorX = e.clientX - rect.left;
                const cursorY = e.clientY - rect.top;
                
                // Calculate zoom delta with smooth acceleration
                const delta = e.deltaY > 0 ? -0.08 : 0.08;
                const newZoom = Math.max(0.3, Math.min(2.0, this.zoomLevel + delta));
                
                // Smooth zoom animation
                const startZoom = this.zoomLevel;
                const startPanX = this.panX;
                const startPanY = this.panY;
                const duration = 200; // Quick but smooth
                const startTime = Date.now();
                
                const animateZoom = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease-out cubic for smooth deceleration
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    
                    const currentZoom = startZoom + (newZoom - startZoom) * easeProgress;
                    const zoomRatio = currentZoom / startZoom;
                    
                    // Calculate pan to keep cursor position fixed
                    const panAdjustX = cursorX - (cursorX * zoomRatio);
                    const panAdjustY = cursorY - (cursorY * zoomRatio);
                    
                    this.zoomLevel = currentZoom;
                    this.panX = startPanX * zoomRatio + panAdjustX;
                    this.panY = startPanY * zoomRatio + panAdjustY;
                    
                    this.updateCanvasTransform();
                    
                    if (progress < 1) {
                        requestAnimationFrame(animateZoom);
                    }
                };
                
                animateZoom();
            });
            
            // Enhanced drag to pan with momentum
            let lastX = 0, lastY = 0;
            let velocityX = 0, velocityY = 0;
            let animationId = null;
            
            canvas.addEventListener('mousedown', (e) => {
                this.isDragging = true;
                lastX = e.clientX;
                lastY = e.clientY;
                velocityX = 0;
                velocityY = 0;
                canvas.style.cursor = 'grabbing';
                canvas.classList.add('dragging');
                
                // Cancel any ongoing momentum animation
                if (animationId) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            });
            
            document.addEventListener('mousemove', (e) => {
                if (!this.isDragging) return;
                
                const deltaX = e.clientX - lastX;
                const deltaY = e.clientY - lastY;
                
                // Update pan
                this.panX += deltaX;
                this.panY += deltaY;
                this.updateCanvasTransform();
                
                // Track velocity for momentum
                velocityX = deltaX;
                velocityY = deltaY;
                
                lastX = e.clientX;
                lastY = e.clientY;
            });
            
            document.addEventListener('mouseup', () => {
                if (!this.isDragging) return;
                
                this.isDragging = false;
                canvas.style.cursor = 'grab';
                canvas.classList.remove('dragging');
                
                // Apply momentum effect
                const applyMomentum = () => {
                    if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
                        this.panX += velocityX;
                        this.panY += velocityY;
                        this.updateCanvasTransform();
                        
                        // Apply friction
                        velocityX *= 0.9;
                        velocityY *= 0.9;
                        
                        animationId = requestAnimationFrame(applyMomentum);
                    } else {
                        animationId = null;
                    }
                };
                
                applyMomentum();
            });
            
            // Double-click to zoom to cursor position
            canvas.addEventListener('dblclick', (e) => {
                const rect = canvas.getBoundingClientRect();
                const cursorX = e.clientX - rect.left;
                const cursorY = e.clientY - rect.top;
                
                // Zoom to 1.0 if not already zoomed, otherwise zoom out
                const targetZoom = this.zoomLevel < 0.9 ? 1.0 : 0.5;
                
                // Calculate new pan to center on cursor
                const zoomRatio = targetZoom / this.zoomLevel;
                const newPanX = this.panX * zoomRatio + cursorX - (cursorX * zoomRatio);
                const newPanY = this.panY * zoomRatio + cursorY - (cursorY * zoomRatio);
                
                // Smooth animation
                this.animateToZoom(targetZoom, newPanX, newPanY, 500);
            });
        }
        
        // Enhanced zoom buttons with smooth transitions
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                this.animateToZoom(
                    Math.min(1.5, this.zoomLevel + 0.2),
                    this.panX,
                    this.panY,
                    300
                );
            });
        }
        
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                this.animateToZoom(
                    Math.max(0.3, this.zoomLevel - 0.2),
                    this.panX,
                    this.panY,
                    300
                );
            });
        }
        
        if (zoomResetBtn) {
            zoomResetBtn.addEventListener('click', () => {
                this.animateToZoom(0.8, 0, 0, 600);
            });
        }
    }
    
    animateToZoom(targetZoom, targetPanX, targetPanY, duration) {
        const startZoom = this.zoomLevel;
        const startPanX = this.panX;
        const startPanY = this.panY;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Smooth easing
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            this.zoomLevel = startZoom + (targetZoom - startZoom) * easeProgress;
            this.panX = startPanX + (targetPanX - startPanX) * easeProgress;
            this.panY = startPanY + (targetPanY - startPanY) * easeProgress;
            
            this.updateCanvasTransform();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }
    
    generateSlideNavPoints() {
        const navPointsContainer = document.getElementById('slideNavPoints');
        if (!navPointsContainer) return;
        
        navPointsContainer.innerHTML = '';
        
        this.slideNames.forEach((name, index) => {
            const point = document.createElement('div');
            point.className = 'nav-point';
            point.dataset.slide = index + 1;
            
            const tooltip = document.createElement('div');
            tooltip.className = 'nav-point-tooltip';
            tooltip.textContent = name;
            
            point.appendChild(tooltip);
            
            point.addEventListener('click', () => {
                this.goToSlide(index + 1);
            });
            
            navPointsContainer.appendChild(point);
        });
        
        this.updateNavPointsActive();
    }
    
    updateNavPointsActive() {
        const navPoints = document.querySelectorAll('.nav-point');
        navPoints.forEach((point, index) => {
            if (index + 1 === this.currentSlide) {
                point.classList.add('active');
            } else {
                point.classList.remove('active');
            }
        });
    }
    
    setZoom(level) {
        this.zoomLevel = Math.max(0.5, Math.min(2.0, level)); // Adjusted range for larger slides
        this.updateCanvasTransform();
    }
    
    zoomIn() {
        this.setZoom(this.zoomLevel + 0.05);
    }
    
    zoomOut() {
        this.setZoom(this.zoomLevel - 0.05);
    }
    
    zoomReset() {
        this.zoomLevel = 0.65; // Updated to match new default zoom
        this.panX = 0;
        this.panY = 0;
        this.updateCanvasTransform();
        // Re-center on current slide after reset
        setTimeout(() => {
            this.centerOnSlideWithAnimation(this.currentSlide);
        }, 100);
    }
    
    updateCanvasTransform() {
        const canvas = document.querySelector('.prezi-canvas');
        if (canvas) {
            canvas.style.transform = `scale(${this.zoomLevel}) translate(${this.panX}px, ${this.panY}px)`;
        }
    }
    
    centerOnSlide(slideNumber) {
        const slide = document.querySelector(`.slide:nth-child(${slideNumber})`);
        if (!slide) return;
        
        const slideRect = slide.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate pan to center the slide
        this.panX = (centerX - slideRect.left - slideRect.width / 2) / this.zoomLevel;
        this.panY = (centerY - slideRect.top - slideRect.height / 2) / this.zoomLevel;
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case 'PageDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.closeAllModals();
                    break;
                case 'F11':
                    e.preventDefault();
                    this.toggleFullscreen();
                    break;
                                            }
        });
    }

    setupTouchNavigation() {
        const canvas = document.querySelector('.prezi-canvas');
        if (!canvas) return;
        
        let touchStartX = 0;
        let touchStartY = 0;
        let initialDistance = 0;
        let initialZoom = this.zoomLevel;
        let isPinching = false;
        
        // Touch start
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                // Single touch - pan
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                isPinching = false;
            } else if (e.touches.length === 2) {
                // Two fingers - pinch to zoom
                isPinching = true;
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                initialDistance = Math.sqrt(dx * dx + dy * dy);
                initialZoom = this.zoomLevel;
            }
        });
        
        // Touch move
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            
            if (e.touches.length === 1 && !isPinching) {
                // Single touch pan
                const deltaX = e.touches[0].clientX - touchStartX;
                const deltaY = e.touches[0].clientY - touchStartY;
                
                this.panX += deltaX / this.zoomLevel;
                this.panY += deltaY / this.zoomLevel;
                
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                
                this.updateCanvasTransform();
            } else if (e.touches.length === 2) {
                // Pinch to zoom
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const currentDistance = Math.sqrt(dx * dx + dy * dy);
                
                const scale = currentDistance / initialDistance;
                const newZoom = Math.max(0.3, Math.min(2.0, initialZoom * scale));
                
                // Get pinch center
                const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                
                // Zoom towards pinch center
                const rect = canvas.getBoundingClientRect();
                const cursorX = centerX - rect.left;
                const cursorY = centerY - rect.top;
                
                const zoomRatio = newZoom / this.zoomLevel;
                const panAdjustX = cursorX - (cursorX * zoomRatio);
                const panAdjustY = cursorY - (cursorY * zoomRatio);
                
                this.zoomLevel = newZoom;
                this.panX = this.panX * zoomRatio + panAdjustX;
                this.panY = this.panY * zoomRatio + panAdjustY;
                
                this.updateCanvasTransform();
            }
        }, { passive: false });
        
        // Touch end - swipe detection for slide navigation
        canvas.addEventListener('touchend', (e) => {
            if (!isPinching && e.changedTouches[0]) {
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                
                const diffX = touchStartX - touchEndX;
                const diffY = touchStartY - touchEndY;
                
                // Horizontal swipe for slide navigation
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80) {
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.previousSlide();
                    }
                }
            }
            
            isPinching = false;
        });
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        
        // Add special transition effect
        this.addSlideTransitionEffect(slideNumber);
        
        this.currentSlide = slideNumber;
        this.updateSlideDisplay();
        this.updateMinimapActive();
        this.updateNavPointsActive();
        
        // Enhanced centering with animation
        setTimeout(() => {
            this.centerOnSlideWithAnimation(slideNumber);
        }, 100);
    }
    
    addSlideTransitionEffect(slideNumber) {
        const slide = document.querySelector(`.slide:nth-child(${slideNumber})`);
        if (!slide) return;
        
        // Add transition class for CSS animation
        slide.classList.add('transitioning');
        
        // Remove transition class after animation
        setTimeout(() => {
            slide.classList.remove('transitioning');
        }, 800);
    }
    
    centerOnSlideWithAnimation(slideNumber) {
        const slide = document.querySelector(`.slide:nth-child(${slideNumber})`);
        if (!slide) return;
        
        // Get slide position from dataset (more reliable)
        const slideLeft = parseFloat(slide.dataset.posX) || 0;
        const slideTop = parseFloat(slide.dataset.posY) || 0;
        const slideWidth = parseFloat(slide.dataset.width) || Math.min(1200, window.innerWidth * 0.8);
        const slideHeight = parseFloat(slide.dataset.height) || Math.min(900, window.innerHeight * 0.8);
        
        // Calculate center position for the slide
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Dynamic zoom level based on screen size
        const targetZoom = Math.min(0.65, window.innerWidth / (slideWidth * 1.2));
        
        // Calculate pan to center the slide perfectly
        const targetPanX = centerX / targetZoom - slideLeft - slideWidth / 2;
        const targetPanY = centerY / targetZoom - slideTop - slideHeight / 2;
        
        // Smooth animation to center and zoom
        const startX = this.panX;
        const startY = this.panY;
        const startZoom = this.zoomLevel;
        const duration = 1200;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Enhanced easing function
            const easeProgress = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            this.panX = startX + (targetPanX - startX) * easeProgress;
            this.panY = startY + (targetPanY - startY) * easeProgress;
            this.zoomLevel = startZoom + (targetZoom - startZoom) * easeProgress;
            
            this.updateCanvasTransform();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
        
        // Ensure slide is fully visible and active
        setTimeout(() => {
            slide.style.zIndex = '100';
            slide.style.transform = 'scale(1) rotate(0deg)';
        }, 600);
    }

    animateSlideContent(slide) {
        const elements = slide.querySelectorAll('.section-title, .interactive-card, .stat-card, .specialty-item, .question-card, .recommendation-group');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    
    updateSlideDisplay() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            const slideNumber = index + 1;
            const distance = Math.abs(slideNumber - this.currentSlide);
            
            if (slideNumber === this.currentSlide) {
                // Active slide - bring to front and reset transform
                slide.classList.add('active');
                slide.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
                slide.style.zIndex = '100';
                slide.style.filter = 'brightness(1.2) saturate(1.2)';
                slide.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            } else if (distance === 1) {
                // Adjacent slides - slightly visible
                if (slideNumber === this.currentSlide - 1) {
                    slide.classList.add('prev');
                } else if (slideNumber === this.currentSlide + 1) {
                    slide.classList.add('next');
                }
                
                // Restore original transform but with reduced scale
                const originalTransform = slide.dataset.originalTransform || 'scale(0.7)';
                slide.style.transform = originalTransform.replace('scale(0.7)', 'scale(0.8)');
                slide.style.zIndex = '50';
                slide.style.filter = 'brightness(0.8) saturate(0.8)';
                slide.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            } else {
                // Distant slides - faded and small
                const originalTransform = slide.dataset.originalTransform || 'scale(0.7)';
                slide.style.transform = originalTransform.replace('scale(0.7)', 'scale(0.5)');
                slide.style.zIndex = '10';
                slide.style.filter = 'brightness(0.4) saturate(0.6) blur(1px)';
                slide.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
        
        const currentSlideSpan = document.querySelector('.current-slide');
        if (currentSlideSpan) {
            currentSlideSpan.textContent = this.currentSlide;
        }
        
        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 1;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides;
        }
    }

    
    
    closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
        }
    }

    closeAllModals() {
        // No modals to close - all have been removed
    }

    toggleFullscreen() {
        try {
            if (!document.fullscreenElement) {
                // Enter fullscreen
                const elem = document.documentElement;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) { /* Safari */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE11 */
                    elem.msRequestFullscreen();
                }
            } else {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }
            }
        } catch (error) {
            console.log('Fullscreen not supported:', error);
        }
    }

    
    generateSlideThumbnails() {
        const minimapCanvas = document.getElementById('minimapCanvas');
        if (!minimapCanvas) return;
        
        minimapCanvas.innerHTML = '';
        
        this.slides.forEach((slide, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'minimap-slide';
            thumbnail.dataset.slide = index + 1;
            
            // Get slide position for minimap positioning
            const posX = parseFloat(slide.dataset.posX) || 0;
            const posY = parseFloat(slide.dataset.posY) || 0;
            
            // Scale down position for minimap (5000px canvas to 200px minimap)
            const scale = 200 / 5000;
            const miniX = posX * scale;
            const miniY = posY * scale;
            
            thumbnail.style.left = `${miniX}px`;
            thumbnail.style.top = `${miniY}px`;
            
            if (index + 1 === this.currentSlide) {
                thumbnail.classList.add('active');
            }
            
            // Click to navigate
            thumbnail.addEventListener('click', (e) => {
                e.stopPropagation();
                this.goToSlide(index + 1);
            });
            
            minimapCanvas.appendChild(thumbnail);
        });
        
        // Make minimap canvas clickable for direct navigation
        minimapCanvas.addEventListener('click', (e) => {
            const rect = minimapCanvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Convert minimap coordinates to canvas coordinates
            const scale = 5000 / 200;
            const canvasX = clickX * scale;
            const canvasY = clickY * scale;
            
            // Pan to clicked position
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            this.panX = centerX / this.zoomLevel - canvasX;
            this.panY = centerY / this.zoomLevel - canvasY;
            
            this.updateCanvasTransform();
        });
    }
    
    updateMinimapActive() {
        const minimapSlides = document.querySelectorAll('.minimap-slide');
        minimapSlides.forEach((slide, index) => {
            if (index + 1 === this.currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    handleResize() {
        // Recenter current slide on resize
        this.centerOnSlide(this.currentSlide);
    }

    initCharts() {
        // Initialize Chart.js charts if they exist
        const chartElements = document.querySelectorAll('canvas[data-chart]');
        chartElements.forEach(canvas => {
            const chartType = canvas.dataset.chart;
            const chartData = this.getChartData(chartType);
            
            if (chartData && window.Chart) {
                new Chart(canvas, chartData);
            }
        });
    }

    getChartData(chartType) {
        // Return chart configuration based on type
        const charts = {
            'competency-radar': {
                type: 'radar',
                data: {
                    labels: ['البحث والتطوير', 'التفكير النقدي', 'التواصل', 'التعاون', 'القيادة الرقمية', 'الأمن الرقمي'],
                    datasets: [{
                        label: 'المستوى الحالي',
                        data: [85, 75, 90, 80, 70, 85],
                        backgroundColor: 'rgba(249, 115, 22, 0.2)',
                        borderColor: 'rgba(249, 115, 22, 1)',
                        borderWidth: 2
                    }, {
                        label: 'المستوى المستهدف',
                        data: [95, 90, 95, 90, 85, 95],
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        borderColor: 'rgba(16, 185, 129, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            },
            'progress-bar': {
                type: 'bar',
                data: {
                    labels: ['المعلمات', 'الطلاب', 'الإدارة', 'أولياء الأمور'],
                    datasets: [{
                        label: 'نسبة التفاعل (%)',
                        data: [92, 88, 76, 81],
                        backgroundColor: [
                            'rgba(14, 165, 233, 0.8)',
                            'rgba(249, 115, 22, 0.8)',
                            'rgba(16, 185, 129, 0.8)',
                            'rgba(139, 92, 246, 0.8)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            }
        };
        
        return charts[chartType] || null;
    }
}

// Initialize the presentation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, creating presentation controller...');
    const presentation = new DigitalPresentationController();
    console.log('Presentation controller created:', presentation);
    
    // Add to global scope
    window.presentationController = presentation;
});

// Also initialize if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    console.log('DOM already loaded, creating presentation controller...');
    const presentation = new DigitalPresentationController();
    console.log('Presentation controller created:', presentation);
    
    // Add to global scope
    window.presentationController = presentation;
    
    console.log('Digital competencies presentation loaded successfully!');
}

