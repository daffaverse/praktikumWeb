function convert() {
    var unit = document.getElementById("unit").value;
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Bersihkan hasil sebelumnya
  
    switch (unit) {
      case "celsius":
        addResult("Reamur", (4 / 5) * inputTemp);
        addResult("Fahrenheit", (inputTemp * 9/5) + 32);
        addResult("Kelvin", inputTemp + 273.15);
        break;
      case "reamur":
        addResult("Celsius", (5 / 4) * inputTemp);
        addResult("Fahrenheit", (inputTemp * 9/4) + 32);
        addResult("Kelvin", (5 / 4) * inputTemp + 273);
        break;
      case "fahrenheit":
        addResult("Celsius", (inputTemp - 32) * 5/9);
        addResult("Reamur", (4 / 9) * (inputTemp - 32));
        addResult("Kelvin", ((inputTemp - 32) * 5/9) + 273.15);
        break;
      case "kelvin":
        addResult("Celsius", inputTemp - 273.15);
        addResult("Reamur", (4 / 5) * (inputTemp - 273.15));
        addResult("Fahrenheit", ((inputTemp - 273.15) * 9/5) + 32);
        break;
      default:
        addResult("Pilih unit suhu yang valid", "");
    }
  }
  
  function addResult(unit, value) {
    var resultsContainer = document.getElementById("results");
    var resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    resultItem.innerHTML = "<p><strong>" + unit + ":</strong> " + value + "</p>";
    resultsContainer.appendChild(resultItem);
  }
  