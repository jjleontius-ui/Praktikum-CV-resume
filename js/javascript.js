// console.log("CV Online siap");

// //const nama lengkap
// const namaLengkap ="Leontius JJ Nande Napa";
// console.log(namaLengkap);

// // Ubah tahun masuk
// let tahunMasuk = 2023;
// console.log("Tahun Masuk Awal:", tahunMasuk);
// tahunMasuk = 2026;
// console.log("Tahun Masuk Setelah Diubah:", tahunMasuk);

// // 3 variabel menggunakan typeof
// let jurusan = "Manajemen Informasi Kesehatan";
// let semester = 6;
// let statusaktif = true;

// console.log(typeof jurusan);
// console.log(typeof semester);
// console.log(typeof statusaktif);

// //function sapa pengunjung
// function sapaPengunjung() {
//     alert("Selamat datang di CV saya.");
// }
// sapaPengunjung();

// //function hitung umur
// function hitungUmur(tahunLahir) {
//     return 2026 - tahunLahir;
// }
// console.log("Umur saya: " + hitungUmur(2004) + " tahun.");

// // array skills
// let skills = ["HTML & CSS", "Manajemen Data Kesehatan", "Komunikasi Interprofesional"];
// console.log(skills[1]);

// //skills dengan push
// skills.push("Analisis Data Kesehatan");
// console.log("Jumlah skills: ", skills.length);
// console.log("Isi Skills terbaru: ", skills);

// query selector untuk menampilkan h1
// const heading = document.querySelector("h1");
// console.log(heading);

//query selector all untuk menampilkan nav a
const navLinks = document.querySelectorAll("nav a");
console.log("jumlah link nav: " + navLinks.length);

navLinks.forEach(link => {console.log(link.textContent);
});

//ubah heading nama CV
const heading = document.querySelector("h1");
heading.textContent = "leontius jj nande napa";

//ubah warna h2 pertama
const h2pertama= document.querySelector("h2");
h2pertama.classList.add("highlight");

// ubah warna h2 kedua
const h2kedua = document.querySelectorAll("h2");
h2kedua[1].classList.toggle("highlight");

// function buatKartu judul dan deskripsi
function buatKartu(judul, deskripsi) {
    const kartu = document.createElement("div");

    const h3= document.createElement("h3");
    h3.textContent = judul;

    const p = document.createElement("p");
    p.textContent = deskripsi;

    kartu.appendChild(h3);
    kartu.appendChild(p);
    return kartu;
}

//memanggil fungsi buatKartu untuk keahlian\
const keahliansection = document.querySelector("#keahlian");
const keahlianKartu = buatKartu(
    "Keahlian Baru", 
    "Saya memiliki keahlian baru dalam analisis data kesehatan.");
keahliansection.appendChild(keahlianKartu);

//Array dataPendidikan dan renderPendidikan()
const dataPendidikan = [
    {institusi : "TKK Santo Fransiskus Lawang", tahun: "2009-2010"},
    {institusi : "SDK Santo Fransiskus Lawang", tahun: "2010-2016"},
    {institusi : "SMPK Budi Mulia Lawang", tahun: "2016-2019"}
];

function renderPendidikan() {
    const ul = document.querySelector("#list-pendidikan");
    ul.innerHTML = "";
    dataPendidikan.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.institusi} (${item.tahun})`;
        ul.appendChild(li);
    });
}
renderPendidikan();

// Tambah data pendidikan baru
dataPendidikan.push({institusi: "STIKES Panti Waluya Malang", tahun: "2024-sekarang"});
renderPendidikan();
console.log(dataPendidikan);