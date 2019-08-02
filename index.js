console.log("linked");

var addBtn = $("_______"); //need one var for each save button
var container = $(".container");
var listItems = JSON.parse(localStorage.getItem("key")) || []; // Hey,computer , go get the array stored in localStorage and parse it, ORRRRRRRRR, if u can't find anything just start fresh with []

addBtn.on("click", addItem);//event listner, need one for each save button


refresh();




function addItem(){//this declares the function

userText = inputField.val();//getting value of the inputField and storing it as var userText

container.append(`<p>${userText}</p>`)//pushing the input (values of the input) at the end of the container


listItems.push(userText); //pushing the input value that user typed into our array
var stringifiedListItems =
JSON.stringify(listItems)// made a new variable to make our array a string so we can put it into our local storage
localStorage.setItem("key",stringifiedListItems);//storing the stringified array as a string as a value for the key "key"
}
//make a function so that the input values stay on the page even after you refresh it
function refresh(){
//were making a variable whose value is : getting ur old stringified array that's in localStorage and taking off its quotes using JSON(reverting it to the array)...
//localStorage.getIten("keyName")

for(var i = 0;i < listItems.length;i++){//setting a for loop to go through the items in the array we got from localStorage
  container.append(`<p>${listItems[i]}</p>`)
}
}
