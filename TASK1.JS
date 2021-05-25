var names = [ "Nam", "Trung", "Hieu", "Ha", "Huyen", "Thao", "Linh", "Hung", "Hai" ];

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