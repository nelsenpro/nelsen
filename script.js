function scrollSmoothTo(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

function callPhoneNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('header nav ul li a');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      scrollSmoothTo(target);
    });
  });

  var phoneNumberLinks = document.querySelectorAll('section#kontak a[href^="tel:"]');
  phoneNumberLinks.forEach(function(phoneLink) {
    phoneLink.addEventListener('click', function(e) {
      e.preventDefault();
      var phoneNumber = phoneLink.getAttribute('href').replace('tel:', '');
      callPhoneNumber(phoneNumber);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // SweetAlert2 untuk dukungan pengembangan
    var supportLink = document.getElementById('supportLink');
    if (supportLink) {
        supportLink.addEventListener('click', function(event) {
            event.preventDefault(); // Menghentikan aksi default dari tautan

            // Menampilkan pesan SweetAlert2 untuk dukungan pengembangan
            Swal.fire({
                title: 'Dukungan Pengembangan',
                html: `
                    <div class="container">
                        <h1>Dukungan Pengembangan</h1>
                        <p>Terima kasih atas dukungan Anda terhadap pengembangan proyek ini. Anda dapat memberikan dukungan melalui berbagai metode pembayaran berikut:</p>
                        <ul class="payment-methods">
                            <li>
                                <div>
                                    <h2>Virtual Account BRI</h2>
                                    <p><span id="bri-va">13281654818173532</span></p>
                                </div>
                                <button class="copy-btn" onclick="copyToClipboard('bri-va')">Salin</button>
                            </li>
                            <li>
                                <div>
                                    <h2>Virtual Account Mandiri</h2>
                                    <p><span id="mandiri-va">886086548217851</span></p>
                                </div>
                                <button class="copy-btn" onclick="copyToClipboard('mandiri-va')">Salin</button>
                            </li>
                            <li>
                                <div>
                                    <h2>Virtual Account BNI</h2>
                                    <p><span id="bni-va">7152654815287752</span></p>
                                </div>
                                <button class="copy-btn" onclick="copyToClipboard('bni-va')">Salin</button>
                            </li>
                            <li>
                                <div>
                                    <h2>DANA</h2>
                                    <p><span id="dana-id">085328736706</span></p>
                                </div>
                                <button class="copy-btn" onclick="copyToClipboard('dana-id')">Salin</button>
                            </li>
                            <li>
                                <div>
                                    <h2>GoPay</h2>
                                    <p><span id="gopay-id">085328736706</span></p>
                                </div>
                                <button class="copy-btn" onclick="copyToClipboard('gopay-id')">Salin</button>
                            </li>
                        </ul>
                    </div>
                `,
                showConfirmButton: true,
                confirmButtonText: 'Tutup',
            });
        });
    }

    // Fungsi untuk menyalin teks ke clipboard
    window.copyToClipboard = function(elementId) {
        var text = document.getElementById(elementId).textContent;
        navigator.clipboard.writeText(text).then(function() {
            alert('Teks disalin: ' + text);
        }, function(err) {
            alert('Gagal menyalin teks: ', err);
        });
    };

    // Fungsi untuk mendapatkan nama bulan dalam bahasa Indonesia
    function getIndonesianMonth(month) {
        var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        return months[month];
    }

    // Fungsi untuk mendapatkan nama hari dalam bahasa Indonesia
    function getIndonesianDay(day) {
        var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        return days[day];
    }

    // Dapatkan tanggal dan waktu saat ini
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = getIndonesianMonth(currentDate.getMonth());
    var currentDay = getIndonesianDay(currentDate.getDay());
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();

    // Format jam agar selalu dua digit
    currentHour = ('0' + currentHour).slice(-2);
    currentMinute = ('0' + currentMinute).slice(-2);

    // Masukkan tanggal dan waktu ke dalam elemen dengan id "dateTime"
    document.getElementById('dateTime').textContent = currentDay + ', ' + currentDate.getDate() + ' ' + currentMonth + ' ' + currentYear + ' ' + currentHour + ':' + currentMinute + ' WIB';

    // Masukkan tahun saat ini ke dalam elemen dengan id "currentYear"
    document.getElementById('currentYear').textContent = currentYear;
});