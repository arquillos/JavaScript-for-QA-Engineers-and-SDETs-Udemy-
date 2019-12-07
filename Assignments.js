// Udemy Course - JavaScript for QA Engineers and SDETs
//---------------------------------------------------------
// Assignment 1 - Variable library
var book1 = "Bee in the Hive"
var book2 = "The Secret Life of the Ant"
var book3 = "Laptops. Not Just for Breakfast Anymore"
var book4 = "If I Were a Superhero"
var book5 = "Once Upon a Time in the Rabbit Hole"
var book6 = "T"
var book7 = "In Memory of the last Slice of Pizza"
var book8 = "Who Stole Second Base?"
var book9 = "2010. The Coding Odyssey"
var book10 = "The End"

//---------------------------------------------------------
// Assignment 2 - Tell a short story
var place = "farm"
var personOrAnimal = "chicken"
var thing = "corn"
var sentence = "In a " + place + " not so far away, " + personOrAnimal + " saw that there was no " + thing + "."

//---------------------------------------------------------
// Assignment 3 - Decisions decisions
var gift = prompt("What is your gift idea?")

if (gift == "roses") {
    console.log(gift + " sounds great.")
} else if (gift == "jewelry") {
    console.log(gift + " won't fail you")
} else if (gift == "card") {
    console.log("A " + gift + " should be OK.")
} else if (gift == "money") {
    console.log(gift + ", really? Too easy.")
} else if (gift == "candy") {
    console.log(gift + " are sweet gifts.")
} else if (gift == "electronics") {
    console.log(gift + " gifts are easy to find.")
} else if (gift == "books") {
    console.log("Good " + gift + " are priceless.")
} else if (gift == "puppy") {
    console.log("A " + gift + " it's nice but will need responsability.")
} else {
    console.log("I don't know what to say about a " + gift)
}

//---------------------------------------------------------
// Assignment 4 - Array library
var answersList = []
var answer

answer = prompt("What is your favourite book")
answersList.push(answer)

answer = prompt("What is your second favourite book")
answersList.push(answer)

answer = prompt("What is your third favourite book")
answersList.push(answer)

answer = prompt("What is your fourth favourite book")
answersList.push(answer)

answer = prompt("What is your fifth favourite book")
answersList.push(answer)

// Sixth book goes to the first place
answer = prompt("What is your sixth favourite book")
answersList.unshift(answer)

// Remove last element
answersList.pop()

console.log(answersList)

//---------------------------------------------------------
// Assignment 5 - The Triangle
var triangle = ""
for(var i = 1; i < 6; i++) {
    for(var j = 1; j < i + 1; j++) {
        triangle += "*"
    }
    triangle += "\n"
}
console.log(triangle)

// --------------------------------------------------------
// Assignment 6 - Switch it Up
var favColor = "red"

switch(favColor) {
    case "blue":
        console.log("Violets are  blue.")
        break
    case "red":
        console.log("Roses are red.")
        break
    default:
        console.log("Sugar is sweet")
}

// --------------------------------------------------------
// Assignment 7 - Simple cashier
var debt = 50
console.log("You owe: " +  debt)
var amount = prompt("Amount?")

function getDebt(amount) {
    return debt - amount
}

var leftDebt = getDebt(amount)
if (leftDebt == 0)
    console.log("You gave the exact ammount")
else if (leftDebt > 0)
    console.log("You gave too little. You still owe: $" + leftDebt)
else
    console.log("You gave too much. Your change due is $" + Math.abs(leftDebt))

// --------------------------------------------------------
// Assignment 8 - Restaurant menu
var restaurantMenu = {
    // Properties
    name: "My Restaurant",
    menuItems: [
        {
            food: "Pizza",
            prize: "5"
        },
        {
            food: "Burguer",
            prize: "6"
        },
        {
            food: "Rice",
            prize: "3"
        },
        {
            food: "Sandwich",
            prize: "4"
        },
        {
            food: "Salad",
            prize: "2"
        }
    ],

    // Methods
    listPrizes: function() {
        let menuList = this.name + " - menu\n"
        for(let i = 0; i < 5; i++) {
            menuList += i + " - " + this.menuItems[i].food + " - " + this.menuItems[i].prize + "€\n"
        }

        alert(menuList)
        this.selectFood(prompt("Please, select menu option"))
    },

    selectFood: function(menuOption) {
        alert(this.menuItems[menuOption].food + " - " + this.menuItems[menuOption].prize + "€\n")
    }
}

// --------------------------------------------------------
// Assignment 9 - Finding that Pokemon
var ditto = {
    "abilities": [
      {
        "ability": {
          "name": "imposter",
          "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "limber",
          "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 101,
    "forms": [
      {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
      }
    ],
    "game_indices": [
      {
        "game_index": 132,
        "version": {
          "name": "white-2",
          "url": "https://pokeapi.co/api/v2/version/22/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "black-2",
          "url": "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "white",
          "url": "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "black",
          "url": "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "soulsilver",
          "url": "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "heartgold",
          "url": "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "platinum",
          "url": "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "pearl",
          "url": "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "diamond",
          "url": "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "leafgreen",
          "url": "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "firered",
          "url": "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "emerald",
          "url": "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "sapphire",
          "url": "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "ruby",
          "url": "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "crystal",
          "url": "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "silver",
          "url": "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "gold",
          "url": "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "yellow",
          "url": "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "blue",
          "url": "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "red",
          "url": "https://pokeapi.co/api/v2/version/1/"
        }
      }
    ],
    "height": 3,
    "held_items": [
      {
        "item": {
          "name": "metal-powder",
          "url": "https://pokeapi.co/api/v2/item/234/"
        },
        "version_details": [
          {
            "rarity": 5,
            "version": {
              "name": "ultra-sun",
              "url": "https://pokeapi.co/api/v2/version/29/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "moon",
              "url": "https://pokeapi.co/api/v2/version/28/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "y",
              "url": "https://pokeapi.co/api/v2/version/24/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "x",
              "url": "https://pokeapi.co/api/v2/version/23/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "soulsilver",
              "url": "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "heartgold",
              "url": "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "pearl",
              "url": "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "leafgreen",
              "url": "https://pokeapi.co/api/v2/version/11/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "firered",
              "url": "https://pokeapi.co/api/v2/version/10/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version/9/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "sapphire",
              "url": "https://pokeapi.co/api/v2/version/8/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "ruby",
              "url": "https://pokeapi.co/api/v2/version/7/"
            }
          }
        ]
      },
      {
        "item": {
          "name": "quick-powder",
          "url": "https://pokeapi.co/api/v2/item/251/"
        },
        "version_details": [
          {
            "rarity": 50,
            "version": {
              "name": "ultra-sun",
              "url": "https://pokeapi.co/api/v2/version/29/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "moon",
              "url": "https://pokeapi.co/api/v2/version/28/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "y",
              "url": "https://pokeapi.co/api/v2/version/24/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "x",
              "url": "https://pokeapi.co/api/v2/version/23/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "soulsilver",
              "url": "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "heartgold",
              "url": "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "pearl",
              "url": "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
            }
          }
        ]
      }
    ],
    "id": 132,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
    "moves": [
      {
        "move": {
          "name": "transform",
          "url": "https://pokeapi.co/api/v2/move/144/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          }
        ]
      }
    ],
    "name": "ditto",
    "order": 197,
    "species": {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      "front_shiny_female": null
    },
    "stats": [
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 48,
        "effort": 1,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "weight": 40
  }

// Abilities
ditto.abilities[0].ability.name
ditto.abilities[1].ability.name

// Base Experience
ditto.base_experience

// Height
ditto.height

// Metal-Powder URL
ditto.held_items[0].item.url

// All the sprites
ditto.sprites

// Stats names
for(let i = 0; i < 6; i++) {
    console.log(ditto.stats[i].stat.name)
}

// Slot for the types
ditto.types[0].slot

// Weight
ditto.weight

// First version_group_details
ditto.moves[0].version_group_details[0]

// --------------------------------------------------------
// Assignment 10 - Cleaning up the story
var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ainâ€™t half bad either. Theyâ€™re the childhood friend that knows your highest highs and lowest lows. Theyâ€™ve been with you through thick and thin and theyâ€™re the best at keeping secrets. Whether itâ€™s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. Thereâ€™s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but donâ€™t let that make you forget about the olâ€™ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: whatâ€™s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

//1. Find all instances of the word "cheeseburgers", and replace it with the word "hamburgers". Be sure to note the casing of the word.
//2. Find all instances of the word "bun", and capitilize all the letters.
story.replace(/Cheeseburguers/g, "Hamburguers").replace(/cheeseburguers/g, "hamburguers").replace(/bun/gi, "BUN")

//1. How many characters are in the story?
story.length

//2. How many words are in the story?
story.split(" ").length

// --------------------------------------------------------
// Assignment 11 - Random number generator
function randomNumberGenerator(min, max) {
    return Math.floor((Math.random() * max)) + min
}

// --------------------------------------------------------
// Assignment 12 - The DOM

//1. Change the text of "Heading 1" to "Welcome to my site!".
document.getElementById("h1").innerHTML = "Welcome to my site!"

// 2. Change the text of "Paragraph 1" to "My name is " and add your name.
document.getElementById("p1").innerHTML = "My name is Juan"

//3. Remove the second H1 element 
var secondH1node = document.getElementsByTagName("h1")
document.body.removeChild(secondH1node[1])

//4. Change the font color of "Paragraph 2" to blue
document.getElementById("p2").style.color = "blue"

//5. Change the text of "Paragraph 2" to "I love JavaScript"
document.getElementById("p2").innerHTML = "I love JavaScript"

// --------------------------------------------------------
// Assignment 13 - Events and mor events

//1. JS Event - When Button 1 is clicked:
//    a. Paragraph 1 should be replaced with "Button 1 was clicked"
//    b. An alert should appear with text "Button 1 was clicked"

//2. JS Event - When Text is typed into the first text field (and the cursor moved away):
//    a. Paragraph 2 should display "Characters typed" + the number of characters.

//3. Event Listeners - When Button 2 is clicked:
//    a. Paragraph 3 should be removed

//4. Event Listeners - When Text is typed into the second text field:
//    a. Paragraph 4 should change font size for each character entered

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button id="b1" onclick=bnt1Pressed()>Button 1</button>
    <p id="p1">Paragraph 1</p>
    <br>
    <input type="text" id="i1" onChange=txtTyped()>
    <p id="p2">Paragraph 2</p>
    <br>
    <button id="b2">Button 2</button>
    <p id="p3">Paragraph 3</p>
    <br>
    <input type="text" id="i2">
    <p id="p4">Paragraph 4</p>
    <br>
	<script src="./project.js"></script>
</body>
</html>


function bnt1Pressed() {
  document.getElementById("p1").innerHTML = "Button 1 was clicked"
  alert("Button 1 was clicked")
}

function txtTyped() {
	var numTypedChars = document.getElementById("i1").value
	document.getElementById("p2").innerHTML = "Characters typed " + numTypedChars.length
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {
	var p3 = document.getElementById("p3")
	document.body.removeChild(p3)
}

document.getElementById("i2").addEventListener("change", txt2Typed)

function txt2Typed() {
	var typedChars = document.getElementById("i2").value
	document.getElementById("p4").style.fontSize = typedChars + "em"
}

// --------------------------------------------------------
// Assignment 14 - Debug my code

// Use the included .js and .html files and try to figure out why they don't work correctly.
// The web page is just an altered version of our previous assignment.
// With the help of the debugger, I want you to run through the features of the page and fix any errors.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button id="b1" onclick="btn1Clicked()">Button 1</button>
    <p id="p1">Paragraph 1</p>
    <br>
    <input type="text" id="i1" onchange="charsTyped()">
    <p id="p2">Paragraph 2</p>
    <br>
    <button id="b2">Button 2</button>
    <p id="p3">Paragraph 3</p>
    <br>
    <input type="text" id="i2">
    <p id="p4">Paragraph 4</p>
    <br>
	<script src="./debug.js"></script>
</body>
</html>

function btn1Clicked() {
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function charsTyped() {
    var chars = document.getElementById("i1").value

    createString(chars)
}

function createString(someString) {
    document.getElementById("p2").innerText = "Characters typed: " + someString.length
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {
    var main = document.body
    var child = document.getElementById("p3")

    main.removeChild(child)
}

document.getElementById("i2").addEventListener("change", valueEntered)

function valueEntered() {
    var size = document.getElementById("i2").value.length

    document.getElementById("p4").style.fontSize = size + "em"
}

// --------------------------------------------------------
// Assignment 15 - Test Rock, Paper, Scissors

function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "p") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "s") {
            return "Scissors beats paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == "p") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function test(name, expected, actual) {
    if (expected === actual) {
        console.log(name + "\nTest passed. Expected: " + expected + " is equal to Actual: " + actual)
    } else {
        console.log(name + "\nTest failed. Expected: " + expected + " is not equal to Actual: " + actual)
    }
}

// P1:Rock, P2:Rock -> Tie
test("P1:Rock, P2:Rock -> Tie", "Tie", rps("r", "r"))
// P1:Rock, P2:Paper -> P2 Wins
test("P1:Rock, P2:Paper -> P2 Wins", "Paper beats rock. Player 2 wins.", rps("r", "p"))
// P1:Rock, P2:Scissors -> P1 Wins
test("P1:Rock, P2:Scissors -> P1 Wins", "Rock beats scissors. Player 1 wins.", rps("r", "s"))

// P1:Paper, P2:Rock -> P1 Wins
test("P1:Paper, P2:Rock -> P1 Wins", "Paper beats rock. Player 1 wins.", rps("p", "r"))
// P1:Paper, P2:Paper -> Tie
test("P1:Paper, P2:Paper -> Tie", "Tie", rps("p", "p"))
// P1:Paper, P2:Scissors -> P2 Wins
test("P1:Paper, P2:Scissors -> P2 Wins", "Scissors beats paper. Player 2 wins.", rps("p", "s"))

// P1:Scissors, P2:Rock -> P2 Wins
test("P1:Scissors, P2:Rock -> P2 Wins", "Rock beats scissors. Player 2 wins.", rps("s", "r"))
// P1:Scissors, P2:Paper -> P1 Wins
test("P1:Scissors, P2:Paper -> P1 Wins", "Scissors beats paper. Player 1 wins.", rps("s", "p"))
// P1:Scissors, P2:Scissors -> Tie
test("P1:Scissors, P2:Scissors -> Tie", "Tie", rps("s", "s"))

// P1:Wrong Election, P2:Rock -> No go
test("P1:Wrong Election, P2:Rock -> No go", "Player 1 made an invalid selection.", rps("a", "r"))
// P1:Wrong Election, P2:Paper -> No go
test("P1:Wrong Election, P2:Paper -> No go", "Player 1 made an invalid selection.", rps("a", "p"))
// P1:Wrong Election, P2:Scissors -> No go
test("P1:Wrong Election, P2:Scissors -> No go", "Player 1 made an invalid selection.", rps("a", "s"))

// P1:Rock, P2:Wrong Election -> No go
test("P1:Rock, P2:Wrong Election -> No go", "Player 2 made an invalid selection.", rps("r", "a"))
// P1:Paper, P2:Wrong Election -> No go
test("P1:Paper, P2:Wrong Election -> No go", "Player 2 made an invalid selection.", rps("p", "a"))
// P1:Scissors, P2:Wrong Election -> No go
test("P1:Scissors, P2:Wrong Election -> No go", "Player 2 made an invalid selection.", rps("s", "a"))
