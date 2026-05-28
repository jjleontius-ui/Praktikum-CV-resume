console.log("CV Online siap");

//const nama lengkap
const namaLengkap ="Leontius JJ Nande Napa";
console.log(namaLengkap);

// Ubah tahun masuk
let tahunMasuk = 2023;
console.log("Tahun Masuk Awal:", tahunMasuk);
tahunMasuk = 2026;
console.log("Tahun Masuk Setelah Diubah:", tahunMasuk);

// 3 variabel menggunakan typeof
let jurusan = "Manajemen Informasi Kesehatan";
let semester = 6;
let statusaktif = true;

console.log(typeof jurusan);
console.log(typeof semester);
console.log(typeof statusaktif);

//function sapa pengunjung
function sapaPengunjung() {
    alert("Selamat datang di CV saya.");
}
sapaPengunjung();

//function hitung umur
function hitungUmur(tahunLahir) {
    return 2026 - tahunLahir;
}
console.log("Umur saya: " + hitungUmur(2004) + " tahun.");

// array skills
let skills = ["HTML & CSS", "Manajemen Data Kesehatan", "Komunikasi Interprofesional"];
console.log(skills[1]);

//skills dengan push
skills.push("Analisis Data Kesehatan");
console.log("Jumlah skills: ", skills.length);
console.log("Isi Skills terbaru: ", skills);