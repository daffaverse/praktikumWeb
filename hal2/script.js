function convert() {
    var inputs = document.querySelectorAll('.input-group input');

    var totalBobot = 0;
    var totalSKS = 0;

    inputs.forEach(function(input, index) {
        // Ambil nilai input SKS, dan nilai
        var sks = parseInt(input.parentElement.querySelector('input:nth-of-type(2)').value);
        var nilaiHuruf = input.value.toUpperCase();

        var nilaiAngka;
        switch (nilaiHuruf) {
            case 'A':
                nilaiAngka = 4;
                break;
            case 'A-':
                nilaiAngka = 3.7;
                break;
            case 'B+':
                nilaiAngka = 2.35;
                break;
            case 'B':
                nilaiAngka = 3;
                break;
            case 'C+':
                nilaiAngka = 2.7;
                break;
            case 'C':
                nilaiAngka = 2;
                break;
            case 'D':
                nilaiAngka = 1;
                break;
            case 'E':
                nilaiAngka = 0;
                break;
            default:
                nilaiAngka = 0; 
        }

        var bobot = sks * nilaiAngka;
        
        totalBobot += bobot;
        totalSKS += sks;
    });

    // Hitung nilai IPK
    var ipk = totalBobot / (totalSKS / 3);

    // Tampilkan hasil IPK
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<p><strong>Nilai IPK:</strong> " + ipk.toFixed(2) + "</p>";
}
