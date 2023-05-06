document.getElementById("GenerateButton").onclick = function(){
  let x = Math.floor(Math.random() * 10000000) + 1;
  console.log(x);
  document.getElementById("xlabel").innerHTML = x;
}

document.getElementById("GenerateButton").onclick(); //runs random generator when page loads
