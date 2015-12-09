/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:9050/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(4);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var playerInputButton = document.getElementById('findRatingButton');

	function findPlayer(json, jsonLength, playerName) {
	  for (var i = 0; i < jsonLength; i++) {
	    if (json[i]["NAME"].toLowerCase() === playerName) {
	      return json[i];
	    } else {
	      debugger;
	      return "ERROR: No player found in database";
	    }
	  }
	}

	function calculatePointsPerDrive(jsonPlayerObject) {
	  var ppg = parseInt(jsonPlayerObject["POINTS_PER_GAME"]);
	  var dpg = parseInt(jsonPlayerObject["DRIVES_PER_GAME"]);

	  return ppg / dpg;
	}

	function populatePlayerInputData(jsonPlayerObject) {
	  var attemptsTarget = document.getElementById('attempts');
	  var completionsTarget = document.getElementById('completions');
	  var completionPercentageTarget = document.getElementById('percentage');
	  var yardsTarget = document.getElementById('yards');
	  var tdsTarget = document.getElementById('tds');
	  var intsTarget = document.getElementById('ints');
	  var winTarget = document.getElementById('win');
	  var ppdTarget = document.getElementById('pointsPerDrive');

	  var attempts = parseInt(jsonPlayerObject["ATTEMPTS"]);
	  var completions = parseInt(jsonPlayerObject["COMPLETIONS"]);
	  var completion_percentage = parseInt(jsonPlayerObject["COMPLETION_PERCENTAGE"]);
	  var yards = parseInt(jsonPlayerObject["YARDS"]);
	  var tds = parseInt(jsonPlayerObject["TOUCHDOWNS"]);
	  var ints = parseInt(jsonPlayerObject["INTERCEPTIONS"]);
	  var wins = parseInt(jsonPlayerObject["RECORD"].split("-")[0]);
	  var ppd = calculatePointsPerDrive(jsonPlayerObject);

	  attemptsTarget.value = attempts;
	  completionsTarget.value = completions;
	  completionPercentageTarget.value = completion_percentage;
	  yardsTarget.value = yards;
	  tdsTarget.value = tds;
	  intsTarget.value = ints;
	  winTarget.value = wins;
	  ppdTarget.value = ppd;
	}

	playerInputButton.addEventListener("click", function () {
	  var jsonStats = __webpack_require__(3);

	  var jsonLength = jsonStats.length;
	  var playerInputField = document.getElementById('name');
	  var playerName = playerInputField.value.toLowerCase();

	  var jsonPlayerObject = findPlayer(jsonStats, jsonLength, playerName);

	  populatePlayerInputData(jsonPlayerObject);
	}, false);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
		{
			"NAME": "Tom Brady",
			"TEAM": "NWE",
			"AGE": "38",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "10-2-0",
			"COMPLETIONS": "323",
			"ATTEMPTS": "507",
			"COMPLETION_PERCENTAGE": "63.7",
			"YARDS": "3912",
			"TOUCHDOWNS": "31",
			"TOUCHDOWN_PERCENTAGE": "6.1",
			"INTERCEPTIONS": "6",
			"INTERCEPTION_PERCENTAGE": "1.2",
			"YARDS_PER_ATTEMPT": "7.7",
			"YARDS_PER_GAME": "326.0",
			"QB_RATING": "102.8",
			"QBR": "64.48",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "31.3"
		},
		{
			"NAME": "Philip Rivers",
			"TEAM": "SDG",
			"AGE": "34",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "3-9-0",
			"COMPLETIONS": "335",
			"ATTEMPTS": "498",
			"COMPLETION_PERCENTAGE": "67.3",
			"YARDS": "3713",
			"TOUCHDOWNS": "23",
			"TOUCHDOWN_PERCENTAGE": "4.6",
			"INTERCEPTIONS": "9",
			"INTERCEPTION_PERCENTAGE": "1.8",
			"YARDS_PER_ATTEMPT": "7.5",
			"YARDS_PER_GAME": "309.4",
			"QB_RATING": "97.1",
			"QBR": "61.85",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "20.6"
		},
		{
			"NAME": "Matt Ryan",
			"TEAM": "ATL",
			"AGE": "30",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "6-6-0",
			"COMPLETIONS": "316",
			"ATTEMPTS": "479",
			"COMPLETION_PERCENTAGE": "66.0",
			"YARDS": "3481",
			"TOUCHDOWNS": "17",
			"TOUCHDOWN_PERCENTAGE": "3.5",
			"INTERCEPTIONS": "13",
			"INTERCEPTION_PERCENTAGE": "2.7",
			"YARDS_PER_ATTEMPT": "7.3",
			"YARDS_PER_GAME": "290.1",
			"QB_RATING": "87.9",
			"QBR": "60.08",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "23.3"
		},
		{
			"NAME": "Blake Bortles",
			"TEAM": "JAX",
			"AGE": "24",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "4-8-0",
			"COMPLETIONS": "272",
			"ATTEMPTS": "471",
			"COMPLETION_PERCENTAGE": "57.7",
			"YARDS": "3274",
			"TOUCHDOWNS": "27",
			"TOUCHDOWN_PERCENTAGE": "5.7",
			"INTERCEPTIONS": "13",
			"INTERCEPTION_PERCENTAGE": "2.8",
			"YARDS_PER_ATTEMPT": "7.0",
			"YARDS_PER_GAME": "272.8",
			"QB_RATING": "86.8",
			"QBR": "54.86",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "22.9"
		},
		{
			"NAME": "Eli Manning",
			"TEAM": "NYG",
			"AGE": "34",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "5-7-0",
			"COMPLETIONS": "292",
			"ATTEMPTS": "469",
			"COMPLETION_PERCENTAGE": "62.3",
			"YARDS": "3318",
			"TOUCHDOWNS": "24",
			"TOUCHDOWN_PERCENTAGE": "5.1",
			"INTERCEPTIONS": "10",
			"INTERCEPTION_PERCENTAGE": "2.1",
			"YARDS_PER_ATTEMPT": "7.1",
			"YARDS_PER_GAME": "276.5",
			"QB_RATING": "91.6",
			"QBR": "62.38",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "25.6"
		},
		{
			"NAME": "Drew Brees",
			"TEAM": "NOR",
			"AGE": "36",
			"POSITION": "QB",
			"GAMES": "11",
			"GAMES_STARTED": "11",
			"RECORD": "4-7-0",
			"COMPLETIONS": "306",
			"ATTEMPTS": "456",
			"COMPLETION_PERCENTAGE": "67.1",
			"YARDS": "3482",
			"TOUCHDOWNS": "23",
			"TOUCHDOWN_PERCENTAGE": "5.0",
			"INTERCEPTIONS": "11",
			"INTERCEPTION_PERCENTAGE": "2.4",
			"YARDS_PER_ATTEMPT": "7.6",
			"YARDS_PER_GAME": "316.5",
			"QB_RATING": "96.6",
			"QBR": "65.93",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "24.9"
		},
		{
			"NAME": "Matthew Stafford",
			"TEAM": "DET",
			"AGE": "27",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "4-8-0",
			"COMPLETIONS": "289",
			"ATTEMPTS": "445",
			"COMPLETION_PERCENTAGE": "64.9",
			"YARDS": "3164",
			"TOUCHDOWNS": "22",
			"TOUCHDOWN_PERCENTAGE": "4.9",
			"INTERCEPTIONS": "12",
			"INTERCEPTION_PERCENTAGE": "2.7",
			"YARDS_PER_ATTEMPT": "7.1",
			"YARDS_PER_GAME": "263.7",
			"QB_RATING": "91.1",
			"QBR": "56.26",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "21.1"
		},
		{
			"NAME": "Ryan Tannehill",
			"TEAM": "MIA",
			"AGE": "27",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "5-7-0",
			"COMPLETIONS": "268",
			"ATTEMPTS": "436",
			"COMPLETION_PERCENTAGE": "61.5",
			"YARDS": "3079",
			"TOUCHDOWNS": "21",
			"TOUCHDOWN_PERCENTAGE": "4.8",
			"INTERCEPTIONS": "11",
			"INTERCEPTION_PERCENTAGE": "2.5",
			"YARDS_PER_ATTEMPT": "7.1",
			"YARDS_PER_GAME": "256.6",
			"QB_RATING": "88.3",
			"QBR": "33.98",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "20.0"
		},
		{
			"NAME": "Derek Carr",
			"TEAM": "OAK",
			"AGE": "24",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "5-7-0",
			"COMPLETIONS": "271",
			"ATTEMPTS": "426",
			"COMPLETION_PERCENTAGE": "63.6",
			"YARDS": "3178",
			"TOUCHDOWNS": "26",
			"TOUCHDOWN_PERCENTAGE": "6.1",
			"INTERCEPTIONS": "9",
			"INTERCEPTION_PERCENTAGE": "2.1",
			"YARDS_PER_ATTEMPT": "7.5",
			"YARDS_PER_GAME": "264.8",
			"QB_RATING": "97.7",
			"QBR": "60.31",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "23.7"
		},
		{
			"NAME": "Aaron Rodgers",
			"TEAM": "GNB",
			"AGE": "32",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "8-4-0",
			"COMPLETIONS": "260",
			"ATTEMPTS": "426",
			"COMPLETION_PERCENTAGE": "61.0",
			"YARDS": "2957",
			"TOUCHDOWNS": "26",
			"TOUCHDOWN_PERCENTAGE": "6.1",
			"INTERCEPTIONS": "5",
			"INTERCEPTION_PERCENTAGE": "1.2",
			"YARDS_PER_ATTEMPT": "6.9",
			"YARDS_PER_GAME": "246.4",
			"QB_RATING": "97.3",
			"QBR": "69.39",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "24.1"
		},
		{
			"NAME": "Kirk Cousins",
			"TEAM": "WAS",
			"AGE": "27",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "5-7-0",
			"COMPLETIONS": "290",
			"ATTEMPTS": "423",
			"COMPLETION_PERCENTAGE": "68.6",
			"YARDS": "3006",
			"TOUCHDOWNS": "17",
			"TOUCHDOWN_PERCENTAGE": "4.0",
			"INTERCEPTIONS": "10",
			"INTERCEPTION_PERCENTAGE": "2.4",
			"YARDS_PER_ATTEMPT": "7.1",
			"YARDS_PER_GAME": "250.5",
			"QB_RATING": "92.4",
			"QBR": "57.72",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "21.4"
		},
		{
			"NAME": "Carson Palmer",
			"TEAM": "ARI",
			"AGE": "36",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "10-2-0",
			"COMPLETIONS": "267",
			"ATTEMPTS": "418",
			"COMPLETION_PERCENTAGE": "63.9",
			"YARDS": "3693",
			"TOUCHDOWNS": "29",
			"TOUCHDOWN_PERCENTAGE": "6.9",
			"INTERCEPTIONS": "9",
			"INTERCEPTION_PERCENTAGE": "2.2",
			"YARDS_PER_ATTEMPT": "8.8",
			"YARDS_PER_GAME": "307.8",
			"QB_RATING": "106.3",
			"QBR": "82.58",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "31.8"
		},
		{
			"NAME": "Joe Flacco",
			"TEAM": "BAL",
			"AGE": "30",
			"POSITION": "QB",
			"GAMES": "10",
			"GAMES_STARTED": "10",
			"RECORD": "3-7-0",
			"COMPLETIONS": "266",
			"ATTEMPTS": "413",
			"COMPLETION_PERCENTAGE": "64.4",
			"YARDS": "2791",
			"TOUCHDOWNS": "14",
			"TOUCHDOWN_PERCENTAGE": "3.4",
			"INTERCEPTIONS": "12",
			"INTERCEPTION_PERCENTAGE": "2.9",
			"YARDS_PER_ATTEMPT": "6.8",
			"YARDS_PER_GAME": "279.1",
			"QB_RATING": "83.1",
			"QBR": "40.86",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "22.7"
		},
		{
			"NAME": "Ryan Fitzpatrick",
			"TEAM": "NYJ",
			"AGE": "33",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "7-5-0",
			"COMPLETIONS": "246",
			"ATTEMPTS": "409",
			"COMPLETION_PERCENTAGE": "60.1",
			"YARDS": "2866",
			"TOUCHDOWNS": "22",
			"TOUCHDOWN_PERCENTAGE": "5.4",
			"INTERCEPTIONS": "11",
			"INTERCEPTION_PERCENTAGE": "2.7",
			"YARDS_PER_ATTEMPT": "7.0",
			"YARDS_PER_GAME": "238.8",
			"QB_RATING": "88.1",
			"QBR": "68.47",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "24.6"
		},
		{
			"NAME": "Andy Dalton",
			"TEAM": "CIN",
			"AGE": "28",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "10-2-0",
			"COMPLETIONS": "252",
			"ATTEMPTS": "381",
			"COMPLETION_PERCENTAGE": "66.1",
			"YARDS": "3191",
			"TOUCHDOWNS": "25",
			"TOUCHDOWN_PERCENTAGE": "6.6",
			"INTERCEPTIONS": "6",
			"INTERCEPTION_PERCENTAGE": "1.6",
			"YARDS_PER_ATTEMPT": "8.4",
			"YARDS_PER_GAME": "265.9",
			"QB_RATING": "107.4",
			"QBR": "74.41",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "27.8"
		},
		{
			"NAME": "Jameis Winston",
			"TEAM": "TAM",
			"AGE": "21",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "6-6-0",
			"COMPLETIONS": "221",
			"ATTEMPTS": "377",
			"COMPLETION_PERCENTAGE": "58.6",
			"YARDS": "2877",
			"TOUCHDOWNS": "17",
			"TOUCHDOWN_PERCENTAGE": "4.5",
			"INTERCEPTIONS": "11",
			"INTERCEPTION_PERCENTAGE": "2.9",
			"YARDS_PER_ATTEMPT": "7.6",
			"YARDS_PER_GAME": "239.8",
			"QB_RATING": "85.6",
			"QBR": "61.88",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "22.6"
		},
		{
			"NAME": "Alex Smith",
			"TEAM": "KAN",
			"AGE": "31",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "7-5-0",
			"COMPLETIONS": "242",
			"ATTEMPTS": "376",
			"COMPLETION_PERCENTAGE": "64.4",
			"YARDS": "2843",
			"TOUCHDOWNS": "14",
			"TOUCHDOWN_PERCENTAGE": "3.7",
			"INTERCEPTIONS": "3",
			"INTERCEPTION_PERCENTAGE": "0.8",
			"YARDS_PER_ATTEMPT": "7.6",
			"YARDS_PER_GAME": "236.9",
			"QB_RATING": "96.3",
			"QBR": "61.07",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "26.8"
		},
		{
			"NAME": "Cam Newton",
			"TEAM": "CAR",
			"AGE": "26",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "12-0-0",
			"COMPLETIONS": "218",
			"ATTEMPTS": "374",
			"COMPLETION_PERCENTAGE": "58.3",
			"YARDS": "2797",
			"TOUCHDOWNS": "25",
			"TOUCHDOWN_PERCENTAGE": "6.7",
			"INTERCEPTIONS": "10",
			"INTERCEPTION_PERCENTAGE": "2.7",
			"YARDS_PER_ATTEMPT": "7.5",
			"YARDS_PER_GAME": "233.1",
			"QB_RATING": "93.0",
			"QBR": "62.72",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "31.1"
		},
		{
			"NAME": "Jay Cutler",
			"TEAM": "CHI",
			"AGE": "32",
			"POSITION": "QB",
			"GAMES": "11",
			"GAMES_STARTED": "11",
			"RECORD": "5-6-0",
			"COMPLETIONS": "229",
			"ATTEMPTS": "365",
			"COMPLETION_PERCENTAGE": "62.7",
			"YARDS": "2712",
			"TOUCHDOWNS": "14",
			"TOUCHDOWN_PERCENTAGE": "3.8",
			"INTERCEPTIONS": "7",
			"INTERCEPTION_PERCENTAGE": "1.9",
			"YARDS_PER_ATTEMPT": "7.4",
			"YARDS_PER_GAME": "246.5",
			"QB_RATING": "90.1",
			"QBR": "63.18",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "20.9"
		},
		{
			"NAME": "Sam Bradford",
			"TEAM": "PHI",
			"AGE": "28",
			"POSITION": "QB",
			"GAMES": "10",
			"GAMES_STARTED": "10",
			"RECORD": "5-5-0",
			"COMPLETIONS": "228",
			"ATTEMPTS": "359",
			"COMPLETION_PERCENTAGE": "63.5",
			"YARDS": "2417",
			"TOUCHDOWNS": "13",
			"TOUCHDOWN_PERCENTAGE": "3.6",
			"INTERCEPTIONS": "10",
			"INTERCEPTION_PERCENTAGE": "2.8",
			"YARDS_PER_ATTEMPT": "6.7",
			"YARDS_PER_GAME": "241.7",
			"QB_RATING": "83.5",
			"QBR": "37.08",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "23.2"
		},
		{
			"NAME": "Russell Wilson",
			"TEAM": "SEA",
			"AGE": "27",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "7-5-0",
			"COMPLETIONS": "241",
			"ATTEMPTS": "352",
			"COMPLETION_PERCENTAGE": "68.5",
			"YARDS": "2997",
			"TOUCHDOWNS": "21",
			"TOUCHDOWN_PERCENTAGE": "6.0",
			"INTERCEPTIONS": "7",
			"INTERCEPTION_PERCENTAGE": "2.0",
			"YARDS_PER_ATTEMPT": "8.5",
			"YARDS_PER_GAME": "249.8",
			"QB_RATING": "106.2",
			"QBR": "69",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "25.4"
		},
		{
			"NAME": "Teddy Bridgewater",
			"TEAM": "MIN",
			"AGE": "23",
			"POSITION": "QB",
			"GAMES": "12",
			"GAMES_STARTED": "12",
			"RECORD": "8-4-0",
			"COMPLETIONS": "225",
			"ATTEMPTS": "347",
			"COMPLETION_PERCENTAGE": "64.8",
			"YARDS": "2398",
			"TOUCHDOWNS": "8",
			"TOUCHDOWN_PERCENTAGE": "2.3",
			"INTERCEPTIONS": "8",
			"INTERCEPTION_PERCENTAGE": "2.3",
			"YARDS_PER_ATTEMPT": "6.9",
			"YARDS_PER_GAME": "199.8",
			"QB_RATING": "83.0",
			"QBR": "60.83",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "19.8"
		},
		{
			"NAME": "Nick Foles",
			"TEAM": "STL",
			"AGE": "26",
			"POSITION": "QB",
			"GAMES": "11",
			"GAMES_STARTED": "11",
			"RECORD": "4-7-0",
			"COMPLETIONS": "190",
			"ATTEMPTS": "337",
			"COMPLETION_PERCENTAGE": "56.4",
			"YARDS": "2052",
			"TOUCHDOWNS": "7",
			"TOUCHDOWN_PERCENTAGE": "2.1",
			"INTERCEPTIONS": "10",
			"INTERCEPTION_PERCENTAGE": "3.0",
			"YARDS_PER_ATTEMPT": "6.1",
			"YARDS_PER_GAME": "186.5",
			"QB_RATING": "69.0",
			"QBR": "30.01",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "15.8"
		},
		{
			"NAME": "Marcus Mariota",
			"TEAM": "TEN",
			"AGE": "22",
			"POSITION": "QB",
			"GAMES": "10",
			"GAMES_STARTED": "10",
			"RECORD": "3-7-0",
			"COMPLETIONS": "206",
			"ATTEMPTS": "325",
			"COMPLETION_PERCENTAGE": "63.4",
			"YARDS": "2512",
			"TOUCHDOWNS": "19",
			"TOUCHDOWN_PERCENTAGE": "5.8",
			"INTERCEPTIONS": "9",
			"INTERCEPTION_PERCENTAGE": "2.8",
			"YARDS_PER_ATTEMPT": "7.7",
			"YARDS_PER_GAME": "251.2",
			"QB_RATING": "95.1",
			"QBR": "66.34",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "20.4"
		},
		{
			"NAME": "Peyton Manning",
			"TEAM": "DEN",
			"AGE": "39",
			"POSITION": "qb",
			"GAMES": "9",
			"GAMES_STARTED": "9",
			"RECORD": "7-2-0",
			"COMPLETIONS": "193",
			"ATTEMPTS": "322",
			"COMPLETION_PERCENTAGE": "59.9",
			"YARDS": "2180",
			"TOUCHDOWNS": "9",
			"TOUCHDOWN_PERCENTAGE": "2.8",
			"INTERCEPTIONS": "17",
			"INTERCEPTION_PERCENTAGE": "5.3",
			"YARDS_PER_ATTEMPT": "6.8",
			"YARDS_PER_GAME": "242.2",
			"QB_RATING": "67.6",
			"QBR": "45",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "22.4"
		},
		{
			"NAME": "Brian Hoyer",
			"TEAM": "HOU",
			"AGE": "30",
			"POSITION": "qb",
			"GAMES": "9",
			"GAMES_STARTED": "7",
			"RECORD": "4-3-0",
			"COMPLETIONS": "188",
			"ATTEMPTS": "307",
			"COMPLETION_PERCENTAGE": "61.2",
			"YARDS": "2202",
			"TOUCHDOWNS": "18",
			"TOUCHDOWN_PERCENTAGE": "5.9",
			"INTERCEPTIONS": "6",
			"INTERCEPTION_PERCENTAGE": "2.0",
			"YARDS_PER_ATTEMPT": "7.2",
			"YARDS_PER_GAME": "244.7",
			"QB_RATING": "94.4",
			"QBR": "69.1",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "21.1"
		},
		{
			"NAME": "Ben Roethlisberger",
			"TEAM": "PIT",
			"AGE": "33",
			"POSITION": "qb",
			"GAMES": "8",
			"GAMES_STARTED": "7",
			"RECORD": "4-3-0",
			"COMPLETIONS": "201",
			"ATTEMPTS": "305",
			"COMPLETION_PERCENTAGE": "65.9",
			"YARDS": "2707",
			"TOUCHDOWNS": "15",
			"TOUCHDOWN_PERCENTAGE": "4.9",
			"INTERCEPTIONS": "9",
			"INTERCEPTION_PERCENTAGE": "3.0",
			"YARDS_PER_ATTEMPT": "8.9",
			"YARDS_PER_GAME": "338.4",
			"QB_RATING": "98.1",
			"QBR": "77.15",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "25.9"
		},
		{
			"NAME": "Andrew Luck",
			"TEAM": "IND",
			"AGE": "26",
			"POSITION": "qb",
			"GAMES": "7",
			"GAMES_STARTED": "7",
			"RECORD": "2-5-0",
			"COMPLETIONS": "162",
			"ATTEMPTS": "293",
			"COMPLETION_PERCENTAGE": "55.3",
			"YARDS": "1881",
			"TOUCHDOWNS": "15",
			"TOUCHDOWN_PERCENTAGE": "5.1",
			"INTERCEPTIONS": "12",
			"INTERCEPTION_PERCENTAGE": "4.1",
			"YARDS_PER_ATTEMPT": "6.4",
			"YARDS_PER_GAME": "268.7",
			"QB_RATING": "74.9",
			"QBR": "47.57",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "21.6"
		},
		{
			"NAME": "Josh McCown",
			"TEAM": "CLE",
			"AGE": "36",
			"POSITION": "qb",
			"GAMES": "8",
			"GAMES_STARTED": "8",
			"RECORD": "1-7-0",
			"COMPLETIONS": "186",
			"ATTEMPTS": "292",
			"COMPLETION_PERCENTAGE": "63.7",
			"YARDS": "2109",
			"TOUCHDOWNS": "12",
			"TOUCHDOWN_PERCENTAGE": "4.1",
			"INTERCEPTIONS": "4",
			"INTERCEPTION_PERCENTAGE": "1.4",
			"YARDS_PER_ATTEMPT": "7.2",
			"YARDS_PER_GAME": "263.6",
			"QB_RATING": "93.3",
			"QBR": "53.92",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "18.0"
		},
		{
			"NAME": "Tyrod Taylor",
			"TEAM": "BUF",
			"AGE": "26",
			"POSITION": "QB",
			"GAMES": "10",
			"GAMES_STARTED": "10",
			"RECORD": "5-4-0",
			"COMPLETIONS": "176",
			"ATTEMPTS": "271",
			"COMPLETION_PERCENTAGE": "64.9",
			"YARDS": "2171",
			"TOUCHDOWNS": "17",
			"TOUCHDOWN_PERCENTAGE": "6.3",
			"INTERCEPTIONS": "4",
			"INTERCEPTION_PERCENTAGE": "1.5",
			"YARDS_PER_ATTEMPT": "8.0",
			"YARDS_PER_GAME": "217.1",
			"QB_RATING": "104.3",
			"QBR": "69.61",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "24.7"
		},
		{
			"NAME": "Colin Kaepernick",
			"TEAM": "SFO",
			"AGE": "28",
			"POSITION": "qb",
			"GAMES": "9",
			"GAMES_STARTED": "8",
			"RECORD": "2-6-0",
			"COMPLETIONS": "144",
			"ATTEMPTS": "244",
			"COMPLETION_PERCENTAGE": "59.0",
			"YARDS": "1615",
			"TOUCHDOWNS": "6",
			"TOUCHDOWN_PERCENTAGE": "2.5",
			"INTERCEPTIONS": "5",
			"INTERCEPTION_PERCENTAGE": "2.0",
			"YARDS_PER_ATTEMPT": "6.6",
			"YARDS_PER_GAME": "179.4",
			"QB_RATING": "78.5",
			"QBR": "47.14",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "14.8"
		},
		{
			"NAME": "Matt Hasselbeck",
			"TEAM": "IND",
			"AGE": "40",
			"POSITION": "qb",
			"GAMES": "5",
			"GAMES_STARTED": "5",
			"RECORD": "4-1-0",
			"COMPLETIONS": "113",
			"ATTEMPTS": "176",
			"COMPLETION_PERCENTAGE": "64.2",
			"YARDS": "1192",
			"TOUCHDOWNS": "8",
			"TOUCHDOWN_PERCENTAGE": "4.5",
			"INTERCEPTIONS": "4",
			"INTERCEPTION_PERCENTAGE": "2.3",
			"YARDS_PER_ATTEMPT": "6.8",
			"YARDS_PER_GAME": "238.4",
			"QB_RATING": "89.5",
			"QBR": "63.06",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "21.6"
		},
		{
			"NAME": "Matt Cassel",
			"TEAM": "2TM",
			"AGE": "33",
			"POSITION": "",
			"GAMES": "7",
			"GAMES_STARTED": "6",
			"RECORD": "2-4-0",
			"COMPLETIONS": "103",
			"ATTEMPTS": "168",
			"COMPLETION_PERCENTAGE": "61.3",
			"YARDS": "1124",
			"TOUCHDOWNS": "5",
			"TOUCHDOWN_PERCENTAGE": "3.0",
			"INTERCEPTIONS": "5",
			"INTERCEPTION_PERCENTAGE": "3.0",
			"YARDS_PER_ATTEMPT": "6.7",
			"YARDS_PER_GAME": "160.6",
			"QB_RATING": "78.6",
			"QBR": "93.78",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "18.6"
		},
		{
			"NAME": "Ryan Mallett",
			"TEAM": "HOU",
			"AGE": "27",
			"POSITION": "qb",
			"GAMES": "6",
			"GAMES_STARTED": "4",
			"RECORD": "1-3-0",
			"COMPLETIONS": "78",
			"ATTEMPTS": "147",
			"COMPLETION_PERCENTAGE": "53.1",
			"YARDS": "770",
			"TOUCHDOWNS": "3",
			"TOUCHDOWN_PERCENTAGE": "2.0",
			"INTERCEPTIONS": "4",
			"INTERCEPTION_PERCENTAGE": "2.7",
			"YARDS_PER_ATTEMPT": "5.2",
			"YARDS_PER_GAME": "128.3",
			"QB_RATING": "63.6",
			"QBR": "51.5",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "21.1"
		},
		{
			"NAME": "Johnny Manziel",
			"TEAM": "CLE",
			"AGE": "23",
			"POSITION": "qb",
			"GAMES": "7",
			"GAMES_STARTED": "3",
			"RECORD": "1-2-0",
			"COMPLETIONS": "76",
			"ATTEMPTS": "128",
			"COMPLETION_PERCENTAGE": "59.4",
			"YARDS": "933",
			"TOUCHDOWNS": "5",
			"TOUCHDOWN_PERCENTAGE": "3.9",
			"INTERCEPTIONS": "2",
			"INTERCEPTION_PERCENTAGE": "1.6",
			"YARDS_PER_ATTEMPT": "7.3",
			"YARDS_PER_GAME": "133.3",
			"QB_RATING": "88.4",
			"QBR": "54.2",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "18.0"
		},
		{
			"NAME": "Blaine Gabbert",
			"TEAM": "SFO",
			"AGE": "26",
			"POSITION": "qb",
			"GAMES": "4",
			"GAMES_STARTED": "4",
			"RECORD": "2-2-0",
			"COMPLETIONS": "80",
			"ATTEMPTS": "127",
			"COMPLETION_PERCENTAGE": "63.0",
			"YARDS": "963",
			"TOUCHDOWNS": "5",
			"TOUCHDOWN_PERCENTAGE": "3.9",
			"INTERCEPTIONS": "3",
			"INTERCEPTION_PERCENTAGE": "2.4",
			"YARDS_PER_ATTEMPT": "7.6",
			"YARDS_PER_GAME": "240.8",
			"QB_RATING": "89.5",
			"QBR": "61.35",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "14.8"
		},
		{
			"NAME": "Tony Romo",
			"TEAM": "DAL",
			"AGE": "35",
			"POSITION": "qb",
			"GAMES": "4",
			"GAMES_STARTED": "4",
			"RECORD": "3-1-0",
			"COMPLETIONS": "83",
			"ATTEMPTS": "121",
			"COMPLETION_PERCENTAGE": "68.6",
			"YARDS": "884",
			"TOUCHDOWNS": "5",
			"TOUCHDOWN_PERCENTAGE": "4.1",
			"INTERCEPTIONS": "7",
			"INTERCEPTION_PERCENTAGE": "5.8",
			"YARDS_PER_ATTEMPT": "7.3",
			"YARDS_PER_GAME": "221.0",
			"QB_RATING": "79.4",
			"QBR": "55.75",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "18.6"
		},
		{
			"NAME": "Brock Osweiler",
			"TEAM": "DEN",
			"AGE": "25",
			"POSITION": "qb",
			"GAMES": "4",
			"GAMES_STARTED": "3",
			"RECORD": "3-0-0",
			"COMPLETIONS": "73",
			"ATTEMPTS": "119",
			"COMPLETION_PERCENTAGE": "61.3",
			"YARDS": "832",
			"TOUCHDOWNS": "5",
			"TOUCHDOWN_PERCENTAGE": "4.2",
			"INTERCEPTIONS": "3",
			"INTERCEPTION_PERCENTAGE": "2.5",
			"YARDS_PER_ATTEMPT": "7.0",
			"YARDS_PER_GAME": "208.0",
			"QB_RATING": "85.8",
			"QBR": "58.77",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "22.4"
		},
		{
			"NAME": "Brandon Weeden",
			"TEAM": "DAL",
			"AGE": "32",
			"POSITION": "qb",
			"GAMES": "4",
			"GAMES_STARTED": "3",
			"RECORD": "0-3-0",
			"COMPLETIONS": "71",
			"ATTEMPTS": "98",
			"COMPLETION_PERCENTAGE": "72.4",
			"YARDS": "739",
			"TOUCHDOWNS": "2",
			"TOUCHDOWN_PERCENTAGE": "2.0",
			"INTERCEPTIONS": "2",
			"INTERCEPTION_PERCENTAGE": "2.0",
			"YARDS_PER_ATTEMPT": "7.5",
			"YARDS_PER_GAME": "184.8",
			"QB_RATING": "92.2",
			"QBR": "58.73",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "18.6"
		},
		{
			"NAME": "Mark Sanchez",
			"TEAM": "PHI",
			"AGE": "29",
			"POSITION": "qb",
			"GAMES": "3",
			"GAMES_STARTED": "2",
			"RECORD": "0-2-0",
			"COMPLETIONS": "59",
			"ATTEMPTS": "91",
			"COMPLETION_PERCENTAGE": "64.8",
			"YARDS": "616",
			"TOUCHDOWNS": "4",
			"TOUCHDOWN_PERCENTAGE": "4.4",
			"INTERCEPTIONS": "4",
			"INTERCEPTION_PERCENTAGE": "4.4",
			"YARDS_PER_ATTEMPT": "6.8",
			"YARDS_PER_GAME": "205.3",
			"QB_RATING": "80.7",
			"QBR": "38.85",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "23.2"
		},
		{
			"NAME": "EJ Manuel",
			"TEAM": "BUF",
			"AGE": "25",
			"POSITION": "qb",
			"GAMES": "4",
			"GAMES_STARTED": "2",
			"RECORD": "0-2-0",
			"COMPLETIONS": "52",
			"ATTEMPTS": "84",
			"COMPLETION_PERCENTAGE": "61.9",
			"YARDS": "561",
			"TOUCHDOWNS": "3",
			"TOUCHDOWN_PERCENTAGE": "3.6",
			"INTERCEPTIONS": "3",
			"INTERCEPTION_PERCENTAGE": "3.6",
			"YARDS_PER_ATTEMPT": "6.7",
			"YARDS_PER_GAME": "140.3",
			"QB_RATING": "78.5",
			"QBR": "35.25",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "24.7"
		},
		{
			"NAME": "Matt Schaub",
			"TEAM": "BAL",
			"AGE": "34",
			"POSITION": "qb",
			"GAMES": "2",
			"GAMES_STARTED": "2",
			"RECORD": "1-1-0",
			"COMPLETIONS": "52",
			"ATTEMPTS": "80",
			"COMPLETION_PERCENTAGE": "65.0",
			"YARDS": "540",
			"TOUCHDOWNS": "3",
			"TOUCHDOWN_PERCENTAGE": "3.8",
			"INTERCEPTIONS": "4",
			"INTERCEPTION_PERCENTAGE": "5.0",
			"YARDS_PER_ATTEMPT": "6.8",
			"YARDS_PER_GAME": "270.0",
			"QB_RATING": "76.0",
			"QBR": "34.3",
			"RUSH_YARDS": "",
			"RUSH_TDS": "",
			"DRIVES_PER_GAME": "11.7",
			"POINTS_PER_GAME": "22.7"
		}
	];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _redux = __webpack_require__(5);

	// COMBINE REDUCERS

	var rootReducer = (0, _redux.combineReducers)({
	  attempt: attemptReducer,
	  completion: completionReducer,
	  completionPercentage: completionPercentageReducer,
	  yards: yardsReducer,
	  tds: tdsReducer,
	  ints: intsReducer,
	  win: winReducer,
	  ppd: ppdReducer
	  // rushYards: rushYardReducer,
	  // rushTds: rushTdReducer,
	  // reset: resetReducer
	});

	// CREATE STORE

	var store = (0, _redux.createStore)(rootReducer);

	// BEGIN REDUCERS

	// ATTEMPTS
	function attemptReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ATTEMPTS_POINTS':
	      var attemptPoints = action.value / 10;
	      console.log("attempts  = " + attemptPoints);
	      return state + attemptPoints;
	    default:
	      return state;
	  }
	}

	// COMPLETIONS
	function completionReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'COMPLETIONS_POINTS':
	      var completionPoints = action.value / 10;
	      console.log("completion = " + completionPoints);
	      return state + completionPoints;
	    default:
	      return state;
	  }
	}

	// COMPLETION PERCENTAGE
	function completionPercentageReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'COMPLETION_PERCENTAGE_POINTS':
	      var completionPercentagePoints = action.value / 10;
	      console.log("completion PERCENTAGE = " + completionPercentagePoints);
	      return state + completionPercentagePoints;
	    default:
	      return state;
	  }
	}

	// YARDS
	function yardsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'YARDS_POINTS':
	      var yardsPoints = action.value / 10;
	      console.log("yards = " + yardsPoints);
	      return state + yardsPoints;
	    default:
	      return state;
	  }
	}

	// TDS
	function tdsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'TDS_POINTS':
	      var tdsPoints = action.value * 10;
	      console.log("tds = " + tdsPoints);
	      return state + tdsPoints;
	    default:
	      return state;
	  }
	}

	// INTS
	function intsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'INTS_POINTS':
	      var intsPoints = action.value;
	      var intIntsPoints = parseInt(intsPoints);
	      if (intIntsPoints < 1) {
	        return state + 1.75;
	      } else {
	        console.log("ints = " + intIntsPoints * -2);
	        return state + intIntsPoints * -2;
	      }
	    default:
	      return state;
	  }
	}

	// WIN
	function winReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'WIN_POINTS':
	      var winPoints = action.value * 5;
	      console.log("win = " + winPoints);
	      return state + winPoints;
	    default:
	      return state;
	  }
	}

	// PPD
	function ppdReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'PPD_POINTS':
	      var ppdPoints = action.value * 10;
	      console.log("ppd = " + ppdPoints);
	      return state + ppdPoints;
	    default:
	      return state;
	  }
	}

	// // RUSH YARD STATS
	// function rushYardReducer(state = 0, action) {
	//   switch (action.type) {
	//   case 'RUSH_YARD_POINTS':
	//     const rushYardPoints = action.value;
	//     const intRushYardPoints = parseInt(rushYardPoints);
	//     if (intRushYardPoints > 20) {
	//       const trueRushYardPoints = intRushYardPoints/ 2;
	//       console.log("rush yards = " + trueRushYardPoints);
	//       return state + trueRushYardPoints;
	//     } else {
	//       const trueRushYardPoints = intRushYardPoints / 10;
	//       return state + trueRushYardPoints;
	//     }
	//   default:
	//     return state;
	//   }
	// }
	//
	// // RUSH TD STATS
	// function rushTdReducer(state = 0, action) {
	//   switch (action.type) {
	//   case 'RUSH_TDS_POINTS':
	//     const rushTdPoints = action.value * 2;
	//     console.log("rush tds = " + rushTdPoints);
	//     return state + rushTdPoints;
	//   default:
	//     return state;
	//   }
	// }

	// END REDUCERS

	// BEGIN ACTIONS
	var attempts = document.getElementById('attempts');
	attempts.addEventListener('change', function () {
	  store.dispatch({
	    type: 'ATTEMPTS_POINTS',
	    value: attempts.value
	  });
	}, false);

	var completions = document.getElementById('completions');
	completions.addEventListener('value', function () {
	  store.dispatch({
	    type: 'COMPLETIONS_POINTS',
	    value: completions.value
	  });
	}, false);

	var completionPercentage = document.getElementById('percentage');
	completionPercentage.addEventListener('value', function () {
	  store.dispatch({
	    type: 'COMPLETION_PERCENTAGE_POINTS',
	    value: completionPercentage.value
	  });
	}, false);

	var yards = document.getElementById('yards');
	yards.addEventListener('value', function () {
	  store.dispatch({
	    type: 'YARDS_POINTS',
	    value: yards.value
	  });
	}, false);

	var tds = document.getElementById('tds');
	tds.addEventListener('value', function () {
	  store.dispatch({
	    type: 'TDS_POINTS',
	    value: tds.value
	  });
	}, false);

	var ints = document.getElementById('ints');
	ints.addEventListener('value', function () {
	  store.dispatch({
	    type: 'INTS_POINTS',
	    value: ints.value
	  });
	}, false);

	var win = document.getElementById('win');
	win.addEventListener('value', function () {
	  store.dispatch({
	    type: 'WIN_POINTS',
	    value: win.value
	  });
	}, false);

	var ppd = document.getElementById('pointsPerDrive');
	ppd.addEventListener('value', function () {
	  store.dispatch({
	    type: 'PPD_POINTS',
	    value: ppd.value
	  });
	}, false);

	// const rushYards = document.getElementById('rushYrds');
	// rushYards.addEventListener('value', () => {
	//   store.dispatch({
	//     type: 'RUSH_YARD_POINTS',
	//     value: rushYards.value,
	//   });
	// }, false);
	//
	// const rushTds = document.getElementById('rushTds');
	// rushTds.addEventListener('value', () => {
	//   store.dispatch({
	//     type: 'RUSH_TDS_POINTS',
	//     value: rushTds.value,
	//   });
	// }, false);

	var checkIfCompleted = function checkIfCompleted() {
	  if (store.getState().attempt != 0 && store.getState().completion != 0 && store.getState().completionPercentage != 0 && store.getState().yards != 0 && store.getState().tds != 0 && store.getState().ppd != 0) {
	    return true;
	  } else {
	    return false;
	  }
	};

	var calculateStore = function calculateStore() {
	  return store.getState().attempt + store.getState().completion + store.getState().completionPercentage + store.getState().yards + store.getState().tds + store.getState().ints + store.getState().win + store.getState().ppd;
	  // store.getState().rushYards +
	  // store.getState().rushTds;
	};

	// SUBSCRIBE
	var scoreValue = document.getElementById('score');
	var renderScore = function renderScore() {
	  if (checkIfCompleted()) {
	    scoreValue.innerText = calculateStore();
	  } else {
	    scoreValue.innerText = 0;
	  }
	};

	renderScore(score);

	store.subscribe(renderScore);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(6);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(8);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(12);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(13);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(14);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(7);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(6);

	var _utilsIsPlainObject = __webpack_require__(7);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsMapValues = __webpack_require__(10);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	var _utilsPick = __webpack_require__(11);

	var _utilsPick2 = _interopRequireDefault(_utilsPick);

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var hasChanged = false;
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return hasChanged ? finalState : state;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = pick;

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMapValues = __webpack_require__(10);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(14);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}

	module.exports = exports["default"];

/***/ }
/******/ ]);