const readline = require('readline-sync')
console.log('1.tambah,2.kurang,3.kali,4.bagi ')
var fungsi = readline.question('pilih fungsi= ') 

if(fungsi == 1 ){
var angka1 = readline.question("MASUKAN NOMOR= ")
var angka2 = readline.question("MASUKAN NOMOR= ") 
var a1 = angka1;
var a2 = angka2;
var hasil = Number(a1) + Number(a2);
console.log(hasil)
}
