
let menentukanKategori = require('../logic/logikaKategori');

function biodataSiswa(nama, umur, asal, sekolah, tahunLulus) {
    console.log("Nama            : ", nama);
    console.log("Umur            : ", umur);
    console.log("Asal            : ", asal);
    console.log("Sekolah         : ", sekolah);
    console.log("Tahun Lulus     : ", tahunLulus);
    console.log(menentukanKategori (tahunLulus));
    
}

biodataSiswa("Richad", "30 Tahun", "Jakarta", "Universitas X", 2025);

module.exports = biodataSiswa;