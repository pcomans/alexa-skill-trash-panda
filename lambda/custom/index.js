"use strict";
const Alexa = require("alexa-sdk"); // import the library

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  const APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
const APP_ID = undefined;

// =====================================================================================================
// --------------------------------- Section 1. Data and Text strings  ---------------------------------
// =====================================================================================================
//TODO: Replace this data with your own.
//======================================================================================================

const recology = {
	compost: [
		{
			"terms": ["bread", "grains", "pasta"],
			"desc": "Bread, grains and pasta",
		},
		{
			"terms": ["coffee grounds"],
			"desc": "Coffee grounds with paper filter",
		},
		{
			"terms": ["dairy", "cheese", "yoghurt"],
			"desc": "Dairy",
		},
		{
			"terms": ["eggshells", "eggs"],
			"desc": "Eggshells and eggs",
		},
		{
			"terms": ["fruit", "apple", "pear"],
			"desc": "Fruit (pits and peels)",
		},
		{
			"terms": [
				"leftovers",
				"food",
				"spoiled food",
			],
			"desc": "Leftovers and spoiled food",
		},
		{
			"terms": [
				"Meat",
				"bones",
			],
			"desc": "Meat (including bones)",
		},
		{
			"terms": [
				"Seafood",
				"shellfish",
			],
			"desc": "Seafood (including shellfish)",
		},
		{
			"terms": [
				"Tea",
				"tea bags",
			],
			"desc": "Tea and tea bags",
		},
		{
			"terms": [
				"Vegetables",
			],
			"desc": "Vegetables",
		},
		{
			"terms": [
				"Coffee filters",
			],
			"desc": "Coffee filters",
		},
		{
			"terms": [
				"pizza boxes",
			],
			"desc": "Greasy pizza boxes",
		},
		{
			"terms": [
				"Paper plates",
			],
			"desc": "Paper plates",
		},
		{
			"terms": [
				"Paper bags", "napkins", "paper napkins", "tissues", "paper tissues", "paper towels",
			],
			"desc": "Paper bags, napkins, tissues and towels",
		},
		{
			"terms": [
				"take-out boxes", "Paper take-out boxes", "paper containers",
			],
			"desc": "Paper take-out boxes and containers (metal handle OK)",
		},
		{
			"terms": [
				"Tissues",
			],
			"desc": "Tissues",
		},
		{
			"terms": [
				"Branches", "brush",
			],
			"desc": "Branches and brush",
		},
		{
			"terms": [
				"Flowers", "floral trimmings",
			],
			"desc": "Flowers and floral trimmings",
		},
		{
			"terms": [
				"Grasses", "weeds",
			],
			"desc": "Grasses and weeds",
		},
		{
			"terms": [
				"Leaves",
			],
			"desc": "Leaves",
		},
		{
			"terms": [
				"Tree trimmings",
			],
			"desc": "Tree trimmings (less than 6 inches in diameter and 4 feet long)",
		},
		{
			"terms": [
				"Cotton balls", "cotton swabs",
			],
			"desc": "Cotton balls and cotton swabs",
		},
		{
			"terms": [
				"Hair", "fur", "feathers",
			],
			"desc": "Hair, fur, and feathers (non-synthetic)",
		},
		{
			"terms": [
				"Compostable Plastic", "cutlery", "compostable cutlery",
			],
			"desc": "Plastic and cutlery clearly labeled “Compostable” (green stripe or sticker to allow for easy identification)",
		},
		{
			"terms": [
				"Vegetable wood crates", "wood crates", "Vegetable crates", "wooden crates"
			],
			"desc": "Vegetable wood crates (metal wire is okay)",
		},
		{
			"terms": [
				"Waxed cardboard",
			],
			"desc": "Waxed cardboard",
		},
		{
			"terms": [
				"lumber", "sawdust",
			],
			"desc": "Wood – small pieces of lumber or sawdust from clean wood only (no plywood, press board, painted, stained or treated wood)",
		},
		{
			"terms": [
				"chop sticks", "wooden chop sticks",
			],
			"desc": "Wooden chop sticks",
		},
		{
			"terms": [
				"Corks",
			],
			"desc": "Corks – natural (drop in barrels at Whole Foods)",
		},
	],
	recycling: [
		{
			"terms": [
				"cans", "Aluminum cans",
			],
			"desc": "Aluminum cans",
		},
		{
			"terms": [
				"foil", "Aluminum foil",
				"trays", "Aluminum trays",
			],
			"desc": "Aluminum foil and trays (ball foil up to softball size)",
		},
		{
			"terms": [
				"lids", "Caps",
			],
			"desc": "Caps and lids from bottles, jars and steel (tin) cans",
		},
		{
			"terms": [
				"Paint cans",
			],
			"desc": "Paint cans (must be empty or dry)",
		},
		{
			"terms": [
				"Spray cans",
			],
			"desc": "Spray cans (must be empty)",
		},
		{
			"terms": [
				"Steel cans", "tin cans",
			],
			"desc": "Steel (tin) cans",
		},
		{
			"terms": [
				"plastic bags", "bags",
			],
			"desc": "Clean, dry, empty plastic bags inside a clear plastic bag (the size roughly of a basketball)",
		},
		{
			"terms": [
				"Bottles",
			],
			"desc": "Bottles (leave caps on)",
		},
		{
			"terms": [
				"Buckets",
			],
			"desc": "Buckets (metal handle ok)",
		},
		{
			"terms": [
				"CDs", "DVDs", "CDROMs", "CD Cases",
			],
			"desc": "CD’s, DVD’s, CDROM and Cases (remove paper insert)",
		},
		{
			"terms": [
				"Coffee cup lids",
			],
			"desc": "Coffee cup lids",
		},
		{
			"terms": [
				"Containers", "clamshells",
			],
			"desc": "Containers and clamshells",
		},
		{
			"terms": [
				"plastic Corks",
			],
			"desc": "Corks – plastic",
		},
		{
			"terms": [
				"Cups", "plates", "plastic cups", "plastic plates",
			],
			"desc": "Cups and plates (plastic only, no Styrofoam)",
		},
		{
			"terms": [
				"Flower pots", "flower trays", "plastic flower pots", "plastic flower trays",
			],
			"desc": "Flower pots and trays – plastic",
		},
		{
			"terms": [
				"Laundry detergent bottles",
			],
			"desc": "Laundry detergent bottles",
		},
		{
			"terms": [
				"plastic packaging",
			],
			"desc": "Molded plastic packaging",
		},
		{
			"terms": [
				"Toys",
			],
			"desc": "Toys (no electronics, metal or batteries)",
		},
		{
			"terms": [
				"Tubs", "lids", "yogurt containers", "Tupperware",
			],
			"desc": "Tubs and lids (i.e.,: yogurt containers and Tupperware)",
		},
		{
			"terms": [
				"Utensils", "plastic utensils",
			],
			"desc": "Utensils – plastic",
		},
		{
			"terms": [
				"Linens", "Towels", "curtains",
			],
			"desc": "Linens – Clean and placed in clear bag. Towels, curtains okay.",
		},
		{
			"terms": [
				"Fabric",
			],
			"desc": "Fabric – Clean and placed in clear bag. Rips, holes, single socks okay. No sneakers, boots, belts, or purses.",
		},
		{
			"terms": [
				"Rags",
			],
			"desc": "Rags – Clean and placed in clear bag. Towels, curtains okay.",
		},
		{
			"terms": [
				"Clothes", "socks",
			],
			"desc": "Clothes – Rips, holes, single socks okay. Place clean clothes in clear bag. If clothes are in good condition, please donate them to a thrift store.",
		},
		{
			"terms": [
				"paper cups", "coffee cups",
			],
			"desc": "Empty, clean coffee cups",
		},
		{
			"terms": [
				"ice cream containers",
			],
			"desc": "Empty, clean ice cream containers",
		},
		{
			"terms": [
				"Soup cartons", "juice boxes",
			],
			"desc": "Soup cartons and juice boxes",
		},
		{
			"terms": [
				"Paper cartons", "milk cartons", "juice cartons", "beverage cartons",
			],
			"desc": "Paper milk, juice and other beverage cartons",
		},
		{
			"terms": [
				"Bags", "paper bags",
			],
			"desc": "Bags (paper only)",
		},
		{
			"terms": [
				"Cardboard",
			],
			"desc": "Cardboard (non-waxed)",
		},
		{
			"terms": [
				"Cereal boxes", "Paperboard",
			],
			"desc": "Cereal boxes and Paperboard (remove plastic liner)",
		},
		{
			"terms": [
				"Computer paper", "office paper",
			],
			"desc": "Computer and office paper",
		},
		{
			"terms": [
				"Egg cartons", "paper egg cartons",
			],
			"desc": "Egg cartons (paper)",
		},
		{
			"terms": [
				"Envelopes",
			],
			"desc": "Envelopes (windows okay)",
		},
		{
			"terms": [
				"Junk mail", "magazines",
			],
			"desc": "Junk mail and magazines",
		},
		{
			"terms": [
				"Newspapers",
			],
			"desc": "Newspapers",
		},
		{
			"terms": [
				"Packing paper", "Kraft paper",
			],
			"desc": "Packing or Kraft paper",
		},
		{
			"terms": [
				"Phonebooks",
			],
			"desc": "Phonebooks",
		},
		{
			"terms": [
				"Sticky notes",
			],
			"desc": "Sticky notes",
		},
		{
			"terms": [
				"Shredded paper",
			],
			"desc": "Shredded paper (place in sealed paper bag and label “Shredded Paper”)",
		},
		{
			"terms": [
				"Wrapping paper",
			],
			"desc": "Wrapping paper (non-metallic)",
		},
		{
			"terms": [
				"Glass bottles", "Glass jars", "bottles", "jars",
			],
			"desc": "Glass bottles and jars only (metal caps and lids too)",
		},
	],
	landfill: [
		{
			"terms": [
				"cat litter",
			],
			"desc": "your kitty's doodoo",
		},
	],
};

//======================================================================================================
//TODO: Replace these text strings to edit the welcome and help messages
//======================================================================================================

const skillName = "Trash Panda";

//This is the welcome message for when a user starts the skill without a specific intent.
const WELCOME_MESSAGE = "Welcome to " + skillName + " Learn how to recycle common household waste. For example, " + getGenericHelpMessage(recology);

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "I can help you find Alexa Evangelists and Solutions Architects. ";

//This is the message a user will hear when they begin a new search
const NEW_SEARCH_MESSAGE = getGenericHelpMessage(recology);

//This is the message a user will hear when they ask Alexa for help while in the SEARCH state
const SEARCH_STATE_HELP_MESSAGE = getGenericHelpMessage(recology);

const DESCRIPTION_STATE_HELP_MESSAGE = "Here are some things you can say: Tell me more, or give me his or her contact info";

const MULTIPLE_RESULTS_STATE_HELP_MESSAGE = "Sorry, please say the first and last name of the person you'd like to learn more about";

// This is the message use when the decides to end the search
const SHUTDOWN_MESSAGE = "Ok.";

//This is the message a user will hear when they try to cancel or stop the skill.
const EXIT_SKILL_MESSAGE = "Ok.";

// =====================================================================================================
// ------------------------------ Section 2. Skill Code - Intent Handlers  -----------------------------
// =====================================================================================================
// CAUTION: Editing anything below this line might break your skill.
//======================================================================================================

const states = {
	SEARCHMODE: "_SEARCHMODE",
};

const newSessionHandlers = {
	"LaunchRequest": function () {
		this.handler.state = states.SEARCHMODE;
		this.response.speak(WELCOME_MESSAGE).listen(getGenericHelpMessage(recology));
		this.emit(':responseReady');
	},
	"SearchByNameIntent": function () {
		console.log("SEARCH INTENT");
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByNameIntent");
	},
	"TellMeMoreIntent": function () {
		this.handler.state = states.SEARCHMODE;
		this.response.speak(WELCOME_MESSAGE).listen(getGenericHelpMessage(recology));
		this.emit(':responseReady');
	},
	"TellMeThisIntent": function () {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByNameIntent");
	},
	"SearchByInfoTypeIntent": function () {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByInfoTypeIntent");
	},
	"AMAZON.YesIntent": function () {
		this.response.speak(getGenericHelpMessage(recology)).listen(getGenericHelpMessage(recology));
		this.emit(':responseReady');
	},
	"AMAZON.NoIntent": function () {
		this.response.speak(SHUTDOWN_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.RepeatIntent": function () {
		this.response.speak(HELP_MESSAGE).listen(getGenericHelpMessage(recology));
		this.emit(':responseReady');
	},
	"AMAZON.StopIntent": function () {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.CancelIntent": function () {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.StartOverIntent": function () {
		this.handler.state = states.SEARCHMODE;
		var output = "Ok, starting over." + getGenericHelpMessage(recology);
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"AMAZON.HelpIntent": function () {
		this.response.speak(HELP_MESSAGE + getGenericHelpMessage(recology)).listen(getGenericHelpMessage(recology));
		this.emit(':responseReady');
	},
	"SessionEndedRequest": function () {
		this.emit("AMAZON.StopIntent");
	},
	"Unhandled": function () {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByNameIntent");
	}
};
let startSearchHandlers = Alexa.CreateStateHandler(states.SEARCHMODE, {
	"AMAZON.YesIntent": function () {
		this.response.speak(NEW_SEARCH_MESSAGE).listen(NEW_SEARCH_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.NoIntent": function () {
		this.response.speak(SHUTDOWN_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.RepeatIntent": function () {
		let output;
		if (this.attributes.lastSearch) {
			output = this.attributes.lastSearch.lastSpeech;
			console.log("repeating last speech");
		}
		else {
			output = getGenericHelpMessage(recology);
			console.log("no last speech availble. outputting standard help message.");
		}
		this.emit(":ask", output, output);
	},
	"SearchByItemIntent": function () {
		searchByItemIntentHandler.call(this);
	},
	"AMAZON.HelpIntent": function () {
		this.response.speak(getGenericHelpMessage(recology)).listen(getGenericHelpMessage(recology));
		this.emit(':responseReady');
	},
	"AMAZON.StopIntent": function () {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.CancelIntent": function () {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.StartOverIntent": function () {
		this.handler.state = states.SEARCHMODE;
		var output = "Ok, starting over." + getGenericHelpMessage(recology);
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"SessionEndedRequest": function () {
		this.emit("AMAZON.StopIntent");
	},
	"Unhandled": function () {
		console.log("Unhandled intent in startSearchHandlers");
		this.response.speak(SEARCH_STATE_HELP_MESSAGE).listen(SEARCH_STATE_HELP_MESSAGE);
		this.emit(':responseReady');
	}
});

// ------------------------- END of Intent Handlers  ---------------------------------

function searchDatabase(dataset, searchQuery) {
	let matchFound = false;
	let results = [];

	//beginning search
	for (let i = 0; i < dataset.length; i++) {
		let searchTerms = dataset[i].terms;
		for (let j = 0; j < searchTerms.length; j++) {
			if (sanitizeSearchQuery(searchQuery) == sanitizeSearchQuery(searchTerms[j])) {
				results.push(dataset[i].desc);
				matchFound = true;
				break;
			}
		}
		if ((i == dataset.length - 1) && (matchFound == false)) {
			//this means that we are on the last record, and no match was found
			matchFound = false;
			console.log("no match was found using " + searchQuery);
			//if more than searchable items were provided, set searchType to the next item, and set i=0
			//ideally you want to start search with lastName, then firstname, and then cityName
		}
	}
	return {
		count: results.length,
		results: results
	};
}

function searchByItemIntentHandler() {
	let itemName = isSlotValid(this.event.request, "itemName");
	let output = "";

	if (itemName) {
		console.log("item: " + itemName);

		let compostResults = searchDatabase(recology.compost, itemName);
		let recyclingResults = searchDatabase(recology.recycling, itemName);
		let landfillResults = searchDatabase(recology.landfill, itemName);

		if (compostResults.count == 0 && recyclingResults.count == 0 && landfillResults.count == 0) {
			output = "Sorry, I don't know how to dispose of " + itemName;
		}

		if (compostResults.count > 0) {
			console.log(JSON.stringify(compostResults));
			output += "You can compost " + compostResults.results.join(" and ");
		}
		if (recyclingResults.count > 0) {
			console.log(JSON.stringify(recyclingResults));
			output += "You can recycle " + recyclingResults.results.join(" and ");
		}
		if (landfillResults.count > 0) {
			console.log(JSON.stringify(landfillResults));
			output += "You have to put the following in the landfill: " + landfillResults.results.join(" and ");
		}
	}
	else {
		output = "Sorry, I didn't catch that.";
	}


	this.response.speak(output).listen(output);
	this.emit(':responseReady');
}

// =====================================================================================================
// ------------------------------- Section 3. Generating Speech Messages -------------------------------
// =====================================================================================================

function generateNextPromptMessage(person, mode) {
	let infoTypes = ["git-hub username", "twitter handle", "linked-in"];
	let prompt;

	if (mode == "current") {
		// if the mode is current, we should give more informaiton about the current contact
		prompt = ". You can say - tell me more, or  tell me " + genderize("his-her", person.gender) + " " + infoTypes[getRandom(0, infoTypes.length - 1)];
	}
	//if the mode is general, we should provide general help information
	else if (mode == "general") {
		prompt = ". " + getGenericHelpMessage(recology);
	}
	return prompt;
}

function generateSendingCardToAlexaAppMessage(person, mode) {
	let sentence = "I have sent " + person.firstName + "'s contact card to your Alexa app" + generateNextPromptMessage(person, mode);
	return sentence;
}

function generateSearchResultsMessage(searchQuery, results) {
	let sentence;
	let details;
	let prompt;

	if (results) {
		switch (true) {
			case (results.length == 0):
				sentence = "Hmm. I couldn't find " + searchQuery + ". " + getGenericHelpMessage(recology);
				break;
			case (results.length == 1):
				let person = results[0];
				details = person.firstName + " " + person.lastName + " is " + person.title + ", based out of " + person.cityName;
				prompt = generateNextPromptMessage(person, "current");
				sentence = details + prompt;
				console.log(sentence);
				break;
			case (results.length > 1):
				sentence = "I found " + results.length + " matching results";
				break;
		}
	}
	else {
		sentence = "Sorry, I didn't quite get that. " + getGenericHelpMessage(recology);
	}
	return sentence;
}

function getGenericHelpMessage(data) {
	let sentences = [
		"ask - where can I put a banana?",
		"ask - which bin do eggshells go into?",
		"ask - where does cat litter go?"
	];
	return "You can " + sentences[getRandom(0, sentences.length - 1)];
}

function generateSpecificInfoMessage(slots, person) {
	let infoTypeValue;
	let sentence;

	if (slots.infoType.value == "git hub") {
		infoTypeValue = "github";
		console.log("resetting gith hub to github");
	}
	else {
		console.log("no reset required for github");
		infoTypeValue = slots.infoType.value;
	}

	sentence = person.firstName + "'s " + infoTypeValue.toLowerCase() + " is - " + person["say" + infoTypeValue.toLowerCase()] + " . Would you like to find another evangelist? " + getGenericHelpMessage(recology);
	return optimizeForSpeech(sentence);
}

exports.handler = function (event, context, callback) {
	let alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	alexa.registerHandlers(newSessionHandlers, startSearchHandlers);
	alexa.execute();
};

// =====================================================================================================
// ------------------------------------ Section 4. Helper Functions  -----------------------------------
// =====================================================================================================
// For more helper functions, visit the Alexa cookbook at https://github.com/alexa/alexa-cookbook
//======================================================================================================

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(arrayOfStrings) {
	return arrayOfStrings[getRandom(0, arrayOfStrings.length - 1)].itemName;
}

function titleCase(str) {
	return str.replace(str[0], str[0].toUpperCase());
}

function generateCard(person) {
	let cardTitle = "Contact Info for " + titleCase(person.firstName) + " " + titleCase(person.lastName);
	let cardBody = "Twitter: " + "@" + person.twitter + " \n" + "GitHub: " + person.github + " \n" + "LinkedIn: " + person.linkedin;
	let imageObj = {
		smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/avatars/" + person.firstName + "._TTH_.jpg",
		largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/avatars/" + person.firstName + "._TTH_.jpg",
	};
	return {
		"title": cardTitle,
		"body": cardBody,
		"image": imageObj
	};
}

function loopThroughArrayOfObjects(arrayOfStrings) {
	let joinedResult = "";
	// Looping through the each object in the array
	for (let i = 0; i < arrayOfStrings.length; i++) {
		//concatenating names (firstName + lastName ) for each item
		joinedResult = joinedResult + ", " + arrayOfStrings[i].firstName + " " + arrayOfStrings[i].lastName;
	}
	return joinedResult;
}

function genderize(type, gender) {
	let pronouns = {
		"m": { "he-she": "he", "his-her": "his", "him-her": "him" },
		"f": { "he-she": "she", "his-her": "her", "him-her": "her" }
	};
	return pronouns[gender][type];
}

function sanitizeSearchQuery(searchQuery) {
	searchQuery = searchQuery.replace(/’s/g, "").toLowerCase();
	searchQuery = searchQuery.replace(/'s/g, "").toLowerCase();
	return searchQuery;
}

function optimizeForSpeech(str) {
	let optimizedString = str.replace("github", "git-hub");
	return optimizedString;
}

function isSlotValid(request, slotName) {
	let slot = request.intent.slots[slotName];
	console.log("request = " + JSON.stringify(request)); //uncomment if you want to see the request
	let slotValue;

	//if we have a slot, get the text and store it into speechOutput
	if (slot && slot.value) {
		//we have a value in the slot
		slotValue = slot.value.toLowerCase();
		return slotValue;
	}
	else {
		//we didn't get a value in the slot.
		return false;
	}
}

function isInArray(value, array) {
	return array.indexOf(value) > -1;
}

function isInfoTypeValid(infoType) {
	let validTypes = ["git hub", "github", "twitter", "linkedin"];
	return isInArray(infoType, validTypes);
}
