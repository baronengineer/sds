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
    