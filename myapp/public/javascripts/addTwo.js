function addTwoNumbers(p1, p2) {
    return parseInt(p1) + parseInt(p2);
  }

function createNewElement(summationData, client){
  sumTwo = document.createElement("p")
  if (client==true){
    sumTwo.innerHTML = "Sum of input calculated on client is " + summationData
  }
  else {
    sumTwo.innerHTML = "Sum calculated on server is " + summationData
  }
  document.body.appendChild(sumTwo)
}

window.onload = function(){
document.getElementById("submitButton").addEventListener("click", function () {
  firstNumber = document.getElementById("firstNum");
  // console.log(firstNumber.value)
  secondNumber = document.getElementById("secondNum");
  var solution = addTwoNumbers(firstNumber.value, secondNumber.value);
  createNewElement(solution, true)
});

// client makes a post request
document.getElementById("serverSubmit").addEventListener("click", function(){
  firstNumber = document.getElementById("firstNum");
  // console.log(firstNumber.value)
  secondNumber = document.getElementById("secondNum");
  const data = {"first": firstNumber.value, "second": secondNumber.value}
  console.log(data);

  fetch("http://localhost:3000", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then((x)=>x.json())
  .then((data)=>createNewElement(data.result, false))
});
}
