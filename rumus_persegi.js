class Persegi {
    constructor(sisi) {
      this.sisi = sisi;
    }
  
    hitungLuas() {
      const luas = this.sisi * this.sisi 
      return luas
    }
    hitungKeliling () {
      const keliling = 4 * this.sisi
      return keliling
    }
  }
  
  module.exports = {Persegi}