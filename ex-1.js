  // Exercise #1: Find the Most Expensive Product in Order
  // Start coding here
  let orders = 
  [
    {
      id: 1,
      customerName: "Brenn Hugk",
      productName: "Chocolate - Milk, Callets",
      productPrice: 94690,
      productQuantity: 35,
      creditCardType: "solo",
    },
    {
      id: 2,
      customerName: "Celia Dary",
      productName: "Bread - Pumpernickle, Rounds",
      productPrice: 10746,
      productQuantity: 87,
      creditCardType: "jcb",
    },
    {
      id: 3,
      customerName: "Toinette Blindermann",
      productName: "Bar - Granola Trail Mix Fruit Nut",
      productPrice: 94191,
      productQuantity: 31,
      creditCardType: "switch",
    },
    {
      id: 4,
      customerName: "Anjela Joannet",
      productName: "Cheese - Parmesan Cubes",
      productPrice: 5131,
      productQuantity: 96,
      creditCardType: "diners-club-carte-blanche",
    },
    {
      id: 5,
      customerName: "Kennith Bussons",
      productName: "Wine - White, Pinot Grigio",
      productPrice: 94432,
      productQuantity: 75,
      creditCardType: "jcb",
    },
    {
      id: 6,
      customerName: "Birdie Shepland",
      productName: "Tomato Paste",
      productPrice: 5845,
      productQuantity: 65,
      creditCardType: "visa-electron",
    },
    {
      id: 7,
      customerName: "Willyt Helks",
      productName: "Asparagus - Green, Fresh",
      productPrice: 89253,
      productQuantity: 26,
      creditCardType: "laser",
    },
    {
      id: 8,
      customerName: "Bill Champion",
      productName: "Wine - Red, Harrow Estates, Cab",
      productPrice: 922100,
      productQuantity: 40,
      creditCardType: "china-unionpay",
    },
    {
      id: 9,
      customerName: "Cris Druce",
      productName: "Bar Mix - Lemon",
      productPrice: 83104,
      productQuantity: 6,
      creditCardType: "jcb",
    },
    {
      id: 10,
      customerName: "Darnell O'Currine",
      productName: "Lime Cordial - Roses",
      productPrice: 99041,
      productQuantity: 75,
      creditCardType: "visa-electron",
    },
  ];

  //Exercise 01//
function calculateOrders(order){

let totalAmountOfEachProduct=[];
let firstAttribute ="name";
let secondAttribute ="amount";
let newOrders ={};
for(let i=0;i<orders.length;i++){
    newOrders[firstAttribute] =orders[i].productName;
    newOrders[secondAttribute] =orders[i].productPrice*orders[i].productQuantity;
    totalAmountOfEachProduct.push(newOrders);
    newOrders={};
}

console.log(totalAmountOfEachProduct)

let maximum = totalAmountOfEachProduct[0].amount;
let maximumProduct = totalAmountOfEachProduct[0].name;
for (let i=0;i<totalAmountOfEachProduct.length;i++){
  if (totalAmountOfEachProduct[i].amount>maximum){
    maximum = totalAmountOfEachProduct[i].amount;
    maximumProduct =totalAmountOfEachProduct[i].name;
  }
}

let sum=0;
for (let i=0;i<totalAmountOfEachProduct.length;i++){
  sum=totalAmountOfEachProduct[i].amount+sum;
}
let message;
return message = `THe Highest Product Order is ${maximumProduct}\n 
  Total Amount of Highest Product Order is ${maximum} THB\n
  Total Amount of Orders is ${sum} THB`;
}

let result;
result = calculateOrders(orders);
console.log(result);
