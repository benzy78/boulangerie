// headerのハンバーガーメニューの開閉
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const navLinks = document.querySelector(".header__nav");
  const navItems = document.querySelectorAll(".header__nav-links a"); 

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); 
    });
  });
});
// headerのハンバーガーメニューの開閉 end

// keyvisualの表示アニメーション
$(document).ready(function () {
  const $keyvisual = $('.fadein');
  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const offsetTop = $keyvisual.offset().top;
    if (scrollTop + windowHeight > offsetTop) {
      $keyvisual.addClass('show');
    }
  });
  $(window).trigger('scroll');
});

// 各セクションのアニメーション
$(document).ready(function() {
  $(window).on("scroll", function() {
    $(".scroll-fadein").each(function() {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) { 
        $(this).addClass("show");
      }
    });
  });
});

