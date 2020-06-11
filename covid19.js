fetch('https://api.covid19api.com/summary')
.then(function(resp) { return resp.json() }) 
.then(function(data) {
console.log(data);
console.log(data.Countries[119].Country);
console.log(data.Countries[119].TotalDeaths);



console.log(data.Countries[119].NewDeaths);

document.getElementById("land").innerHTML = (data.Countries[119].Country)
document.getElementById("datum").innerHTML = (data.Countries[119].Date)
document.getElementById("TotalDeaths").innerHTML = (data.Countries[119].TotalDeaths)
document.getElementById("newdeath").innerHTML = (data.Countries[119].NewDeaths)
;

})
.catch(function() {
}); 