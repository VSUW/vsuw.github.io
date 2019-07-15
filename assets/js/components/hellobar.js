/**
 * Hello Bar
 */
!(function ($) {
  $(window).load(function() {

    // console.log('Cookies.get', Cookies.get('hellobar')); //find out if hello bar is set, if true it's been set if undefined it has not

    if ( !Cookies('hellobar')) { // if hellobar cookies is now set then run this function
      setTimeout(function() {
        $('body').addClass('lowered');
        $('.hello-bar').addClass('visible');
      }, 500);
    }

    $('.close-hello-bar').click( function () {
      $('body').removeClass('lowered');
      $('.hello-bar').removeClass('visible');
      Cookies.set('hellobar', 'true'); // after close of the hellobar, set hellobar cookie to true
    });

  });
})(jQuery);
