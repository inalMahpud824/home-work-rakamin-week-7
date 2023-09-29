class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang
        this.lebar = lebar
    }

    hitungLuas(){
        const luas = this.panjang * this.lebar
        return luas
    }
    hitungKeliling() {
        const keliling = 2 * (this.panjang + this.lebar)
        return keliling
    }
}

module.exports = {PersegiPanjang}
