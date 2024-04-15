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
