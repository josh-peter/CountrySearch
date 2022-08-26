// import { countryList } from "./data.js";

// if (document.readyState == 'loading') {
//     document.addEventListener("DOMContentLoaded", ready)
// } else {
//     ready()
// }


function ready() {
    let totalCountry = document.getElementById("theTotal");
    totalCountry.innerHTML = countryList.length;
    
    countryDisplay(countryList)
    // countryList.map((country) => {
    //     // countryDisplay(country)
    // })
}

const countryCon = document.getElementsByClassName('container')[0]

function countryDisplay(countryList) {
    const countryCon = document.getElementsByClassName('container')[0]
    countryList.map(function(country) {
        let div = document.createElement('div')
        let innerContainer = document.getElementsByClassName('bodyContainer')
        div.className = 'containerFluid'
        div.innerHTML = country
        innerContainer.appendChild(div)

    })
}


//Accessing all Buttons and Inputs
let allButtons = document.getElementsByClassName("btn")
// console.log(allButtons)

let startingWordBtn = allButtons[0].addEventListener("click", startingWord)
let searchWithWorldBtn = allButtons[1]
let sortBtn = allButtons[2]

let searchInput = document.getElementById("searchInput")
searchInput.addEventListener("change", (e) => {
    return e.target
})

let searchIcon = document.getElementById("theSearchIcon")
console.log(searchIcon)

function startingWord() {

    let inputWord = searchInput.value
    console.log(inputWord)
    countryList.map((country) => {
        if (country.startsWith(inputWord)) {
            console.log(country)
            let countryContainer = document.getElementsByClassName("container")[0]

            countryContainer.innerHTML = " "
            
            let div = document.createElement("div");
            div.classList.add("bodyContainer");
            div.innerHTML = country
            countryContainer.appendChild(div)
        }
    })
    
}


// const mybutton = document.getElementById("myBtn");


// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     console.log(scrollFunction)
//     if (document.body.scrollTop > 16 || document.documentElement.scrollTop > 16 ) {
//     mybutton.style.display = "block";
//   } else {
//       mybutton.style.display = "none";
//   }
// }


// mybutton.addEventListener("click", (e) => {
//     document.body.scrollTop = 0; 
//     document.documentElement.scrollTop = 0;
//     return
// })

// const arr1 = [0, 1, 2, 3]
// const arr2 = [4, 5, 6, 7]
// const arrs = [...arr1, ...arr2]

// console.log(arrs)
