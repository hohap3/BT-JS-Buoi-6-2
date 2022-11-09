function main() {
  // BT 1 : Tính giai thừa

  function handleCalcFactorial() {
    var nInput = document.getElementById("n");
    var result = document.querySelector(".result-bt-1");

    if (!result || !nInput) return;

    var total = 1;

    for (var i = 1; i <= Number(nInput.value); i++) {
      total *= i;
    }

    result.textContent = "Giai thừa: " + total;
  }

  function calcFactorial() {
    var btnElement = document.querySelector(".btn-bt-1");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleCalcFactorial);
  }

  // BT 2 : Tạo thẻ div

  function handleCreateDivElement() {
    var result = document.querySelector(".result-bt-2");
    if (!result) return;

    result.classList.add("high");

    var content = "";
    for (var i = 1; i <= 10; i++) {
      if (i % 2 === 0)
        content += "<div class='div-container even-div'>Số chẵn</div>";
      else content += "<div class='div-container odd-div'>Số lẻ</div>";
    }

    result.innerHTML = content;
  }

  function createDivElement() {
    var btnElement = document.querySelector(".btn-bt-2");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleCreateDivElement);
  }

  // BT 3 : In số nguyên tố

  function checkPrimeNumber(n) {
    if (!n) return;

    var count = 0;
    var i = 2;
    while (i < n) {
      if (n % i === 0) count++;
      i++;
    }

    return count === 0;
  }

  function handlePrimeNumber() {
    var nInput = document.querySelector("#numberN");
    var result = document.querySelector(".result-bt-3");
    if (!nInput || !result) return;

    var content = "";
    for (var i = 2; i <= Number(nInput.value); i++) {
      if (checkPrimeNumber(i)) content = content + i + " ";
    }
    result.textContent = content;
  }

  function primeNumber() {
    var btnElement = document.querySelector(".btn-bt-3");
    if (!btnElement) return;

    btnElement.addEventListener("click", handlePrimeNumber);
  }

  calcFactorial();
  createDivElement();
  primeNumber();
}

main();
