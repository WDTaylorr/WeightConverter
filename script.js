lbsInput = document.getElementById("lbs-input")
feetInput = document.getElementById("feet-input")


lbsInput.addEventListener("input", function(e){
  let pounds = e.target.value
  document.getElementById("grams-output").innerHTML = pounds*453.592
  document.getElementById("kg-output").innerHTML = pounds*0.453592
  document.getElementById("ounces-output").innerHTML = pounds*16

  // Sizing Issue Fix
  document.getElementById("inches-output").innerHTML = 0
  document.getElementById("cm-output").innerHTML = 0
  document.getElementById("metres-output").innerHTML = 0
})

feetInput.addEventListener("input", function(e){
  let feet = e.target.value
  document.getElementById("inches-output").innerHTML = feet*12
  document.getElementById("cm-output").innerHTML = feet*30.48
  document.getElementById("metres-output").innerHTML = feet*0.3048


  // Sizing Issue Fix
  document.getElementById("grams-output").innerHTML = 0
  document.getElementById("kg-output").innerHTML = 0
  document.getElementById("ounces-output").innerHTML = 0
})