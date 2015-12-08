// ATTEMPTS

let attemptValues = "";
for(var i = 0; i<=100; i++ ) {
    attemptValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('attempts').innerHTML = attemptValues;

// COMPLETIONS

let completionValues = "";
for(var i = 0; i<=100; i++ ) {
    completionValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('completions').innerHTML = completionValues;

// COMPLETION PERCENTAGE

let percentageValues = "";
for(var i = 0; i<=100; i++ ) {
    percentageValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('percentage').innerHTML = percentageValues;

// YARDS

let yardValues = "";
for(var i = 0; i<=1000; i++ ) {
    yardValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('yards').innerHTML = yardValues;

// TDS

let tdValues = "";
for(var i = 0; i<=10; i++ ) {
    tdValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('tds').innerHTML = tdValues;

// INTS

let intValues = "";
for(var i = 0; i<=10; i++ ) {
    intValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('ints').innerHTML = tdValues;

// WIN

let winValues = "";
for(var i = 0; i<=1; i++ ) {
    winValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('win').innerHTML = winValues;

// POINTS PER DRIVE

let ppdValues = "";
for(var i = 0.0; i<=5.0; i+=0.1 ) {
    ppdValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('pointsPerDrive').innerHTML = ppdValues;

// RUSH YARDS

let rushYardValues = "";
for(var i = 0; i<=300; i++ ) {
    rushYardValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('rushYrds').innerHTML = rushYardValues;

// RUSH TDS

let rushTdValues = "";
for(var i = 0; i<=10; i++ ) {
    rushTdValues += "<option value="+i+">"+i+"</option>";
}
document.getElementById('rushTds').innerHTML = rushTdValues;

