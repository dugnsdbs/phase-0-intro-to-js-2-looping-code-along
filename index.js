let name = ["Guadalupe", "Ollie", "Aki"];
let word = "surprise";


function writeCards (array, string){
  let newArray =[];
  let i = 0;
  while (i < array.length){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ` + string + " gift!");
    i++;
  }
  return newArray;
}

function countDown(){
  for (let i = 10; i >= 0; i--){
    console.log(i)
  }
}