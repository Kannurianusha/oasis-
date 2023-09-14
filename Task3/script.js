function convertTemprature() {
  let val = document.getElementById("input-value");
  let result = document.getElementById("result");
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  val.addEventListener("keyup", convertTemprature);
  input.addEventListener("change", convertTemprature);
  output.addEventListener("change", convertTemprature);

  let inputValue = input.value;
  let outputValue = output.value;

  // celsius
  if (inputValue === "celsius" && outputValue === "fahrenhiet") {
    result.value = Number((val.value * 9) / 5) + 32;
  } else if (inputValue === "celsius" && outputValue === "kelvin") {
    result.value = Number(val.value) + 273.15;
  } else if (inputValue === "celsius" && outputValue === "celsius") {
    result.value = val.value;
  }

  // fahrenhiet
  if (inputValue === "fahrenhiet" && outputValue === "celsius") {
    result.value = Number((val.value - 32) * 5) / 9;
  } else if (inputValue === "fahrenhiet" && outputValue === "kelvin") {
    result.value = Number(((val.value - 32) * 5) / 9) + 273.15;
  } else if (inputValue === "fahrenhiet" && outputValue === "fahrenhiet") {
    result.value = val.value;
  }

  // kelvin
  if (inputValue === "kelvin" && outputValue === "celsius") {
    result.value = Number(val.value) - 273.15;
  } else if (inputValue === "kelvin" && outputValue === "fahrenhiet") {
    result.value = Number(((val.value - 273.15) * 9) / 5) + 32;
  } else if (inputValue === "kelvin" && outputValue === "kelvin") {
    result.value = val.value;
  }
}

function resetForm(){
  document.getElementById("myForm").reset();
} 




function temperature() {
  let inputValue = document.querySelector("#inputValue").value;
  let type1 = document.querySelector("#type1");
  let type2 = document.querySelector("#type2");
  let result = document.querySelector("#result");
  if (inputValue == "") {
      alert("Please Enter any Number....")
      location.reload()
  }
  else if (type1.value == "celcius" && type2.value == "celcius") {
      let Celcius = Number.parseInt(inputValue) * 1
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
  }
  else if (type1.value == "celcius" && type2.value == "fahrenheit") {
      let Fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
  }
  else if (type1.value == "celcius" && type2.value == "kelvin") {
      let Kelvin = Number.parseInt(inputValue) + 273.15
      result.innerHTML = Kelvin.toFixed(3) + " K"
  }
  else if (type1.value == "celcius" && type2.value == "rankine") {
      let Rankine = Number.parseInt(inputValue) * (9 / 5) + 491.67
      result.innerHTML = Rankine.toFixed(3) + " R"
  }
  else if (type1.value == "fahrenheit" && type2.value == "celcius") {
      let Celcius = Number.parseInt(inputValue) - 32 * (5 / 9)
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
  }
  else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
      let Fahrenheit = Number.parseInt(inputValue) * 1
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
  }
  else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
      let Kelvin = Number.parseInt(inputValue) - 32 * (5 / 9) + 273.15
      result.innerHTML = Kelvin.toFixed(3) + " K"
  }
  else if (type1.value == "fahrenheit" && type2.value == "rankine") {
      let Rankine = Number.parseInt(inputValue) + 459.67
      result.innerHTML = Rankine.toFixed(3) + " R"
  }
  else if (type1.value == "kelvin" && type2.value == "celcius") {
      let Celcius = Number.parseInt(inputValue) - 273.15
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
  }
  else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
      let Fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
  }
  else if (type1.value == "kelvin" && type2.value == "kelvin") {
      let Kelvin = Number.parseInt(inputValue) * 1
      result.innerHTML = Kelvin.toFixed(3) + " K"
  }
  else if (type1.value == "kelvin" && type2.value == "rankine") {
      let Rankine = Number.parseInt(inputValue) * 1.8
      result.innerHTML = Rankine.toFixed(3) + " R"
  }
  else if (type1.value == "rankine" && type2.value == "celcius") {
      let Celcius = Number.parseInt(inputValue) - 491.67 * (5 / 9)
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
  }
  else if (type1.value == "rankine" && type2.value == "fahrenheit") {
      let Fahrenheit = Number.parseInt(inputValue) - 495.67
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
  }
  else if (type1.value == "rankine" && type2.value == "kelvin") {
      let Kelvin = Number.parseInt(inputValue) * (5 / 9)
      result.innerHTML = Kelvin.toFixed(3) + " K"
  }
  else if (type1.value == "rankine" && type2.value == "rankine") {
      let Rankine = Number.parseInt(inputValue) * 1
      result.innerHTML = Rankine.toFixed(3) + " R"
  }
}
