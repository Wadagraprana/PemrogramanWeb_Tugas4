// Mengambil elemen-elemen HTML yang diperlukan
const form = document.getElementById('form-login');
const namaInput = document.getElementById('nama');
const usernameInput = document.getElementById('username');
const telpInput = document.getElementById('Telp');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const jurusanInput = document.getElementById('jurusan');
const matkulInput = document.getElementById('matkul');
const dosenInput = document.getElementById('dosen');

// Mendapatkan nama halaman dari URL
const currentPage = window.location.pathname;

// Menambahkan event listener untuk form submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Validasi input sesuai dengan halaman yang sedang dimuat
    if (currentPage.includes('Tugas4Aldo.html')) {
        if (namaInput.value === '' || usernameInput.value === '' || telpInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
            alert('Harap isi semua kolom yang diperlukan');
            return;
        }

        // Menampilkan pesan sukses
        alert('Registrasi berhasil');

        // Mengarahkan pengguna ke halaman "register.html"
        window.location.href = 'register.html';
    } else if (currentPage.includes('register.html')) {
        if (jurusanInput.value === '' || matkulInput.value === '' || dosenInput.value === '') {
            alert('Harap isi semua kolom yang diperlukan');
            return;
        }

        // Menampilkan pesan sukses
        alert('Data kelas telah terambil');

        // Mengarahkan pengguna ke halaman "submit.html"
        window.location.href = 'sukses.html';
    } else if (currentPage.includes('sukses.html')) {
        const ambilKelasButton = document.getElementById('ambilkelas');
        const keluarButton = document.getElementById('keluar');
        
        ambilKelasButton.addEventListener('click', function () {
            // Mengarahkan pengguna kembali ke halaman "register.html"
            window.location.href = 'register.html';
        });
        
        keluarButton.addEventListener('click', function () {
            // Mengarahkan pengguna ke halaman "index.html" atau halaman lain jika diperlukan
            window.location.href = 'Tugas4Aldo.html';
        });
    }
});


function hanyaAngka(evt) {
    var charcode = (evt.which) ? evt.which : event.keycode
    if (charcode > 31 && (charcode < 48 || charcode >57))
        return false;
    return true;
}
