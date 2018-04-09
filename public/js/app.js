(function($) {

 let functionScroll = (start, end) => {
   $(start).on('click', function() {
     var posicion = $(end).offset().top;
     $('html, body').animate({
       scrollTop: posicion
     }, 1000);
   });
 };

 var controller = new ScrollMagic.Controller();

 new ScrollMagic.Scene({
   triggerElement:'#aboutme'
 })
 .setClassToggle('#aboutme','show')
 .addTo(controller);

 new ScrollMagic.Scene({
   triggerElement:'#skills'
 })
 .setClassToggle('#skills','show')
 .addTo(controller);


 new ScrollMagic.Scene({
   triggerElement:'#portfolio'
 })
 .setClassToggle('#portfolio','show')
 .addTo(controller);

 new ScrollMagic.Scene({
   triggerElement:'#contact'
 })
 .setClassToggle('#contact,#contact-list','show')
 .addTo(controller);


 TweenLite.to($("#titulo-fronted,#titulo-aurora"),3,{alpha:1});

 functionScroll('#homepage-start','#homepage');
 functionScroll('#aboutme-start','#aboutme');
 functionScroll('#skills-start','#skills');
 functionScroll('#portfolio-start','#portfolio');
 functionScroll('#contact-start','#container-contact-list');
 functionScroll('#coverpage-start', '#coverpage');
 functionScroll('#icon1-contacts','#contacts');
 functionScroll('#icon2-contacts','#contacts');

 // evento para la sección de portafolio
 const enlaceRepo1 = $('.enlace');
 const imageRepo1 = $('#img1');

 const enlaceRepo2 = $('.enlace2');
 const imageRepo2 = $('#img2');

 const enlaceRepo3 = $('.enlace3');
 const imageRepo3 = $('#img3');

  enlaceRepo1.on('mouseover', function() {
    imageRepo1.addClass('transparent');
  }) 

  enlaceRepo1.on('mouseout', function() {
    imageRepo1.removeClass('transparent');
  })

  enlaceRepo2.on('mouseover', function() {
    imageRepo2.addClass('transparent');
  }) 

  enlaceRepo2.on('mouseout', function() {
    imageRepo2.removeClass('transparent');
  })
  
  enlaceRepo3.on('mouseover', function() {
    imageRepo3.addClass('transparent');
  }) 

  enlaceRepo3.on('mouseout', function() {
    imageRepo3.removeClass('transparent');
  })
  
})(jQuery);