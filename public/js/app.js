(function($) {
  let listContact = $('div.contacts-list>div>a');
  // let title = $('h1.text-center');
  // evento para el elemento listContact
  listContact.on('mouseover', function() {
    $(this).css({'font-size': '20px', '-webkit-transition': '0.2s', 'color':'rgb(55,8,42)', 'cursor':'pointer'});
    $('div.contacts-list>div>a>i').css({'color':'rgb(55,8,42)'});
  });

  listContact.on('mouseout', function() {
    $(this).css({'font-size': '18px',  '-webkit-transition': '0.2s', 'color':'rgb(45, 107, 73) '});
    $('div.contacts-list>div>a>i').css({'color':'rgb(45, 107, 73)'});
  });

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 100) {
  //     title.fadeOut();
  //   } else {
  //     title.fadeIn();
  //   }
  // });
  // $('#inicio').on('click', function() {
  //   var posicion = $('#final').offset().top;
  //   $('html, body').animate({
  //     scrollTop: posicion
  //   }, 2000); 
  // });

  // listAnchor.on('click', function() {
    
  // })
  
})(jQuery);