(function($) {
  let listContact = $('div.contacts-list>div>a');

  // evento para el elemento listContact
  listContact.on('mouseover', function() {
    $(this).css({'font-size': '20px', '-webkit-transition': '0.2s', 'color':'rgb(55,8,42)', 'cursor':'pointer'});
    $('div.contacts-list>div>a>i').css({'color':'rgb(55,8,42)'});
  });

  listContact.on('mouseout', function() {
    $(this).css({'font-size': '18px',  '-webkit-transition': '0.2s', 'color':'rgb(45, 107, 73) '});
    $('div.contacts-list>div>a>i').css({'color':'rgb(45, 107, 73)'});
  });

})(jQuery);