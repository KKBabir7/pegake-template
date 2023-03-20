 /////////////........navbar fixed
	$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
});

// back to top 
		
				const scrollToTopButton = document.getElementById('js-top');
			

			window.addEventListener('scroll', () => {
			  // Get the current scroll value
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '10px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})
		
