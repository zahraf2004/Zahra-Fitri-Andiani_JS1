//Contoh kasus if else
console.log("Contoh Kasus If Else")
let usia = 20;

if (usia >= 17) {
    console.log("Anda memiliki SIM dan sudah boleh membawa kendaraan bermotor")
}else {
    console.log("Anda belum cukup umur untuk memiliki SIM dan membawa kendaraan ke Jalan")
}

console.log("----------------------------------------------------------------------------------------");

//contoh nested if => nested if dalam JavaScript mengacu pada penggunaan struktur if bersarang di dalam struktur if lainnya.
console.log("Contoh Kasus Nested If")
let nilai = 85;

if (nilai > 65){
    console.log("Selamat anda lulus ujian sertifikasi!")
    if(nilai >= 95){
        console.log("Anda mendapatkan nilai A")
    }
    else if(nilai >= 90){
        console.log("Anda mendapatkan nilai A-")
    }
    else if(nilai >= 85){
        console.log("Anda mendapatkan nilai B+")
    }
    else if(nilai >= 80){
        console.log("Anda mendapatkan nilai B-")
    }
    else if(nilai >= 75){
        console.log("Anda mendapatkan nilai C+")
    }
    else if(nilai >= 70){
        console.log("Anda mendapatkan nilai C")
    }
    else{
        console.log("Anda mendapatkan nilai C-")
    }
}else{
    console.log("Anda belum lulus ujian sertifikasi, jangan bersedih mari coba kembali!")
}

console.log("----------------------------------------------------------------------------------------");

//switch case digunakan untuk membuat pengecekan sebuah nilai. dan nilai yang tersedia untuk pengecekan bisa banyak atau lebih dari satu.
console.log ("Contoh Penggunaan Switch Case")
const hari = 6;
let namaHari;

switch (hari) {
  case 1:namaHari = "Minggu";
    break;
  case 2:namaHari = "Senin";
    break;
  case 3:namaHari = "Selasa";
    break;
  case 4:namaHari = "Rabu";
    break;
  case 5:namaHari = "Kamis";
    break;
  case 6:namaHari = "Jumat";
    break;
  case 7:namaHari = "Sabtu";
    break;
  default:namaHari = "Hari tidak valid";
}
console.log(`Hari ini adalah ${namaHari}.`);
console.log("----------------------------------------------------------------------------------------");

//while digunakan untuk mengeksekusi blok kode selama kondisi yang ditentukan masih benar (true)
let angka = 1;

while (angka <= 100) {
  console.log(angka);
  angka++; // Perbarui nilai angka untuk menghindari infinite loop
}
console.log("----------------------------------------------------------------------------------------");

/*Perbedaan utama antara "while" dan "do-while" adalah bahwa "do-while" 
akan menjalankan blok kode setidaknya satu kali, bahkan jika kondisi awalnya salah.*/
let number = 1;
let jumlahGenap = 0;
do {
  if (number % 2 === 0) {
    jumlahGenap += number;
  }
  number++;
} while (number <= 100);
console.log("Jumlah angka genap antara 1 hingga 100 adalah: " + jumlahGenap);
console.log("----------------------------------------------------------------------------------------");

//Funtion
// Mendefinisikan sebuah fungsi bernama "sapa"
function sapa(nama) {
    console.log(`Halo, ${nama}! Selamat datang.`);
  }
// Memanggil fungsi "sapa" dengan argumen "John"
  sapa("John");  
// Memanggil fungsi "sapa" dengan argumen "Alice"
  sapa("Alice");