const Memory = require ('./memory');
const memory = new Memory();

class Array{
  constructor(){
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length)
  }
  //
  push(value) {
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
}

_resize(size) {
  const oldPtr = this.ptr;
  this.ptr = memory.allocate(size);
  if (this.ptr === null) {
      throw new Error('Out of memory');
  }
  memory.copy(this.ptr, oldPtr, this.length);
  memory.free(oldPtr);
  this._capacity = size;
}

get(index) {
  if (index < 0 || index >= this.length) {
      throw new Error('Index error');
  }
  return memory.get(this.ptr + index);
}
pop() {
  if (this.length == 0) {
      throw new Error('Index error');
  }
  const value = memory.get(this.ptr + this.length - 1);
  this.length--;
  return value;
}
insert(index, value) {
  if (index < 0 || index >= this.length) {
      throw new Error('Index error');
  }

  if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
  }

  memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
  memory.set(this.ptr + index, value);
  this.length++;
}
remove(index) {
  if (index < 0 || index >= this.length) {
      throw new Error('Index error');
  }
  memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
  this.length--;
}

}
function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let jeffArr = new Array();


  //add an item to the array
  jeffArr.push(3);
 // Array { length: 1, _capacity: 3, ptr: 0 }
 // This length is one because it just has one array,
 //This was the capacity set to 3 

 jeffArr.push(5);
 jeffArr.push(15);
 jeffArr.push(19);
 jeffArr.push(45);
 jeffArr.push(10);
// Array { length: 6, _capacity: 12, ptr: 3 }
// On the length we set it to our 6 because of the six number that listed in our code 
//the capacity grew to 12
jeffArr.pop();
jeffArr.pop();
jeffArr.pop();
//Array { length: 3, _capacity: 12, ptr: 3 }
jeffArr.push("tauhida");
  console.log(jeffArr);
}
// main()

function urlfily(str){
  var replaced = str.replace(/ /g,"%20"); 
  console.log(replaced)
}
// urlfily("tauhida parveen")
// urlfily("www.thinkful.com /tauh ida parv een")

 function filterArr(arr){
let test = arr.forEach(x => {
 
  if(x <= 5 ){
    console.log(x)
   console.log("trying to delete")
  }
  else{
    console.log("yes")
  }
});

}
// filterArr([1,2,3,4,5,6,7,8,8])


function sumArry(arr){

let max = 0;
var sum = 0;
for(var i=0; i< arr.length;i++){
  sum += arr[i]
  if(sum > max ){
    max = sum;
  }
}
 return max;
}
console.log(sumArry([4,6,-3,5,-2,1]))

function mergeArr(arr1,arr2){
  let arr3= arr1.concat(arr2)
  console.log("hello there ",arr3)
  return arr3.sort(function(a, b){return a - b});
}

console.log("wow",mergeArr([2,3,12,53,122,23],[1,2,3,54,23,9]))