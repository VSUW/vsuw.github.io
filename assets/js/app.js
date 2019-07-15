let nav = `<ul id="menu-primary" class="menu menu-primary"> <!--menu primary -->
          <li class="menu-item menu-item-fixed menu-item-has-children"><a href="/about-us">About</a>
            <ul class="sub-menu">
            <a href="/about-us/leadership.html"><li class="menu-item">Leadership</li></a>
            <a href="/about-us/contact-us.html"><li class="menu-item">Contact Us</li></a>
              <a href="/about-us/ethics-and-accountability.html"><li class="menu-item">Ethics and Accountability</li></a>
              <a href="/about-us/press-kit.html"><li class="menu-item">Press Kit</li></a>
            </ul>
          </li>
		 
		  <li class="menu-item menu-item-fixed menu-item-has-children"><a href="/what-we-do">What We Do</a>
            <ul class="sub-menu">
              <a href="/what-we-do/fight-for-kids.html"><li class="menu-item">Fight for Kids</li></a>
              <a href="/what-we-do/fight-for-families.html"><li class="menu-item">Fight for Families</li></a>
              <a href="/what-we-do/fight-for-neighborhoods.html"><li class="menu-item">Fight for Neighborhoods</li></a>
			        <a href="/what-we-do/fight-for-innovative-solutions.html"><li class="menu-item">Fight for Innovative Solutions</li></a>
            </ul>
          </li>
		 
		  <li class="menu-item menu-item-fixed menu-item-has-children"><a href="/get-involved">Get Involved</a>
            <ul class="sub-menu">
              <a href="/get-involved/volunteer.html"><li class="menu-item">Volunteer</li></a>
              <a href="/get-involved/ways-to-give.html"><li class="menu-item">Ways To Give</li></a>
              <a href="/get-involved/join-a-group.html"><li class="menu-item">Join a Group</li></a>
              <a href="/get-involved/advocate.html"><li class="menu-item">Advocate</li></a>
            </ul>
          </li>
		 
		  <li class="menu-item menu-item-fixed menu-item-has-children"><a href="/get-help">Get Help</a>
            <ul class="sub-menu">
              <a href="/get-help/resources.html"><li class="menu-item">Resources</li></a>
              <a href="/get-help/211.html"><li class="menu-item">211</li></a>
              <a href="/get-help/publications.html"><li class="menu-item">Publications</li></a>
              <a href="/get-help/project-connect.html"><li class="menu-item">Project Connect</li></a>
            </ul>
          </li>
		   
		  <li class="menu-item menu-item-fixed menu-item-has-children"><a href="/blog">Blog</a></li>
		   
           <li class="menu-item menu-item-give"><a href="/donate">Donate</a></li>
        </ul> <!-- menu primary closing -->`



$('nav').html(nav);


!(function ($) {

  /**
   * Modules
   */
  var app = {}

  /**
   * Mini Helper Objects
   */
  var _w = {}, // Window
      _s = {}; // Screen

  /**
   * Module Properties
   *
   * config
   * data
   * $el
   * 
   */
  app = {

    // Config
    config : {
      environment : window.location.href.match(/(localhost)/g) ? 'development' : 'production',
      debug : window.location.href.match(/(localhost)/g) ? true : false
    },

    // Data
    data : {
      temp : null,
      binds : {}
    },

    // URLs
    urls : {
      social : {
        facebook : '',
        twitter : '',
        youtube : '',
        instagram : '',
        pinterest : '/'
      },

    },

    // Public Keys
    keys : {
      addthis : 'ra-536cbe5438ea26f8'
    },

    // Console (Client)
    console : {
      color : {
        'error'     : '#da1a1a',
        'event'     : '#3d8627',
        'function'  : '#3db330',
        'callback'  : '#6c6c6c',
        'object'    : '#ac07db',
        'animation' : '#c3028f',
        'control'   : '#d2a946',
        'plugin'    : '#e734d0',
        'waypoint'  : '#4e77c1',
        'hash'      : '#ad74ed',
        'number'    : '#1c1c1c',
      }
    },

    // Supports
    supports : {

    },

    // Body Classes
    classes : {
      modal_overlay : 'app--modal-overlay',
    },

    // Elements
    $el : {
      body : $('body'),
      container : $('#app'),

      header : $('#header'),

      menu : {
        header : $('.header__menu'),
      },

      nav : {
        dropdown  : $('#nav-dropdown')
      },

      modals : {
        control : $('*[data-control-modal]'),
        modal : $('.modal'),
        bay : $('#modals'),
        close : $('.modal-close')
      },

      loader : $('#loader'),

      slider : {
        basic    : $('.slider--basic'),
        gallery  : $('.slider--gallery'),
        carousel : $('.slider--carousel'),
        framed   : $('.slider--framed'),
      }
    },

    // Flags
    flag : {
      animating : false
    },

    // Debug 
    debug : {
      events : {
        'window' : {
          scroll : false,
          resize : false,
          orientationchange : false
        },
        'DOM' : {
          ready : true
        }
      }
    }

  };


$('.plus-btn').click(function(){
  $('body').toggleClass('menu-open');
})
  /**
   * Init
   */
  app.init = function () {
    
    // Basics 
    this.events()
    this.modals.init()

    // Plugins 
    this.plugins.init()

    // Animations
    this.animations.init()
    this.scroller.init()
    this.waypoints.init()

    // Compatibility
    this.compatibility.init()

    // App specific
    this.navDropdown.init()
    this.tabs()
    this.blockHover()

  }


  /**
   * Tabs
   * @depency animate.css
   */
  app.tabs = {


    $el : {
      container : $('.tabs')
    },

    init: function() {
      this.events()
    },

    events: function() {
    

    }


  }
  
  /**
   * Slides (Sliding Tabs)
   */
  app.tabs = function() {

    // Default Action
    $('.slide').hide();

    // Refactoring for multiple tabs on same page
    $('.slides-nav').each( function(index) {
      $(this).children('li:first').addClass('active').show();
      $(this).siblings('.slides').find('.slide:first').show();
    })

    $('.slides-nav li').click(function (event, i) {
      event.preventDefault();

      if ( app.config.debug ) console.log('%cEVENT', 'color:'+app.console.color.event, '- Clicked .slides-nav li')

      var index           = $(this).index(),
          normalizedIndex = index + 1,
          slideContainer   = $(this).parent().parent('.slides-container'),
          slideMenu        = $(this).parent().find('li'),
          slideContent     = slideContainer.find('.slide'),
          slideFirst       = slideContainer.data('tab-first');


      /**
       * If two slide are on page (mobile)
       */
      // if( slideFirst ) {
        slideContainer.attr('data-active-tab', ''+ normalizedIndex +'')
      // }
      // else {
      //   slideContainer.attr('data-active-tab', ''+ normalizedIndex +'')
      // }
      
      /**
       * Mobile tab 'prev','next' classes
       */
      slideMenu.removeClass('active');
      slideMenu.removeClass('prev');
      slideMenu.removeClass('next');
      $(this).removeClass('next');
      $(this).next().addClass('next');
      $(this).prev().addClass('prev');
      $(this).addClass('active');

      slideContent.hide();

      var activeTab = $(this).find('a').attr('href'),
          slide      = slideContainer.find('.tab')

      slide.addClass('animated fadeOutLeft')
      $(activeTab).fadeIn().removeClass('fadeOutLeft').addClass('fadeInRight');


      // if ( $(window).width() < 768 || App.helpers.isUserAgent().mobile ) {
      //   $('.slide__menu').each( function(index) {
      //     $(this).children('li').removeClass('next')
      //     $(this).children('li').removeClass('prev')
      //   })
      //   $(this).next().addClass('next');
      //   $(this).prev().addClass('prev');
      // }

      return false;
    });
  }

  /**
   * Nav Dropdown
   */
  app.navDropdown = {

    $el : {
      toggle : $('#menu-toggle'),
      // close : $('.nav-dropdown__close'),
      container : app.$el.menu.header
    },

    init: function() {

      this.events()
    },

    events: function() {
      $(document).delegate('#menu-toggle', 'click', function (event) {
        event.preventDefault()

        var $this = $(this),
            $body = $('body')

        $this.toggleClass('menu-toggle--x')
        $('#header').toggleClass('header-open')
        $('#header').toggleClass('header--sticky-show')

      })
    }
  }

      var previousScroll = 0;

        // if ($(window).width() > 960) {
        if ($(window).width() > 1100) { //considering ipad

          $(window).scroll(function(){

            var currentScroll = $(this).scrollTop();

          //   /*
          //     If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
          //   */
            if( currentScroll <= 450 ) {
              $('.header').removeClass('header--sticky')
              $('.header').removeClass('header--sticky-show-alt')
              // $('.menu-toggle').removeClass('visible')
              // $('.btn--sticky').removeClass('visible')

            }

            if (currentScroll > 100 && currentScroll < $(document).height() - $(window).height()){
              $('.header').addClass('header--sticky')
              // $('.menu-toggle').addClass('visible')
              // $('.btn--sticky').addClass('visible')
            }

            if (currentScroll > 100 && currentScroll < $(document).height() - $(window).height()){
              $('.header').addClass('header--sticky-show-alt')
            }
          });
        }


      var previousScroll = 0;

        // if ($(window).width() < 960) {
  
        if ($(window).width() < 1100) { //emcompass ipad

          $(window).scroll(function(){

            var currentScroll = $(this).scrollTop();

          //   /*
          //     If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
          //   */
            if( currentScroll <= 100 ) {
              $('.header').removeClass('header--sticky')
              $('.menu-toggle').removeClass('visible')
              $('.btn--sticky').removeClass('visible')

            }
            if (currentScroll > 100 && currentScroll < $(document).height() - $(window).height()){
              $('.header').addClass('header--sticky')
              $('.menu-toggle').addClass('visible')
              $('.btn--sticky').addClass('visible')
            }
          });
        }


         if ($(window).width() < 1100) { //emcompass ipad

            $('ul a').click(function() {
             $('header').removeClass('header--open').addClass('header--hide');

             });

        }



    /**
     * Header
     */

    if ( $( '.hero--subpage' ).hasClass( "hero--woverlay" ) ) {
      $('body').addClass('body--header-alt');
    }
    if ( $( '.hero' ).hasClass( "hero--gray" ) ) {
      $('body').addClass('body--header-alt');
    }




    




  /**
   * Plugins
   */
  app.plugins = {

    /**
     * Plugin object name 
     * @example (window.<NAME>)
     */
    plugin : [
      { name : 'slick', jquery : true },
      { name : 'WOW' },
    ],


    /**
     * Init
     */
    init: function() {

      this.slick()
      // this.polyfills()

    },


    /**
     * Slick Slider
     */
    slick: function() {

      var _this = app.plugins;

      // if ( !$.slick ) return false;

      /**
       * Slider Options
       * @type {Object}
       */
      var options = {
        // Basic (Default)
        basic : {
          fade: true,
          arrows: true,
          appendArrows: $('.slick-arrow-container'),
          nextArrow: '<a class="icon icon-angle-right slick-arrow--next"></a>',
          prevArrow: '<a class="icon icon-angle-left  slick-arrow--prev"></a>',
          dots: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
          ]
        },

        // Gallery (used with carousel as controlNav )
        gallery : {
          
        },

      }

      $('.slider__featured').slick({
        // infinite: false,
        slidesToShow: 3,
        // slidesToScroll: 1,
        arrows: true,
        dots: false,
        // autoplaySpeed: 3000,
        // appendArrows: $('.slick-arrow-container') ,
        nextArrow: '<i class="icon-arrow-right-med slick-arrow--next" aria-hidden="true"></i>',
        prevArrow: '<i class="icon-arrow-left-med slick-arrow--prev" aria-hidden="true"></i>',
        responsive: [
            {
              breakpoint: 1183,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 1,
                // infinite: true,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });  
      $('.slider__image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplaySpeed: 3000,
        // appendArrows: $('.slick-arrow-container') ,
        nextArrow: '<i class="icon-arrow-right-med slick-arrow--next" aria-hidden="true"></i>',
        prevArrow: '<i class="icon-arrow-left-med slick-arrow--prev" aria-hidden="true"></i>',
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,
                // infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });  


      /**
       * Event Listener: window onload
       */
      window.addEventListener('load', function (event) {

        $('.slider--basic').slick( options['basic'])
        
        // app.$el.slider.basic.flexslider( options['basic'] )

      })

    },

    /**
     * Polyfills
     */
    polyfills: function() {

      // Object-fit
      objectFit.polyfill({
        selector: '.slide__bg img', // this can be any CSS selector
        fittype: 'cover',           // either contain, cover, fill or none
        // disableCrossDomain: 'true'  // either 'true' or 'false' to not parse external CSS files.
      })
    },


  }



/**
 * Four Hover Homepage
 */ 

 app.blockHover = function() {
  $('.block-hover').hover(function(){

    var block = $(this),
        img   = $(block).attr('rel');

        // console.log(block);
        // console.log(img);

    $(img).addClass('active');
    $(img).siblings().removeClass('active');

  });
 }


 /**
  * Accordion
  */
  $('.accord-simple').accord({
      openSingle: true,
  });


  /**
   * Events
   */
  app.events = function () {


    /**
     * Sample
     */
    $(document).delegate('.class-name', 'click', function (event) {

      // code here

    })


  }



  /**
   * Modals
   */
  app.modals = {

    init: function() {

      var modal = app.$el.modals.modal;

      // Move all modals on page into modal bay
      modal.appendTo(app.$el.modals.bay)

      // Bind events
      this.events()
    },

    events: function() {

      var _this = app.modals;

      // Click event
      $(document).delegate(app.$el.modals.control.selector, 'click', function (event) {
        event.preventDefault()

        var modalID   = $(this).data('control-modal'),
            videoURL  = $(this).data('video-url')

        // If video
        if ( videoURL ) {

          // Detect video player
          var url_vimeo   = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g
          var url_youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
          var url_image   = /([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?(?:jpg|jpeg|gif|png))/gi

          if( url_vimeo.test(videoURL) ) {
            var detected_embed  = '<iframe width="1400" height="788" src="//player.vimeo.com/video/$1?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
            var embed           = videoURL.replace(url_vimeo, detected_embed);
          }

          if( url_youtube.test(videoURL) ) {
            var detected_embed  = '<iframe width="1400" height="788" src="https://www.youtube.com/embed/$1?autoplay=1" frameborder="0" allowfullscreen></iframe>'
            var embed           = videoURL.replace(url_youtube, detected_embed)
          } 

          if( url_image.test(videoURL) ) {
            var detected_embed  = '<a href="$1" target="_blank"><img class="sml" src="$1" /></a><br />'
            var embed           = videoURL.replace(url_image, detected_embed)
          }          
          
          // $(modalID).append(embed)
          $(modalID).children('.video-container').append(embed)

          console.log('videoURL', videoURL)
          console.log('modalID', modalID)
        }

        _this.modalShow(modalID);
      })

      // Add close event listener - ESC
      $(document).on('keyup', function (event) {

        var _this = app.modals;
        
        event.preventDefault()
        
        var activeModal = $('.modal.show').attr('id'),
            activeModalID = '#'+activeModal;

        if ( activeModal !== undefined ) {
          // Check if ESC key
          if ( event.keyCode == 27 ) {
            _this.modalClose(activeModalID)
          }

          if ( app.config.debug ) console.log('%cEVENT', 'color:'+app.console.color.event, '- toggle '+activeModalID+' by keyup ESC')
        }
      })

      // Add close event listener - .modal--close
      $(document).delegate(app.$el.modals.close.selector, 'click', function (event) {
        
        event.preventDefault()

        var activeModal = $('.modal.show').attr('id'),
            activeModalID = '#'+activeModal;

        if ( activeModal !== undefined ) {
          _this.modalClose(activeModalID)
        }

        if ( app.config.debug ) console.log('%cEVENT', 'color:'+app.console.color.event, '- toggle '+activeModalID+' by click on '+app.$el.modals.close.selector)
      })

      // Close modal by clicking on overlay
      $(document).delegate('#app.app--modal-overlay', 'click', function (event) {
        var activeModal = $('.modal.show').attr('id'),
            activeModalID = '#'+activeModal

        if ( !$(event.target).closest('.modal').length) {
          // Clicked outside of modal
          _this.modalClose(activeModalID)
        }
      })

    },



    modalShow: function(targetID) {

      var targetID = targetID || null;

      // console.log('targetID',targetID)

      // Toggle body class
      app.$el.container.toggleClass(app.classes.modal_overlay)

      // Load any videos

      // Toggle modal class
      $(targetID).toggleClass('show')

      // Wrap event binding
      // app.$el.container.bind('click', function (event) {

      //   var activeModal = $('.modal.show').attr('id'),
      //       activeModalID = '#'+activeModal;

      //   if ( activeModal !== undefined ) { _this.modalClose(activeModalID) }
          
      // })

      
      if ( app.config.debug ) console.log('%cDATA-CONTROL', 'color:'+app.console.color.control, '- modalShow with ID '+targetID)

    },


    /**
     * modalClose
     * 
     * @param  {String} targetID 
     */
    modalClose: function(targetID) {

      var targetID = targetID || null;

      // Toggle body class
      app.$el.container.toggleClass(app.classes.modal_overlay)

      // Toggle modal class
      $(targetID).toggleClass('show')

      // Remove any videos
      $(targetID).find('iframe').remove()

      // Unbind wrap event
      // app.$el.container.unbind('click')

      if ( app.config.debug ) console.log('%cDATA-CONTROL', 'color:'+app.console.color.control, '- modalClose ID '+targetID)
    }



  },



  /**
   * Compatibility
   */
  app.compatibility = {
    
    init: function() {

      this.setBrowserBodyClass()

    },
    
    setBrowserBodyClass: function() {

      var browser = getBrowserName()

      // console.log('browser: ', browser)
      // app.$el.body.addClass(browser)

      $('body').addClass(browser)
    }
    
  }




  /**
   * Waypoint
   * 
   * @param  {Object}   element  jQuery selector
   * @param  {Function} callback 
   */
  app.waypoint = function(element, offset, callback) {

    if ( !element || element.length <= 0 ) return false; 
    var waypoint_passed = false;

    window.addEventListener('scroll', function (event) {

      var element_offset_top = element.offset().top,
          window_offset_top  = document.documentElement.scrollTop || document.body.scrollTop;

      // If unflagged and below waypoint
      if ( waypoint_passed == false && (window_offset_top > (element_offset_top - offset)) ) {

        callback({
          element        : element,
          position       : 'below',
          element_offset : element_offset_top,
          window_offset  : window_offset_top
        })

        waypoint_passed = true;

        // Reset waypoint firing flag
        // setTimeout(function() { waypoint_passed = false; }, 5000)
      }

      // If unflagged and above waypoint
      if ( waypoint_passed == true && (window_offset_top < (element_offset_top - offset)) ) {

        callback({
          element        : element,
          position       : 'above',
          element_offset : element_offset_top,
          window_offset  : window_offset_top
        })

        waypoint_passed = false;
      }

    })

  }

  /**
   * Waypoints
   */
  app.waypoints = {

    init: function() {
      this.example()
    },

    example: function() {

      var $waypoint = $('.example-waypoint');

      if ( !$waypoint || $waypoint.length == 0 ) return;

      app.waypoint( $waypoint, 200, function (data) {

        if ( data.position == 'below' ) {
          // Do stuff here
        }
        if ( data.position == 'above' ) {
          // Do stuff here
        }

        if ( app.config.debug ) console.log('%cWAYPOINT', 'color:'+app.console.color.waypoint, $waypoint.selector, data )
        
      })

    }
  }




  /**
   * Scroller
   *
   * init
   * onScroll
   * requestTick
   * update
   */
  app.scroller = {

    debug : false,
    last_known_y : 0,
    previous_y   : 0,
    stage_height : 0,
    ticking : false,

    /**
     * Init
     */
    init: function() {
      var _this = app.scroller;

      window.addEventListener('scroll', _this.onScroll.bind(this), false)
      window.addEventListener('resize', function() {
        _this.stage_height = $(window).height()
      }, false)
    },
    
    /**
     * On Scroll
     */
    onScroll: function() {
      var _this = app.scroller;

      _this.last_known_y = window.pageYOffset;
      _this.requestTick()
    },
    
    /**
     * Request Tick
     */
    requestTick: function() {

      var _this = app.scroller;

      if( !_this.ticking ) {
        window.requestAnimationFrame( _this.update.bind(this) )
      }
      _this.ticking = true;
    },
    
    /**
     * Update
     */
    update: function() {

      var _this     = app.scroller,
          direction = {},
          y         = _this.last_known_y;
          
      _this.ticking = false;

      direction.down = ( _this.previous_y > y ) ? false : true;
      direction.up   = ( _this.previous_y < y ) ? false : true;
        

      /**
       * Animation Functions
       * Call animation frame functions here
       */
      


      // Log {direction} and posY
      if ( _this.debug ) console.log('%cEVENT', 'color:'+app.console.color.event, ' requestAnimationFrame', {
        'up'     : direction.up,
        'down'   : direction.down,
        'pageY'  : y
      } )

      // Increment Y Pos
      _this.previous_y = y;
    }

  }


  /**
   * Animations
   */
  app.animations = {
    
    $el : {
      
    },

    /**
     * Initialize
     */
    init: function() {
     },

    /**
     * Animations to fire on window.load
     * Calls in the window.onload event
     */
    onWindowLoad: function() {

      
    },

    
  }



  /**
   * Nav scroll
   */
  app.stickyHeader = {


  }

  /**
   * Sticky header - hide on scroll down
   */
  var didScroll;
  var lastScrollTop = 0;
  var delta         = 50;
  var navbarHeight  = $('.hero').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop()
    var navbarHeight  = $('#header').outerHeight();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // console.log('st', st)
    // console.log('navbarHeight', navbarHeight)
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('header--show').addClass('header--hide');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('header').removeClass('header--hide').addClass('header--show');
      }
    }
    
    lastScrollTop = st;


    if( st == 0 ) {
      $('header').removeClass('header--show')
    }
  }




  /**
   * Loader
   */
  app.loader = {

    show : function() {
      app.$el.body.addClass('body--loading')
    },

    hide: function() {
      app.$el.body.removeClass('body--loading')
    }
  }


/**
   * Tabs
   */
  app.tabs = function() {

    // Hide tabs by default
    // Show first active tab
    $('.tab').hide()
    $('.tab:first-of-type').show()

    // On Click Event
    $('.tabs__menu li').click(function (event, i) {
      var index           = $(this).index(),
          normalizedIndex = index + 1,
          tabsContainer   = $(this).parent().parent().parent('.tabs-container'),
          tabsMenu        = $(this).parent().find('li'),
          tabsContent     = tabsContainer.find('.tab'),
          tabsFirst       = tabsContainer.data('tab-first');

      /**
       * If two tabs are on page (mobile)
       */
      if( tabsFirst ) {
        tabsContainer.attr('data-active-tab', ''+ normalizedIndex +'')
      }
      else {
        tabsContainer.attr('data-active-tab', ''+ normalizedIndex +'')
      }
      
      /**
       * Mobile tab 'prev','next' classes
       */
      tabsMenu.removeClass('active');
      // tabsMenu.removeClass('prev');
      // tabsMenu.removeClass('next');
      // $(this).removeClass('next');
      // $(this).next().addClass('next');
      // $(this).prev().addClass('prev');
      $(this).addClass('active');

      tabsContent.hide();
      var activeTab = $(this).data('tab-trigger'),
          tabs      = tabsContainer.find('.tab')

      tabs.addClass('animated fadeOutRight')
      $(activeTab).fadeIn().removeClass('fadeOutRight').addClass('fadeInLeft');

      return false;
    });
  }

  $(".tab__faq").click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

/**
 * Donately Form
 */

 $('.donationAmountDonate').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})


 $(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  })

})



/**
 * Recording Form Entries
 */
    //Set amount variable to initial load amount
     var amount         = (''),
         firstName      = (''),
         lastName       = (''),
         emailAddress   = (''),
         newFrequency   = $('input[name="recurring"]:checked').val(),
         duration       = (1),
         frequency      = ('only_recurring'),
         campaignId     = $('input[name="campaignId"]'),
         impact         = ('ImpactGrants'),
         company        = (''),
         comments       = (''),
         hoc            = (''),
         adultQuan      = (''),
         childQuan      = ('')

   $('input[type="radio"]').click(function() {
       if($(this).attr('value') == 6088) {
            $('.hoc-checkbox').addClass('active');
            // $('.hoc-table').addClass('active');
            // $('#intervalDonateForm .input-price-options input:checked').prop('checked', false)
            // console.log('checked');
       }

       else {
          // do nothing
       }
   });

   $('.hoc-checkbox').click(function() {
      $('.hoc-table').addClass('active');
      $('.gfield_radio').addClass('hidden');
      $('.label-inline').addClass('hoc');
      $('#intervalDonateForm .input-price-options input:checked').prop('checked', false)
      newFrequency = 0;
      // console.log('checked');
   })

   // $('input[type="checkbox"]').click(function() {
   //     if($(this).attr('value') == 6088) {
   //          $('.hoc-table').addClass('active');
   //          $('#intervalDonateForm .input-price-options input:checked').prop('checked', false)
   //          // console.log('checked');
   //     }

   //     else {
   //        // do nothing
   //     }
   // });

    //Record Amount Choice
    $('input[name="donate-amount"]').click(function(){
      amount = $(this).val()
      // console.log(amount);
    });


    $('.tab-link').click( function (){

      var price; 
      price = $(this).attr('data-value');
      $('#donationAmount').val(price)
      // console.log(price);
     });


    //Record Name Entry
    $('#firstNameDonation').keyup(function (event) {
        firstName = $(this).val()
        console.log(firstName);
    });

    $('#lastNameDonation').keyup(function (event) {
        lastName = $(this).val()
        console.log(lastName);
    });

    //Record Email Entry
    $('#emailAddressDonation').keyup(function (event) {
        emailAddress = $(this).val()
        console.log(emailAddress);
    });


    //Record Duration Selection
    $('input[name="recurring"]').click(function(){

        newFrequency   = $('input[name="recurring"]:checked').val(),
        console.log(newFrequency);
        // duration = $(this).val()
        // console.log(duration);

        // if (duration == 1) {
        //   frequency = ('only_recurring')
        // }else {
        //   frequency = ('only_onetime')
        // }

        // console.log(frequency);
        

    });


 //Submit form to donately and load donately form
    $('.btn--enter').click(function(e) {
      e.preventDefault();
      // console.log('init');
      $(".form--donate").addClass('hidden');
      $(".donation--form").removeClass('hidden');
      $(".donation--form").addClass('show');

      //Update amount with the most recent amount
      var newAmount = $('#donationAmount').val()
      amount = newAmount

  
      // console.log(amount);
      // console.log(newFrequency);

  Donately.init({
          selector: '.donation--form',
          options: {
            'donately-id':'act_5db992ebdd4f',
            'stripe-publishable-key': 'pk_test_1ENBBLTRaJwbVtvbGTEa88Mj00VVmdD9pm', 
            'donately-amount': amount,
            // 'data-donately-ga-account': 'UA-31761862-1',
            'donately-billing-zip': true,
            // 'donately-custom-fields': customfields,
            'donately-custom-css': '{"label.donately-label[for=donately-first-name]":{"display": "none"},"label.donately-label[for=donately-zip-code]":{"display": "none"},"label.donately-label[for=donately-last-name]":{"display": "none"},"label.donately-label[for=donately-email]":{"display": "none"}, "input.donately-text-input":{"box-shadow": "none", "border": "2px solid #ebeaed", "border-top-color": "none", "border-left-color": "none", "border-right-color": "none", "border-radius": "none"},"#fees_description":{"font-size":"1.1em","font-weight":"bold"},".donately-btn":{"background-color": "#f04639 !important;", "text-transform":"uppercase","font-family":"roboto","font-size":"13px","font-weight":"700","border-radius":"0px","padding":"20px 50px"},".donately-btn:hover":{"background-color": "#ed2718 !important;"},".donately-radio-option:last-child input":{"margin-left":"0px"},".donately-donation-form":{"padding":"20px"},"label.donately-label, .donately-custom-fields section":{"font-size":"1em","font-family":"roboto"},".donately-donation-form":{"font-family":"roboto", "padding-top": "0px", "padding-bottom": "0px", "padding-left": "15px", "padding-right": "15px"}, "donately-donation-form":{"height": "728px !important"}}'
          },

          afterFormLoad: function() {
            console.log(lastName);
            console.log(firstName);
            console.log(emailAddress);
            $( ".donately-submit" ).click(function() {
              $( ".donately-thank-you" ).remove();
              // console.log('removed');
            })
            // Donately.thank_you_message    = "Thank you for your {{formatted_amount}} donation! Your donation changes the odds for everyone around us.";
            // Donately.social_share_message = "Keep up the good work by sharing your contribution!";

            $('#donately-first-name').val(firstName)
            $('#donately-last-name').val(lastName)
            $('#donately-email').val(emailAddress)

            // $('donately-duration').val(frequency)
            if(newFrequency == 1){
                 $('#donately-recurring-donation').prop('checked', true);
                 $('#donately-one-time-donation').prop('checked', false);
            } else{
                 $('#donately-one-time-donation').prop('checked', true);
                 $('#donately-recurring-donation').prop('checked', false);
            }   
          },
          onSuccess: function(donation_response) {
            window.location.href = "https://vsuw.org/"

            // if (typeof hoc !== 'undefined') {
            //   window.location.href = "https://uwcentralcarolinas.org/thank-you-hoc"
            // } else {
            //   window.location.href = "https://uwcentralcarolinas.org/thank-you"
            // }
          }          
        })

    });





  /**
   *
   * 
   * ---------------
   * Private Methods
   * ---------------
   *
   * 
   */
  

  /**
   * Inject Script
   * 
   * @param  {String} url 
   */
  function injectScript(url) {

    var script        = document.createElement('script');
        script.async  = true;
        script.src    = url;

    document.body.appendChild(script);
  }


  /**
   * Scroll To Element
   * 
   * @param  {Object} options 
   */
  function scrollToElement(options){

    var duration  = options.duration || 250,
        easing    = options.easing || 'swing',
        offset    = options.offset || 0;

    var target    = options.target || false;

    if(target){
      if(/(iPhone|iPod)\sOS\s6/.test(navigator.userAgent)){
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, duration, easing);
      } else {
        $('html, body').animate({
          scrollTop: $(target).offset().top - (offset)
        }, duration, easing);
      }
    }
  }
  
  /**
   * Get Browser Name
   * 
   * @return {String} 
   */
  function getBrowserName() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);

    if ( M[0].length > 0 ) {
      return M[0].toLowerCase(); 
    } else {
      return false;
    }
    
  }

  /**
   * Detect if IE
   * 
   * @return {Boolean}
   */
  function isIE() {

    var undef,rv = -1; // Return value assumes failure.
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
      // IE 10 or older => return version number
      rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      console.log( rv )
    } else if (trident > 0) {
      // IE 11 (or newer) => return version number
      var rvNum = ua.indexOf('rv:');
      rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
      console.log( rv )
    } else {
      return false;
    }

    return ((rv > -1) ? rv : undef);
  }

  /**
   * Prevent Default Shim
   * 
   * @param  {Object} e event
   */
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
    e.preventDefault();
    e.returnValue = false;  
  }

  /**
   * Add Event Listeners
   * Add multiple event listeenrs
   * 
   * @param {Object}   el - element (window, document)
   * @param {String}   s  - selector
   * @param {Function} fn - function to call
   */
  function addEventListeners(el, s, fn) {
    var evts = s.split(' ');
    for (var i=0, iLen=evts.length; i<iLen; i++) {
      el.addEventListener(evts[i], fn, false);
    }
  }


  /**
   * Remove Class Prefix
   * 
   * @param  {String} prefix 
   */
  $.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, el) {
      var classes = el.className.split(" ").filter(function(c) {
          return c.lastIndexOf(prefix, 0) !== 0;
      });
      el.className = $.trim(classes.join(" "));
    });
    return this;
  };

  function isMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;

      console.log('is mobile')
    }
  }






  /**
   * Sticky header - hide on scroll down
   */
  var didScroll;
  var lastScrollTop = 0;
  var delta         = 50;
  var navbarHeight  = $('.hero').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop()
    var navbarHeight  = $('#header').outerHeight();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // console.log('st', st)
    // console.log('navbarHeight', navbarHeight)
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('header--show').addClass('header--hide');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('header').removeClass('header--hide').addClass('header--show');
      }
    }
    
    lastScrollTop = st;


    if( st == 0 ) {
      $('header').removeClass('header--show')
    }
  }


  /**
   *
   * 
   * ---------------
   * Event Listeners
   * ---------------
   *
   * 
   */







  /**
   * EVENT: Document Ready
   * @jquery - $(document).ready(function(){  })
   */
  document.addEventListener('DOMContentLoaded', function (event) {
    
    app.init()


  })

  /**
   * EVENT: Window Load
   * @jquery - $(window).load(function(){  })
   */
  window.addEventListener('load', function (event) {
      
    app.animations.onWindowLoad()
    
  })


  /**
   * EVENT(S): Window Scroll, Window Resize, Window OrientationChange
   * Set _w vars in a multi-listener
   */
  addEventListeners(window, 'scroll resize orientationchange', function (event) {

    _w.w = window.outerWidth, 
    _w.h = window.outerHeight,
    _w.t = document.documentElement.scrollTop || document.body.scrollTop,
    _w.l = document.documentElement.scrollLeft || document.body.scrollLeft;

  })

  /**
   * EVENT(S): Window Scroll, Window Resize
   * @jquery - $(window).scroll(function(){  })
   */

  window.addEventListener('scroll', function (event) {

    if ( app.debug.events['window'].scroll && app.config.debug ) {
      console.log('%cEVENT', 'color:'+app.console.color.event, ' window.scroll ', _w)
    }

  })


  /**
   * EVENT: Document Ready
   * $(window).resize(function(){   }).trigger('resize')
   */
  window.addEventListener('resize', function (event) {

    if ( app.debug.events['window'].resize && app.config.debug ) {
      console.log('%cEVENT', 'color:'+app.console.color.event, ' window.resize ', _w)
    }

  })






  /**
   * EVENT: Window Orientation Change
   * $(window).on('orientationchange', function(){   })
   */
  if ( screen ) {
    window.addEventListener('orientationchange', function (event) {
        
      _s.w = screen.availWidth, 
      _s.h = screen.availHeight,
      _s.o = screen.orientation.type;

    })
  }





  
  
  
  return app;
})(jQuery);






