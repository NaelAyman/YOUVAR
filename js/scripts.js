(function () {
  // Start Loader

  $(window).on("load", function () {
    $("body").css("overflow-y", "auto");
    $(".loader").fadeOut();
    $(".loading").fadeOut().css({
      "transituin-delay": "1s",
    });
  });

  // Start Navbar

  $(".overlay").fadeOut();

  $(".mob-collaps").on("click", function () {
    $(this).parent().find(".nav-links").toggleClass("nav-open");

    $(".overlay").fadeToggle();

    $(this).find("span:first-child").toggleClass("rotate");
    $(this).find("span:nth-child(2)").toggleClass("none");
    $(this).find("span:nth-child(3)").toggleClass("rotate2");
  });

  $(".overlay").on("click", function () {
    $(".nav-links").removeClass("nav-open");
    $(this).fadeOut();

    $(".mob-collaps span:first-child").removeClass("rotate");
    $(".mob-collaps span:nth-child(2)").removeClass("none");
    $(".mob-collaps span:nth-child(3)").removeClass("rotate2");
  });

  // Start Prevent Default

  $(".default").on("click", function (e) {
    e.preventDefault();
  });

  // Add smooth scrolling on all links inside the navbar
  // Activating The Click On The Navbar Links
  $("a.index").on("click", function (e) {
    // e.preventDefault();

    $(this).parent().addClass("active").siblings().removeClass("active");

    $(this).parents(".nav-links").removeClass("nav-open");
    $(".overlay").fadeOut();
    $(".mob-collaps span:first-child").removeClass("rotate");
    $(".mob-collaps span:nth-child(2)").removeClass("none");
    $(".mob-collaps span:nth-child(3)").removeClass("rotate2");

    // Animating The Body On Scrolling
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 80,
      },
      1000
    );
  });

  // Lang Dir
  $('.lang').on('click', function() {
    let lang = $(this).parents('html').attr('dir');
    if(lang == 'ltr') {
      $(this).parents('html').attr('dir', 'rtl');
    } else {
      $(this).parents('html').attr('dir', 'ltr');
    }
  });

  // Window Scroll Function For The Navbar
  var lastScrollPosition = 0;

  // Sync Class Active To The Nav Links When Scrolling
  $(window).on("scroll", function () {

    var scrollTop = $(this).scrollTop(),
      $navbarSmash = $("header .nav-menu");

    function smashNavbar() {
      if (scrollTop >= 100) {
        $navbarSmash.addClass("smash");
      } else {
        $navbarSmash.removeClass("smash");
      }
    }
    smashNavbar();

    $(".n-sec").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 100) {
        var blockId = $(this).attr("id");
        console.log(blockId);

        $(".nav-links li a[data-scroll='" + blockId + "']")
          .parent()
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  });

  var input = document.querySelector("#phone");
  window.intlTelInput(input);
})(jQuery);
