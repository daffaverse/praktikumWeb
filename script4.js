// set animasi untuk pilihan halaman selanjutnya 

$(document).ready(function() {
  $('.hero-content').on('click', function(e) {
      e.preventDefault(); 
      const targetUrl = $(this).attr('href');  
      $(this).animate({
          opacity: 0,
          left: '-50%'
      }, 1000, function() {
          window.location.href = targetUrl; 
      });
  });

  $('.hero-content2').on('click', function(e) {
      e.preventDefault();
      const targetUrl = $(this).attr('href');
      $(this).animate({
          opacity: 0,
          right: '-50%'
      }, 1000, function() {
          window.location.href = targetUrl;
      });
  });
});

$(document).ready(function() {
  $('.hero-content').hover(function() {
      $(this).animate({
          width: '+=10px',  
          height: '+=10px'  
      }, 200);
  }, function() {
      $(this).animate({
          width: '-=10px',  
          height: '-=10px'  
      }, 200);
  });

  $('.hero-content2').hover(function() {
      $(this).animate({
          width: '+=10px',
          height: '+=10px'
      }, 200);
  }, function() {
      $(this).animate({
          width: '-=10px',
          height: '-=10px'
      }, 200);
  });

// Animasi untuk set kontak

  $('.footer1').hover(function() {
    $(this).animate({
        width: '+=10px',
        height: '+=10px'
    }, 200);
}, function() {
    $(this).animate({
        width: '-=10px',
        height: '-=10px'
    }, 200);
});

$('.footer2').hover(function() {
  $(this).animate({
      width: '+=10px',
      height: '+=10px'
  }, 200);
}, function() {
  $(this).animate({
      width: '-=10px',
      height: '-=10px'
  }, 200);
});
});

