// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
	const carousel = document.querySelector('.carousel-track');
	const slides = document.querySelectorAll('.carousel-slide');
	const dots = document.querySelectorAll('.dot');
	const prevButton = document.querySelector('.carousel-prev');
	const nextButton = document.querySelector('.carousel-next');
	
	let currentSlide = 0;
	const totalSlides = slides.length;
	
	function updateCarousel() {
		carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
		
		// Update dots
		dots.forEach((dot, index) => {
			if (index === currentSlide) {
				dot.classList.add('active');
			} else {
				dot.classList.remove('active');
			}
		});
	}
	
	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
		updateCarousel();
	}
	
	function prevSlide() {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
		updateCarousel();
	}
	
	function goToSlide(index) {
		currentSlide = index;
		updateCarousel();
	}
	
	// Event listeners
	if (nextButton) {
		nextButton.addEventListener('click', nextSlide);
	}
	
	if (prevButton) {
		prevButton.addEventListener('click', prevSlide);
	}
	
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => goToSlide(index));
	});
	
	// Auto-play carousel (optional)
	let autoPlayInterval = setInterval(nextSlide, 5000);
	
	// Pause on hover
	const carouselContainer = document.querySelector('.carousel-container');
	if (carouselContainer) {
		carouselContainer.addEventListener('mouseenter', () => {
			clearInterval(autoPlayInterval);
		});
		
		carouselContainer.addEventListener('mouseleave', () => {
			autoPlayInterval = setInterval(nextSlide, 5000);
		});
	}
	
	// Newsletter form handling
	const newsletterForms = document.querySelectorAll('.newsletter-form');
	
	newsletterForms.forEach(form => {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const email = this.querySelector('.newsletter-input').value;
			
			// Here you would typically send the email to a backend
			// For now, we'll just show an alert
			alert(`Thank you for subscribing! We'll send updates to ${email}`);
			this.querySelector('.newsletter-input').value = '';
		});
	});
});
