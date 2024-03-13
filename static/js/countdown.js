simplyCountdown('.simply-countdown',{
    year: 2024, // required
    month: 11, // required
    day: 20, // required
    hours: 8, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    },
}); 


      window.addEventListener('DOMContentLoaded', function () {
        // Fungsi untuk menghapus properti margin-top pada ukuran mobile
        function removeMarginOnMobile() {
          var kirimElement = document.querySelector('.kirim');
          if (window.innerWidth <= 768 && kirimElement) {
            kirimElement.style.marginTop = ''; // Hapus properti margin-top
          }else{
            kirimElement.style.marginTop = '35px'; 
          }
        }
    
        // Panggil fungsi saat halaman dimuat dan ukuran layar berubah
        removeMarginOnMobile();
        window.addEventListener('resize', removeMarginOnMobile);
      });

      const stickyTop = document.querySelector('.sticky-top');
      const offcanvas = document.querySelector('.offcanvas');

      offcanvas.addEventListener('shown.bs.offcanvas', function () {
        
          stickyTop.style.overflow = 'visible';
         
      });

      offcanvas.addEventListener('hidden.bs.offcanvas',function(){
        stickyTop.style.overflow = 'hidden';
        
      });
    
      window.addEventListener('DOMContentLoaded', function () {
        var linkElements = document.querySelectorAll('.gallery .col a');
        
        // Fungsi untuk mengganti href pada link sesuai dengan lebar layar
        function updateHref() {
          for (var i = 1; i <= linkElements.length; i++) {
            var linkElement = linkElements[i];
            if (linkElement) {
              if (window.innerWidth <= 767) {
                linkElement.href = `https://picsum.photos/id/${i + 100}/400/200`;
              } else {
                linkElement.href = `https://picsum.photos/id/${i + 100}/1200/768`;
              }
            }
          }
          
          // Khusus untuk elemen ke-5
          if (window.innerWidth <= 767) {
            linkElements[5].href = 'https://picsum.photos/id/106/400/200';
          } else {
            linkElements[5].href = 'https://picsum.photos/id/106/1200/768';
          }
        }
    
        // Panggil fungsi saat halaman dimuat dan ukuran layar berubah
        updateHref();
        window.addEventListener('resize', updateHref);
      });
    