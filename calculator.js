function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function removeLastCharacter() {
  var currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculateResult() {
  var expression = document.getElementById("result").value;
  try {
      var result = eval(expression);
      document.getElementById("result").value = result;
  } catch (error) {
      document.getElementById("result").value = "Error";
  }
}
