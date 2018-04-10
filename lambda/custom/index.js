"use strict";
const recology = require("./recology")
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

//======================================================================================================
//TODO: Replace these text strings to edit the welcome and help messages
//======================================================================================================

const skillName = "Trash Panda";

//This is the welcome message for when a user starts the skill without a specific intent.
const WELCOME_MESSAGE = "Welcome to " + skillName + " Learn how to recycle common household waste. For example, " + getGenericHelpMessage(recology);

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "I can help you to recycle common household waste. ";

//This is the message a user will hear when they begin a new search
const NEW_SEARCH_MESSAGE = getGenericHelpMessage(recology);

//This is the message a user will hear when they ask Alexa for help while in the SEARCH state
const SEARCH_STATE_HELP_MESSAGE = getGenericHelpMessage(recology);

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
			output += "You can compost " + compostResults.results.join(" and ") + ". ";
		}
		if (recyclingResults.count > 0) {
			console.log(JSON.stringify(recyclingResults));
			output += "You can recycle " + recyclingResults.results.join(" and ") + ". ";
		}
		if (landfillResults.count > 0) {
			console.log(JSON.stringify(landfillResults));
			output += "You have to put the following in the landfill: " + landfillResults.results.join(" and ") + ". ";
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

function getGenericHelpMessage(data) {
	let sentences = [
		"ask - where can I put plastic?",
		"ask - which bin do eggshells go into?",
		"ask - where does cat litter go?"
	];
	return "You can " + sentences[getRandom(0, sentences.length - 1)];
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

function sanitizeSearchQuery(searchQuery) {
	searchQuery = searchQuery.replace(/’s/g, "").toLowerCase();
	searchQuery = searchQuery.replace(/'s/g, "").toLowerCase();
	return searchQuery;
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
