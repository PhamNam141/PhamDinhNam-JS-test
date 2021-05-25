var names = [ "Nam", "Trung", "Hieu", "Ha", "Huyen", "Thao", "Linh", "Hung", "Hai" ];

var para = document.createElement("p");
//TASK1
function chooseName (arr) {
  var n = arr.length;
  while (n) {
    var j = Math.floor(Math.random() * n--);
    var temp = arr[n];
    arr[n] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

chooseName(names); // shuffle
var randomPara = names.slice(0, 1); // take 1 random names
document.write(randomPara);

//TASK3
function random() {
    var randomNum = Math.floor(Math.random() * names.length);
  
    chooseName(randomNum);
  }
  
  function chooseName(randomNum) {
    var choice = names[randomNum];
    return (para.textContent = choice);
  }
  
  random();
  
  
   const section = document.querySelector('section');
  section.innerHTML = " ";
  
  section.appendChild(para);
