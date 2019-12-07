// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Brown", "Black", "White"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "John",
        lastName: "Snow"
    },
    {
        firstName: "Peter",
        lastName: "Winter"
    },
    {
        firstName: "Frank",
        lastName: "Rain"
    },
    {
        firstName: "Peter",
        lastName: "Ice"
    },
    {
        firstName: "Paul",
        lastName: "Cold"
    },
    {
        firstName: "Monty",
        lastName: "Fog"
    },
    {
        firstName: "Richard",
        lastName: "Water"
    },
    {
        firstName: "Donald",
        lastName: "Night"
    },
    {
        firstName: "Simon",
        lastName: "Sing"
    },
    {
        firstName: "Klaus",
        lastName: "Santa"
    }
]

// Utils
function getRandomNumber(start, end) {
    var randonNumber = Math.floor(Math.random() * end + start)
    console.log("Random number: " + randonNumber)
    return randonNumber
}

// Returns a random number between 1-100
document.getElementById("btn1").addEventListener("click", getRandomNumber1_100)
function getRandomNumber1_100() {
    document.getElementById("p1").innerHTML = getRandomNumber(1,100)
}

// Returns a random number between "Start" and "End"
document.getElementById("btn2").addEventListener("click", getRandomNumberStart_End)
function getRandomNumberStart_End() {
    var rand1 = document.getElementsByName("rand1")[0].value
    var rand2 = document.getElementsByName("rand2")[0].value
    console.log("Start: " + rand1 + ", End: " + rand2)

    if (isNaN(parseInt(rand1)) || (isNaN(parseInt(rand2)))) {
        console.log("Check numbers!")
    } else {
        document.getElementById("p2").innerHTML = getRandomNumber(parseInt(rand1), parseInt(rand2))
    }
}

// Returns a long Lorem Ipsum String
document.getElementById("btn3").addEventListener("click", getLoremIpsumText)
function getLoremIpsumText() {
    document.getElementById("p3").innerHTML = lorem
}

// Returns a Lorem Ipsum String based on the number or sentences specified
document.getElementById("btn4").addEventListener("click", getLimitedLoremIpsumText)
function getLimitedLoremIpsumText() {
    var numLines = document.getElementsByName("rand4")[0].value
    
    if (isNaN(parseInt(numLines))) {
        console.log("Check number!")
    } else {
        var loremArray = lorem.split(".")
    
        var shortLorem = ""
        for(let i=0; i<numLines; i++) {
            shortLorem += loremArray[i] + "."
        }
        
        document.getElementById("p4").innerHTML = shortLorem    
    }
}

// Returns a Lorem Ipsum String based on the number or characters specified
document.getElementById("btn5").addEventListener("click", getCharLimitedLoremIpsumText)
function getCharLimitedLoremIpsumText() {
    var numChars = document.getElementsByName("rand5")[0].value
    
    if (isNaN(parseInt(numChars))) {
        console.log("Check number!")
    } else {
        var loremArray = lorem.split("")
    
        var shortLorem = ""
        for(let i=0; i<numChars; i++) {
            shortLorem += loremArray[i]
        }
        
        document.getElementById("p5").innerHTML = shortLorem    
    }
}

// Returns the current date(formatted)
document.getElementById("btn6").addEventListener("click", getFormattedDate)
function getFormattedDate() {
    var newDate = new Date()
    var formattedDate = newDate.getDate() + "-" + newDate.getMonth() + "-" + newDate.getFullYear()
    document.getElementById("p6").innerHTML = formattedDate
}

//Returns the current time(formatted)
document.getElementById("btn7").addEventListener("click", getFormattedHour)
function getFormattedHour() {
    var newDate = new Date()
    var formattedHour = newDate.getHours() + "-" + newDate.getMinutes() + "-" + newDate.getSeconds()
    document.getElementById("p7").innerHTML = formattedHour
}

// Converts Inches to Feet - ft=in/12
document.getElementById("btn8").addEventListener("click", getFeet)
function getFeet() {
    var inches = Number(document.getElementsByName("rand8")[0].value)
    var feet = inches / 12
    document.getElementById("p8").innerHTML = feet
}

// Converts Feet to Inches - in=ft*12
document.getElementById("btn9").addEventListener("click", getInches)
function getInches() {
    var feet = Number(document.getElementsByName("rand9")[0].value)
    var inches = feet * 12
    document.getElementById("p9").innerHTML = inches
}

// Compares if two words are the same length
document.getElementById("btn10").addEventListener("click", getSameLength)
function getSameLength() {
    var firstWord = document.getElementsByName("firstWord")[0].value
    var secondWord = document.getElementsByName("secondWord")[0].value
    var equalLenth = firstWord.length == secondWord.length
    document.getElementById("p10").innerHTML = equalLenth
}

// Returns a random password
document.getElementById("btn11").addEventListener("click", getRandomPassword)
function getRandomPassword() {
    document.getElementById("p11").innerHTML = Math.random().toString(36).slice(-8);
}

// Tells you if the number is even or odd
document.getElementById("btn12").addEventListener("click", isEventNumber)
function isEventNumber() {
    var number = parseInt(document.getElementsByName("rand12")[0].value)

    if (isNaN(number)) {
        console.log("Check number!")
    } else {
        document.getElementById("p12").innerHTML = (number % 2) == 0
    }
}

// Returns a random color
document.getElementById("btn13").addEventListener("click", getRandomColor)
function getRandomColor() {
    var i = getRandomNumber(0, colors.length)
    document.getElementById("p13").innerHTML = colors[i]
}

// Returns a random first and last name
document.getElementById("btn14").addEventListener("click", getRandomName)
function getRandomName() {
    var name = getRandomNumber(0, names.length)
    var lastName = getRandomNumber(0, names.length)
    document.getElementById("p14").innerHTML = names[name].firstName + " " + names[lastName].lastName
}
