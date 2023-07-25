function breakfastFunction(){
var breakfastMenu = {
  entrees: [
    {name:"Scrumbled Eggs", price: 15},
    {name:"Pancake", price: 10},
    {name:"Muffin", price: 12}
  ],
  
   sides: [
    {name:"Fruit Salad", price: 5},
    {name:"Hash Browns", price: 3},
    {name:"Toast", price: 4}
  ],
};

console.log("Entrees:");
breakfastMenu.entrees.forEach(function(entree){
  console.log(entree.name + '-$' + entree.price);
});


console.log("Sides:");
breakfastMenu.sides.forEach(function(side){
  console.log(side.name + '-$' + side.price);
});


var entreeIndex = prompt('Please enter the number of the entree you would like:');

var selectedEntree = breakfastMenu.entrees[entreeIndex - 1];

console.log("Great choice! " + selectedEntree.name + " is my favorite!");

console.log("The price of this entree is $" + selectedEntree.price);


var sideIndex = prompt('Please enter the number of the side you would like:');

var selectedSide = breakfastMenu.sides[sideIndex - 1];

console.log("Great choice! " + selectedSide.name + " is my favorite!");

console.log("The price of this side is $" + selectedSide.price);


var totalCost = selectedEntree.price + selectedSide.price;

console.log("The total price of your meal is $" + totalCost)
};




function lunchFunction(){
var lunchMenu = {
  entrees: [
    {name:"Steak", price: 12},
    {name:"Burger", price: 8},
    {name:"Chicken", price: 9}
  ],
  
   sides: [
    {name:"French Fries", price: 7},
    {name:"Ceasar Salad", price: 4},
    {name:"Garden Salad", price: 6}
  ],
};

console.log("Entrees:");
lunchMenu.entrees.forEach(function(entree){
  console.log(entree.name + '-$' + entree.price);
});


console.log("Sides:");
lunchMenu.sides.forEach(function(side){
  console.log(side.name + '-$' + side.price);
});


var entreeIndex = prompt('Please enter the number of the entree you would like:');

var selectedEntree = lunchMenu.entrees[entreeIndex - 1];

console.log("Great choice! " + selectedEntree.name + " is my favorite!");

console.log("The price of this entree is $" + selectedEntree.price);


var sideIndex = prompt('Please enter the number of the side you would like:');

var selectedSide = lunchMenu.sides[sideIndex - 1];

console.log("Great choice! " + selectedSide.name + " is my favorite!");

console.log("The price of this side is $" + selectedSide.price);


var totalCost = selectedEntree.price + selectedSide.price;

console.log("The total price of your meal is $" + totalCost)
};



function dinerFunction(){
var dinerMenu = {
  entrees: [
    {name:"Steak", price: 15},
    {name:"Burger", price: 10},
    {name:"Chicken", price: 12}
  ],
  
   sides: [
    {name:"French Fries", price: 5},
    {name:"Ceasar Salad", price: 3},
    {name:"Garden Salad", price: 4}
  ],
};

console.log("Entrees:");
dinerMenu.entrees.forEach(function(entree){
  console.log(entree.name + '-$' + entree.price);
});


console.log("Sides:");
dinerMenu.sides.forEach(function(side){
  console.log(side.name + '-$' + side.price);
});


var entreeIndex = prompt('Please enter the number of the entree you would like:');

var selectedEntree = dinerMenu.entrees[entreeIndex - 1];

console.log("Great choice! " + selectedEntree.name + " is my favorite!");

console.log("The price of this entree is $" + selectedEntree.price);


var sideIndex = prompt('Please enter the number of the side you would like:');

var selectedSide = dinerMenu.sides[sideIndex - 1];

console.log("Great choice! " + selectedSide.name + " is my favorite!");

console.log("The price of this side is $" + selectedSide.price);


var totalCost = selectedEntree.price + selectedSide.price;

console.log("The total price of your meal is $" + totalCost)
};
