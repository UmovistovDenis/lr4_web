class Coffee {
  getCheckedCheckBoxes() {
    var checkboxes = document.getElementsByTagName("input");
    var checkboxesChecked = [];
    for (var index = 0; index < checkboxes.length; index++) {
      if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
        //console.log(checkboxes[index].value);
      }
    }
    console.log('BEEEEEEEEEEEEEGINNING')
    console.log(checkboxesChecked);
    console.log('eeeeeeeeend');
    return checkboxesChecked;
  }
  putCheckBoxesResults(my_coffee_list) {
    let results = this.getCheckedCheckBoxes().sort();
    let result_length = results.length;
    if (result_length == 0) {
      document.getElementById("description").innerHTML = "No monney for coffee";
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Стакан.jpg/200px-Стакан.jpg";
    }
    for (let i = 0; i < my_coffee_list.length; i++){
      if (my_coffee_list[i]['ingredients'].length == result_length) {
        if (JSON.stringify(results) === JSON.stringify(my_coffee_list[i]['ingredients'].sort())) {
          document.getElementById("description").innerHTML = my_coffee_list[i]['description'];
          return my_coffee_list[i]['image'];
        }
      }
    }
    document.getElementById("description").innerHTML = "Drink some shit";
    return "https://memepedia.ru/wp-content/uploads/2018/09/papey-gavna-original.jpg";
  }
}

let coffee_list = [
  {
    "title": "Latte",
    "description": "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and Steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
    "ingredients": [
      "Espresso",
      "Steamed milk"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
    "id": 1
  },
  {
    "title": "Cappuccino",
    "description": "Cappuccino is a latte made with more foam than Steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
    "ingredients": [
      "Espresso",
      "Steamed milk",
      "Foam"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg",
    "id": 2
  },
  {
    "title": "Americano",
    "description": "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
    "ingredients": [
      "Espresso",
      "Hot water"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg",
    "id": 3
  },
  {
    "title": "Espresso",
    "description": "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
    "ingredients": [
      "Espresso"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
    "id": 4
  },
  {
    "title": "Doppio",
    "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
    "ingredients": [
      "Espresso",
      "Espresso"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/2560px-Doppio.jpg",
    "id": 5
  },
  {
    "title": "Cortado",
    "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm Steamed milk. The milk is used to cut back on the espresso’s acidity.",
    "ingredients": [
      "Espresso",
      "Milk"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg",
    "id": 6
  },
  {
    "title": "Galão",
    "description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
    "ingredients": [
      "Espresso",
      "Steamed milk"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg",
    "id": 7
  },
  {
    "title": "Lungo",
    "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
    "ingredients": [
      "Long pulled espresso"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG",
    "id": 8
  },
  {
    "title": "Macchiato",
    "description": "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
    "ingredients": [
      "Espresso",
      "Foam"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg",
    "id": 9
  },
  {
    "title": "Mocha",
    "description": "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with Steamed milk and foam.",
    "ingredients": [
      "Espresso",
      "Steamed milk",
      "Chocolate"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg",
    "id": 10
  },
  {
    "title": "Ristretto",
    "description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
    "ingredients": [
      "Short pulled espresso"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg",
    "id": 11
  },
  {
    "title": "Flat White",
    "description": "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with Steamed milk.",
    "ingredients": [
      "Espresso",
      "Steamed milk"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg",
    "id": 12
  },
  {
    "title": "Affogato",
    "description": "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
    "ingredients": [
      "Espresso",
      "Ice cream"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg",
    "id": 13
  },
  {
    "title": "Irish",
    "description": "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
    "ingredients": [
      "Espresso",
      "Whiskey",
      "Sugar",
      "Cream"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Irish_coffee_glass.jpg",
    "id": 14
  },
{
  "title": "Espresso Con Pana",
  "description": "Translated from Italian, con panna means with cream). In order to whip cream to steep peaks, without having a mixer on hand, you need to work hard. Therefore, in the XVII-XVIII centuries, only wealthy Italians could afford coffee con panna.",
  "ingredients": [
    "Espresso",
    "Whipped cream"
  ],
  "image": "https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_topcrop_630",
  "id": 15
},
{
  "title": "Caramel Macchiato",
  "description": "Sweet delicate drink, decorated with delicate foam and caramel pattern. Due to the fact that aerated coffee is poured first, and then shots of espresso, the taste of coffee is revealed more fully.",
  "ingredients": [
    "Espresso",
    "Steamed milk",
    "Caramel Pattern"
  ],
  "image": "https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_topcrop_630",
  "id": 16
},
{
  "title": "Iced Caffè Americano",
  "description": "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance.",
  "ingredients": [
    "Espresso",
    "Cold water",
    "Ice"
  ],
  "image": "https://globalassets.starbucks.com/assets/921a409e6f55407da52eee4c8ad13ada.jpg?impolicy=1by1_wide_topcrop_630",
  "id": 17
},
{
  "title": "Iced Caramel Brulée Latte",
  "description": "Espresso, milk, ice and rich caramel brulée sauce finished with whipped cream",
  "ingredients": [
    "Espresso",
    "Ice",
    "Milk",
    "Whipped cream",
    "Caramel pattern"
  ],
  "image": "https://globalassets.starbucks.com/assets/616071114f834a3b9793ec3f7273daab.jpg?impolicy=1by1_wide_topcrop_630",
  "id": 18
}

]
console.log(coffee_list)
let main_html = new Coffee(coffee_list);
