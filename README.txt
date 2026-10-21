MEDIA PEMBELAJARAN IPA KELAS 8 - SISTEM EKSKRESI MANUSIA
Dibuat oleh Budi Sucipto, S.Si

CARA MENJALANKAN
- Buka index.html di browser (Chrome/Edge disarankan). Tombol "Snakes and Ladders" membuka ular-tangga.html.
- Untuk dipakai online, unggah seluruh isi folder ini apa adanya ke hosting (misalnya GitHub Pages).
  Jangan memindahkan file keluar dari foldernya karena saling terhubung lewat alamat relatif.

STRUKTUR FILE
index.html               Halaman utama: menu, materi, pengacak kelompok, matching, teka-teki silang,
                         rekap, tentang. (JavaScript halaman-halaman ini ada di dalam file ini.)
ular-tangga.html         Halaman game Snakes and Ladders (hanya kerangka, isinya dari folder css/ dan js/).
css/style.css            Gaya bersama (dipakai kedua halaman).
css/ular-tangga.css      Gaya khusus Snakes and Ladders: papan, bidak, dadu 3D, gelembung soal.
js/shared.js             Fungsi bersama: status sesi, judul/banner, mode satu layar.
js/audio.js              Musik latar dan suara benar/salah.
js/soal-ular-tangga.js   BANK SOAL ular tangga (139 soal, 1 soal = 1 baris, lengkap dengan penjelasan
                         dan bahasa Indonesia/Inggris). Edit atau tambah soal di sini.
js/ular-tangga.js        Logika game: posisi tangga dan ular (objek SL), aturan dadu, tampilan papan.
gambar/ular-tangga.jpg   Gambar latar kotak judul halaman Snakes and Ladders.

YANG SERING DIUBAH (hanya di folder ular tangga)
- Isi soal             : js/soal-ular-tangga.js (satu baris = satu soal; panduan kolom ada di bagian atas file).
- Aturan soal tidak berulang: js/ular-tangga.js, fungsi pilihSoal().
- Letak tangga/ular    : js/ular-tangga.js, objek SL (L = tangga, S = ular).
- Warna papan/dadu     : css/ular-tangga.css.
- Gambar judul         : ganti gambar/ular-tangga.jpg dengan nama yang sama.

CATATAN
- Jumlah kelompok dan skor terbawa antarhalaman lewat sessionStorage browser.
- Tombol Menu Utama di halaman ular tangga kembali ke index.html.
