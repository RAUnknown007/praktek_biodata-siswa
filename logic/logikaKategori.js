let biodataSiswa = require('../data/siswa.js');


function menentukanKategori(tahunLulus) {
    if (tahunLulus <= 2018) {
  return "Kategori Kondisi: Lulus Sebelum Covid"
} else if (tahunLulus > 2018 && tahunLulus < 2022){
  return"Kategori Kondisi: Lulus Saat Covid"
} else if (tahunLulus > 2021){
  return"Kategori Kondisi: Lulus Setelah Covid"
} else {
  return"Kategori Kondisi: Masukan Tahun Yang Valid!"
}
};

menentukanKategori();

module.exports = menentukanKategori;