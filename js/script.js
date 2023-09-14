function showRumusLuas(){
    // function untuk menampilkan rumus luas persegi
    document.getElementById("showRumusLuas").innerHTML = ('Luas = Sisi x Sisi');
}

function showNilaiSisiLuas(){
    // function untuk menampilkan nilai sisi yang di input user pada result yang akan diberikan
    var nilaiSisi = document.getElementById("inputSisiLuas").value;
    if (nilaiSisi == ""){
        alert("Masukan Angka");
    } else{
        document.getElementById("showNilaiSisiLuas").innerHTML = ('Luas = ' + ' ' + nilaiSisi + ' x ' + nilaiSisi);
    }
    
}

function hitungLuas(){
    // function untuk menghitung luas persegi
    var nilaiSisi = document.getElementById("inputSisiLuas").value;
    if (nilaiSisi == ""){
        console.log("Tidak ada nilai sisi");
    } else{
        var hasilPerhitunganLuas = nilaiSisi * nilaiSisi;
        console.log(hasilPerhitunganLuas);
        document.getElementById("hasilLuas").innerHTML = ('Luas = ' + hasilPerhitunganLuas);
    }
}

function jalankan3FungsiLuas(){
    // function untuk menjalankan 3 fungsi luas yang telah dibuat dan memasukkannya ke button hitung agar bisa onclick 
    showRumusLuas()
    showNilaiSisiLuas();
    hitungLuas();
}

function showRumusKeliling(){
    // function untuk menampilkan rumus keliling persegi
    document.getElementById("showRumusKeliling").innerHTML = ('Keliling = 4 x Sisi');
}

function showNilaiSisiKeliling(){
    // function untuk menampilkan nilai sisi yang di input user pada result yang akan diberikan
    var nilaiSisi = document.getElementById("inputSisiKeliling").value;
    if (nilaiSisi == ""){
        alert("Masukan Angka");
    } else{
        document.getElementById("showNilaiSisiKeliling").innerHTML = ('Keliling = ' + ' 4 ' + ' x ' + nilaiSisi);
    }
    
}

function hitungKeliling(){
    // function untuk menghitung keliling persegi
    var nilaiSisi = document.getElementById("inputSisiKeliling").value;
    if (nilaiSisi == ""){
        console.log("Tidak ada nilai sisi");
    } else{
        var hasilPerhitunganKeliling = 4 * nilaiSisi;
        console.log(hasilPerhitunganKeliling);
        document.getElementById("hasilKeliling").innerHTML = ('Keliling = ' + hasilPerhitunganKeliling);
    }
}

function jalankan3FungsiKeliling(){
     // function untuk menjalankan 3 fungsi keliling yang telah dibuat dan memasukkannya ke button hitung agar bisa onclick
    showRumusKeliling()
    showNilaiSisiKeliling();
    hitungKeliling();
}

function resetLuas(){
    // function untuk mereset inputan nilai sisi dalam form hitung luas
    document.getElementById("inputSisiLuas").value = "";
}

function resetKeliling(){
    // function untuk mereset inputan nilai sisi dalam form hitung keliling
    document.getElementById("inputSisiKeliling").value = "";
}

