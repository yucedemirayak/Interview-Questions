// input = 12334bbmma:=6
// output = true

// input = eeeemmmmmmmmm1000
// output = false

const clearInput = () => {
  document.getElementById("input1").value = "";
};

const calculateResult = () => {
  var input1 = document.getElementById("input1").value;
  var inputArray = input1.slice("");
  var outputArray = [];
  var res = false;
  for (var i = 0; i < inputArray.length; i++) {
    if (outputArray.indexOf(inputArray[i]) === -1) {
      outputArray.push(inputArray[i]);
    }
  }
  if (outputArray.length >= 10) {
    res = true;
  }
  document.getElementById("res").value = res;
};
