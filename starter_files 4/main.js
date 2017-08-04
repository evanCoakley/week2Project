// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);




// 1: Show me how to calculate the average price of all items.
function question1() {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price
  }
  let avg = totalPrice / data.length;
  let avgPrice = Math.round(avg * 100) / 100;

  console.log("The average price is $" + avgPrice);


}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let specVal = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      specVal.push(data[i].title);
    }
  }

  console.log(specVal.join("\n"));
  // An
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {

  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title + "costs " + data[i].price + " pounds.");
    }

  }
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4() {
  let wooditems = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.indexOf("wood") > -1) {
      wooditems.push(data[i].title + "is made of wood.");

    }
  }
  console.log(wooditems.join("\n"));
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {

  var num_materials = [];
  for (i = 0; i < data.length; i++) {
    let obj = {}
    if (data[i].materials.length >= 8) {
      obj.title = data[i].title;
      obj.materialsLength = data[i].materials.length;
      obj.materials = data[i].materials;

      num_materials.push(obj);
    }
  }
  console.log(num_materials[0].title + "has " + num_materials[0].materialsLength + " materials:");
  console.log("- " + num_materials[0].materials.join("\n" + "- "));
  console.log(num_materials[1].title + "has " + num_materials[1].materialsLength + " materials:");
  console.log("- " + num_materials[1].materials.join("\n" + "- "));

}


// 6: How many items were made by their sellers?
// Answer:
function question6() {

  var seller_items = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      seller_items++;
    }

  }
  console.log(seller_items);
  // Answer:
}