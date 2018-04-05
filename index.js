const inputText = document.getElementById("addContact")
const output = document.getElementById("output")

//
var addressBook = [];

const showList = function () {
  output.innerHTML = " ";
  addressBook.map((data,index) =>{
    var a = document.createElement("");
    a.innerHTML = data;
    output.appendChild(a)
  })
}

if(localStorage.data) {
  addressBook = JSON.parse(localStorage.data)
  showList()
}


function addButton (){
  addressBook.push(inputText.value)
  var result = JSON.stringify(addressBook)
  localStorage.data = result
  showList()
}

function delButton () {
  addressBook = []
  localStorage.clear()
  showList()
}


// setAttributes untuk setiap hasil inputan
// setiap perulangan harus diberi nomor urut
// delete button dengan map bisa


//javascript.info belajar DOM
// www.codeschool.com belajar jquery

var array1 = [1, 4, 9, 16];

console.log(array1[3]);
