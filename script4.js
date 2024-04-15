$(document).ready(function() {
  $('.hero-content').on('click', function(e) {
      e.preventDefault();  // Menghentikan perilaku default dari link
      const targetUrl = $(this).attr('href');  // Mendapatkan URL tujuan
      $(this).animate({
          opacity: 0,
          left: '-50%'
      }, 1000, function() {
          window.location.href = targetUrl;  // Mengarahkan ke halaman setelah animasi selesai
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
          width: '+=10px',  // Memperbesar lebar link
          height: '+=10px'  // Memperbesar tinggi link
      }, 200);
  }, function() {
      $(this).animate({
          width: '-=10px',  // Mengembalikan lebar link ke ukuran semula
          height: '-=10px'  // Mengembalikan tinggi link ke ukuran semula
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

