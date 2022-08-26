const countryList = [
    "Afghanistan",
    "Åland Islands",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
];

//Accessing all input and Buttons to be Manipulated
let countryContainer = document.getElementsByClassName('container')[0]
let startingWord = document.getElementsByClassName('btn-primary1')[0]
let inputBar = document.getElementById("searchInput")
let searchWithWorldBtn = document.getElementsByClassName('btn-primary2')[0]
let sortBtn = document.getElementsByClassName('btn-primary3')[0]
let searchIcon = document.getElementById("theSearchIcon")

//End of Button Access


//Start Of Button Manipulation for result
let totalCountry = document.getElementById("theTotal");
totalCountry.innerHTML = countryList.length;
	

//START OF STATE MANAGEMENT
let startingWordClicked = startingWord.addEventListener("click", () => {
	startingWord.style.backgroundColor = "black"
	searchWithWorldBtn.style.backgroundColor = "blue"
	sortBtn.style.backgroundColor = "blue";

	searchIcon.innerHTML = `<i class="fa fa-search fa-2x" id="searchWord" aria-hidden="true"></i>`

	searchIcon.addEventListener("click", (e) => {
		startingWordFun();
		return
	})

})

let searchedWithCountryClicked = searchWithWorldBtn.addEventListener("click", () => {
	searchWithWorldBtn.style.backgroundColor = "black"
	startingWord.style.backgroundColor = "blue"
	sortBtn.style.backgroundColor = "blue";

	searchIcon.innerHTML = `<i class="fa fa-search fa-2x" id="searchWordWithCountry" aria-hidden="true"></i>`

	searchIcon.addEventListener("click", (e) => {
		searchWithCountryFun()
		return
	})
})

// END OF STATE MANAGEMENT
//End of Button Manipulation For Result


// All Functions Starts Here

//Staring Word Search Function

function countryCounts(countryList) {
	countryList.map((item) => {
		let div = document.createElement('div')
		div.classList.add("bodyContainer")
		div.innerHTML = item
		// console.log(item)
		countryContainer.appendChild(div)
	})

	
}

countryCounts(countryList)

function startingWordFun (){
	let filtered = countryList.filter( (country) => {
		
		let inputWord = inputBar.value
		console.log(inputWord)
		document.getElementById("countryAlphabet").innerHTML = inputWord;

		if ((country.toLowerCase()).startsWith(inputWord.toLowerCase())) {
			return true;
		}
		// if (country.startsWith(inputWord)) {
		// 		return true;
		// }

	})
	
	countryContainer.innerHTML = ""

	document.getElementById("alphabetCount").innerHTML = filtered.length

	countryCounts(filtered)
	return
	console.log(filtered)
}

function searchWithCountryFun () {

	let filtered = countryList.filter((country) => {
		let inputCountry = inputBar.value

		if (inputCountry.toLowerCase() === country.toLowerCase()) {
			console.log(country)
			return true;
		}

	})

	countryContainer.innerHTML = ""
	
	countryCounts(filtered)
	return


}

//fUNCTION TO SORT ALPHABETICALLY
function sortAlphabetically(e) {
	
	searchWithWorldBtn.style.backgroundColor = "blue"
	startingWord.style.backgroundColor = "blue"
	sortBtn.style.backgroundColor = "black";

	let reversed = countryList.reverse();

	countryContainer.innerHTML = ""
	
	countryCounts(reversed)

	return
}

sortBtn.addEventListener("click", sortAlphabetically)

//All Function Ends Here

const mybutton = document.getElementById("myBtn");


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    console.log(scrollFunction)
    if (document.body.scrollTop > 16 || document.documentElement.scrollTop > 16 ) {
    mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}


mybutton.addEventListener("click", (e) => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    return
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}