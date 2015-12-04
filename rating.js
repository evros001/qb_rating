// completion% (/10) 7.5
// attempts (/10) 3.0
// completions (/10) 4.0
// tds (*2.5) 7
// ints (-5/per) -5
// points/drive (*5) 13.4 
// win? (*10) 5
// if rushing yards exceeds 20yards [<20 yrds]
// rushing yards (/2) [*.10] 1
// rushing tds (*2) (*2) 2

$(document).ready(function(){
  var attempts = $(".attempts")[0];
  var completions = $(".completions")[0];
  var completionPercentage = $(".percentage")[0];
  var yards = $(".yards")[0];
  var tds = $(".tds")[0];
  var ints = $(".ints")[0];
  var win = $(".win")[0];
  var ppd = $(".pointsPerDrive")[0];
  var rushYards = $(".rushYrds")[0];
  var rushTds = $(".rushTds")[0];
  var target = $(".score")[0];
  debugger;
  
  var calculateButton = $(".calculate")
  
  function attemptsPoints(attempts){
    return attempts / 10;
  }
  
  function completionPoints(completions){
    return completions / 10;
  }
  
  function completionPercentagePoints(completionPercentage){
    return completionPercentage / 10;
  }
  
  function yardsPoints(yards) {
    return yards / 10
  }
  
  function touchdownPoints(tds){
    debugger;
    return tds * 10;
  }
  
  function interceptionPoints(ints){
    if (ints < 1) {
      return 1.75
    } else {
      return ints * -2;
    }
  }
  
  function winPoints(win){
    return 5;
  }
  
  function pointsPerDrivePoints(ppd){
    return ppd * 5;
  }
  
  function rushingPoints(rushYards, rushTds){
    if (rushYards > 20) {
      var yrdPoints = rushYards / 2;
      var yrdTds = rushTds * 2;
      return yrdPoints + yrdTds;
    } else {
      debugger;
      var yrdPoints = rushYards / 10;
      var yrdTds = rushTds * 2;
      return yrdPoints + yrdTds;
    }
  }
  
  function calculateRating(attempts, completions, completionPercentage, yards, tds, ints, win, ppd, rushYards, rushTds){
    var attempts = parseInt(attempts.value);
    var completions = parseInt(completions.value);
    var completionPercentage = parseInt(completionPercentage.value);
    var yards = parseInt(yards.value);
    var tds = parseInt(tds.value);
    var ints = parseInt(ints.value);
    var win = parseInt(win.value);
    var ppd = parseInt(ppd.value);
    var rushYards = parseInt(rushYards.value);
    var rushTds = parseInt(rushTds.value);
    debugger;


    var attPoints = attemptsPoints(attempts);
    var compPoints = completionPoints(completions);
    var percentPoints = completionPercentagePoints(completionPercentage);
    var yrdPoints = yardsPoints(yards); 
    var tdPoints = touchdownPoints(tds);
    var winPnts = winPoints(win);
    var ppdPoints = pointsPerDrivePoints(ppd);
    var rushPoints = rushingPoints(rushYards, rushTds);
    
    return attPoints + compPoints + percentPoints + yrdPoints + tdPoints + winPnts + ppdPoints + rushPoints;
  }
  
  calculateButton.click(function(){
    var score = calculateRating(attempts, completions, completionPercentage, yards, tds, ints, win, ppd, rushYards, rushTds, target);
    target.innerHTML = score.toString();
  });
  
});


