//alert("Dont rely on the 'sin' or 'asin' functions coz it gives a different answer in javascript probably")
// alert("Tilt your device to get a couple of advanced features.");

function getNum(n){
    let screen = document.getElementById("screen");
  screen.value += n;
}

function changeVal(){
  if(sin.value == "sin"){
  sin.value = "sin-1";
  cos.value = "cos-1";
  tan.value = "tan-1";
  }
  else{
  sin.value = "sin";
  cos.value = "cos";
  tan.value = "tan";
  }
}

function clearScreen(){
    let screen = document.getElementById("screen");
  screen.value = "";
}

function equal(){
    let screen = document.getElementById("screen");
  let sin = Math.sin;
  let cos = Math.cos;
  let tan = Math.tan;
  let log = Math.log;
  
    for (let i = 0; i < screen.value.length; i++){
      screen.value = screen.value.replace("√", "Math.sqrt");
      screen.value = screen.value.replace("sin-1", "180/Math.PI * Math.asin");
      screen.value = screen.value.replace("cos-1", "180/Math.PI * Math.acos");
      screen.value = screen.value.replace("tan-1", "180/Math.PI * Math.atan");
    }
    try{
    screen.value = eval(screen.value);
    screen.placeholder = "";
    }
    catch(err){
        screen.value = "";
        screen.placeholder = "Syntax Error";
    }
}

function del(){
    let screen = document.getElementById("screen");
  screen.value = screen.value.substring(0, screen.value.length - 1);
}