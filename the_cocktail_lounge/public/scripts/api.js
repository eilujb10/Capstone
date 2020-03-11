let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();
let apiString = "https://www.thecocktaildb.com/api/json/v2/9973533/";


exports.getDrinkInfoById = id => {
  // lookup.php?i="id"
  request.open("GET", `${apiString}lookup.php?i=${id}`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}

exports.getDrinkByFirstLetter = letter => {
  // search.php?f="letter"
  request.open("GET", `${apiString}search.php?f=${letter}`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}

exports.getDrinkByName = name => {
  // search.php?s="name"
  request.open("GET", `${apiString}search.php?s=${name}`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}

//Needs getDrinkInfoById Call
exports.getDrinkByIngredients = ingredientsList => {
  // filter.php?i="ingredientsList"

  //Properly organizes param array into string format for search
  let ingredientsArray = ingredientsList.split(",");
  let ingredientsStr = "";
  for (i = 0; i < ingredientsArray.length; i++) {
    let item = ingredientsArray[i];
    item = item.trim()
    item = item.replace(/\s+/g, '_');
    ingredientsStr += item;
    if (i != ingredientsArray.length - 1) {
      ingredientsStr += ",";
    }
  }
  
  request.open("GET", `${apiString}filter.php?i=${ingredientsStr}`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      // let parsedJSON = JSON.parse(request.responseText);
      // for (i = 0; i < parsedJSON["drinks"].length; i++) {
      //   let drinkID = parsedJSON["drinks"][0].idDrink;
      //   getDrinkInfoById(drinkID);
      // }
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}


//Needs getDrinkInfoById Call
exports.getAllAlcoholic = () => {
  // filter.php?a=Alcoholic
  request.open("GET", `${apiString}filter.php?a=Alcoholic`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}

//Needs getDrinkInfoById Call
exports.getAllNonAlcoholic = () => {
  // filter.php?a=Non_Alcoholic
  request.open("GET", `${apiString}filter.php?a=Non_Alcoholic`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}

exports.getRandomDrinks = () => {
  // randomselection.php
  request.open("GET", `${apiString}randomselection.php`);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText));
      return JSON.parse(request.responseText);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  }
}



