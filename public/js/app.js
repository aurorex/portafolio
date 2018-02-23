(function($) {
  let listContact = $('div.contacts-list>div>a');

  listContact.on('mouseover', function() {
    $(this).css({'font-size': '20px', '-webkit-transition': '0.2s', 'color':'rgb(38, 30, 65)', 'cursor':'pointer'});
    $('div.contacts-list>div>a>i').css({'color':'rgb(38, 30, 65)'});
  });

  listContact.on('mouseout', function() {
    $(this).css({'font-size': '18px',  '-webkit-transition': '0.2s', 'color':'rgb(38, 30, 65) '});
    $('div.contacts-list>div>a>i').css({'color':'rgb(38, 30, 65)'});
  });

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 100) {
  //     title.fadeOut();
  //   } else {
  //     title.fadeIn();
  //   }
  // });
  let functionScroll = (start, end) => {
    $(start).on('click', function() {
      var posicion = $(end).offset().top;
      $('html, body').animate({
        scrollTop: posicion
      }, 1000); 
    });
  };
  functionScroll('#homepage-start','#homepage');
  functionScroll('#aboutme-start','#aboutme');
  functionScroll('#skills-start','#skills');
  functionScroll('#portfolio-start','#portfolio');
  functionScroll('#contacts-start','#contacts');
  functionScroll('#coverpage-start', '#coverpage');
  functionScroll('#icon1-contacts','#contacts');
  functionScroll('#icon2-contacts','#contacts');

})(jQuery);