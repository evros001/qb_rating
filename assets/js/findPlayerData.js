const playerInputButton = document.getElementById('findRatingButton');

function findPlayer(json, jsonLength, playerName){
  for (var i = 0; i < jsonLength; i++) {
    if (json[i]["NAME"].toLowerCase() === playerName) {
      return json[i]
    } else {
      debugger;
      return "ERROR: No player found in database"
    }
  }
}

function calculatePointsPerDrive(jsonPlayerObject) {
  const ppg = parseInt(jsonPlayerObject["POINTS_PER_GAME"]);
  const dpg = parseInt(jsonPlayerObject["DRIVES_PER_GAME"]);
  
  return ppg / dpg;
}

function populatePlayerInputData(jsonPlayerObject) {
  const attemptsTarget =  document.getElementById('attempts');
  const completionsTarget = document.getElementById('completions');
  const completionPercentageTarget = document.getElementById('percentage');
  const yardsTarget = document.getElementById('yards');
  const tdsTarget = document.getElementById('tds');
  const intsTarget = document.getElementById('ints');
  const winTarget = document.getElementById('win');
  const ppdTarget = document.getElementById('pointsPerDrive');
  
  const attempts = parseInt(jsonPlayerObject["ATTEMPTS"]);
  const completions = parseInt(jsonPlayerObject["COMPLETIONS"]);
  const completion_percentage = parseInt(jsonPlayerObject["COMPLETION_PERCENTAGE"]);
  const yards = parseInt(jsonPlayerObject["YARDS"]);
  const tds = parseInt(jsonPlayerObject["TOUCHDOWNS"]);
  const ints = parseInt(jsonPlayerObject["INTERCEPTIONS"]);
  const wins = parseInt(jsonPlayerObject["RECORD"].split("-")[0]);
  const ppd = calculatePointsPerDrive(jsonPlayerObject);
  
  attemptsTarget.value = attempts;
  completionsTarget.value = completions;
  completionPercentageTarget.value = completion_percentage;
  yardsTarget.value = yards;
  tdsTarget.value = tds;
  intsTarget.value = ints;
  winTarget.value = wins;
  ppdTarget.value = ppd;
  
}

playerInputButton.addEventListener("click", () => {
  const jsonStats = require("./json_data/week_13_data.json");
  
  const jsonLength = jsonStats.length
  const playerInputField = document.getElementById('name');
  const playerName = playerInputField.value.toLowerCase();
  
  const jsonPlayerObject = findPlayer(jsonStats, jsonLength, playerName);
  
  populatePlayerInputData(jsonPlayerObject);
}, false);


