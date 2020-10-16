	$(document).ready(function(){

		var headerHeight = $('#collapsibleNavbar ul li a').outerHeight();
			$('#collapsibleNavbar ul li a').click(function(e) {
			    var linkHref = $(this).attr('href');
			    $('html, body').animate({
			        scrollTop: $(linkHref).offset().top - headerHeight
			    }, 1800, 'easeInOutExpo');

			    e.preventDefault();
			});


			



	/*===================================*
     08.COUNTDOWN JS

    *===================================*/

    $('.tk_countdown_time').each(function() {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function(tm) {
            $(this).html(tm.strftime('<span class="counter_box"><span class="tk_counter days">%D </span><span class="tk_text">Days</span></span><span class="counter_box"><span class="tk_counter hours">%H</span><span class="tk_text">Hours</span></span><span class="counter_box"><span class="tk_counter minutes">%M</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span class="tk_counter seconds">%S</span><span class="tk_text">Seconds</span></span>'));
        });
    });

    /*===================================*
	04. BACKGROUND ANIMATION JS
	*===================================*/
	var $particles_js = $('#banner_bg_effect');
	if ($particles_js.length > 0) {
		particlesJS('banner_bg_effect',
			// Update your personal code.
			{
				"particles": {
					"number": {
						"value": 80,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#ffffff"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 0.8,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.5,
							"sync": false
						}
					},
					"size": {
						"value": 7,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 20,
							"size_min": 0.3,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#ffffff",
						"opacity": 0.20,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 6,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 20,
							"duration": 2,
							"opacity": 1,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			}
	
		);
	}

	//video popup
	$('.video-view').magnificPopup({
  type: 'iframe',
	});

		   /*-------------------------------------
      Horizontal Scroll Roadmap
    -------------------------------------*/
    if ($('#timiline-wrapper').length > 0) {
        var ps = new PerfectScrollbar('#timiline-wrapper', {
            wheelSpeed: 2,
            wheelPropagation: true,
            maxScrollbarLength: 400,
            suppressScrollY: true
        });
    }

 

   //owl carosule
   $('.owl-carousel').owlCarousel({
    dots:true,
    dotsEach:true,
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
    
 
    // document.querySelector('.modal-bgg').addEventListener('click', 
    // 	function(){
    // 		document.querySelector('.modal-bgg').style.display = 'none';
    // 	});


    //jquery end
     });
	