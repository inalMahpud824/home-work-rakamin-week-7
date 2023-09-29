const {Persegi} = require('./rumus_persegi.js')
const {PersegiPanjang} = require('./rumus_persegiPanjang.js')

const kotak = new Persegi(6)
const kardus = new PersegiPanjang(8, 5)

console.log("luas dari kotak sebesar: " + kotak.hitungLuas())
console.log("keliling dari kotak sebesar: " + kotak.hitungLuas())
console.log("luas dari kardus sebesar: " + kardus.hitungLuas())
console.log("keliling dari kardus sebesar: " + kardus.hitungKeliling())