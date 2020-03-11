console.log("Drink Search Script!");
//let api = require('../scripts/api.js');



function loadData() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic");
  request.onload = () => {
    let json = JSON.parse(request.responseText);
    let data = json["drinks"];
    console.log(data);
    onSearchClick("mar", data);
  }
  request.send();
}

loadData();



let onSearchClick = (input, drinks) => {
  let newData = [];
  input = input.toLowerCase().trim();
  if (input.length == 1) {
    //search for first letter in name
    drinks.forEach((e, i) => {
      let drinkName = drinks[i].strDrink.toLowerCase();
      if (drinkName.charAt(0) == input) {
        //console.log(drinks[i]);
        newData.push(drinks[i]);
      }
    });
  } else {
    // search for name similar to input
    drinks.forEach((e, i) => {
      let drinkName = drinks[i].strDrink.toLowerCase();
      if (drinkName.includes(input)) {
        //console.log(drinks[i]);
        newData.push(drinks[i])
      }
    })
  }
  console.log(newData);
  clearCards();
  createCards(newData);
}

let createCards = drinks => {
  console.log("create");
  drinks.forEach(e => {
    console.log(e);
  });
  let gridItem = document.createElement("div");
  gridItem.setAttribute("class", "grid-item");

  let card = document.createElement("a");
  card.setAttribute("id", "card");
  card.setAttribute("href", ``);
}
let clearCards = () => {
  console.log("clear");
}







// let getDrinkInfoById = id => {
//   // lookup.php?i="id"
//   request.open("GET", `${apiString}lookup.php?i=${id}`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       console.log(JSON.parse(request.responseText));
//       return JSON.parse(request.responseText);
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }

// let getDrinkByFirstLetter = letter => {
//   // search.php?f="letter"
//   request.open("GET", `${apiString}search.php?f=${letter}`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       //console.log(JSON.parse(request.responseText));
//       return JSON.parse(request.responseText);
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }

// let getDrinkByName = name => {
//   // search.php?s="name"
//   request.open("GET", `${apiString}search.php?s=${name}`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       //console.log(JSON.parse(request.responseText));
//       console.log( typeof JSON.parse(request.responseText)["drinks"]);
//       return JSON.parse(request.responseText)["drinks"][0].idDrink;
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }

// //Needs getDrinkInfoById Call
// let getDrinkByIngredients = ingredientsList => {
//   // filter.php?i="ingredientsList"

//   //Properly organizes param array into string format for search
//   let ingredientsArray = ingredientsList.split(",");
//   let ingredientsStr = "";
//   for (i = 0; i < ingredientsArray.length; i++) {
//     let item = ingredientsArray[i];
//     item = item.trim()
//     item = item.replace(/\s+/g, '_');
//     ingredientsStr += item;
//     if (i != ingredientsArray.length - 1) {
//       ingredientsStr += ",";
//     }
//   }
  
//   request.open("GET", `${apiString}filter.php?i=${ingredientsStr}`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       // let parsedJSON = JSON.parse(request.responseText);
//       // for (i = 0; i < parsedJSON["drinks"].length; i++) {
//       //   let drinkID = parsedJSON["drinks"][0].idDrink;
//       //   getDrinkInfoById(drinkID);
//       // }
//       console.log(JSON.parse(request.responseText));
//       return JSON.parse(request.responseText);
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }


// //Needs getDrinkInfoById Call
// let getAllAlcoholic = () => {
//   // filter.php?a=Alcoholic
//   request.open("GET", `${apiString}filter.php?a=Alcoholic`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       console.log(JSON.parse(request.responseText));
//       return JSON.parse(request.responseText);
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }

// //Needs getDrinkInfoById Call
// let getAllNonAlcoholic = () => {
//   // filter.php?a=Non_Alcoholic
//   request.open("GET", `${apiString}filter.php?a=Non_Alcoholic`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       console.log(JSON.parse(request.responseText));
//       return JSON.parse(request.responseText);
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }

// let getRandomDrinks = () => {
//   // randomselection.php
//   request.open("GET", `${apiString}randomselection.php`);
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       console.log(JSON.parse(request.responseText));
//       return JSON.parse(request.responseText);
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   }
// }



