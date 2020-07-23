
(function ($) {

  "use strict";

  $(document).ready(function () {
    

    function scroll_header(){
      //header-bg change on scroll
      $(".smooth-scroll").scroll(function(){
        if($(".smooth-scroll").scrollTop() > 200){
            $("header").addClass("scroll-header");
            $("footer").addClass("scroll-footer");
        }
        else{
            $("header").removeClass("scroll-header");
            $("footer").addClass("scroll-footer");
        }
      })
    }
    scroll_header();

    function header_li(){
      $('.menu ul li').on('click', 'a', function(){
        if($(this).closest('a').next().hasClass('active')){
          $('.menu ul li a').removeClass('active');
      }
      else{
        $('.menu ul li a').removeClass('active');
      }
      $(this).closest('a').addClass('active');
      })
    }
    header_li();

    function toggle_button() {
      $('.header-in .toggle-button').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('Is-toggle');
      });
    }
    toggle_button();

  });
})(window.jQuery);

