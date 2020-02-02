var bio = {
  name: "Lebron",
  last: "James",
  age: 35,
  height: "6 Foot 9 Inches",
  weight: "250lbs",
  occupation: "Professional Basketball Player"
};
document.getElementById("firstExample").innerHTML = bio.name + " " + bio.last;
var bio2 = JSON.stringify(bio);
document.getElementById("secondExample").innerHTML = bio2;
var stats = {
  points: "33655",
  rebounds: "9217",
  assists: "9134",
  steals: "1996",
  blocks: "942"
};
const stringstats = JSON.stringify(
  stats,
  ["points", "rebounds", "assists", "steals", "blocks"],
  "\xa0\xa0\xa0\xa0\xa0 "
);
document.getElementById("thirdExample").innerHTML = stringstats;
let rank = {
  pointsrank: "3",
  reboundsrank: "50",
  assistsrank: "8",
  stealsrank: "13",
  blocksrank: "N/A"
};

let alltime = JSON.stringify(rank, [
  "pointsrank",
  "reboundsrank",
  "assistsrank",
  "stealsrank",
  "blocksrank"
]);
document.getElementById("fourthExample").innerHTML = alltime;
let morealltime = JSON.parse(alltime);
document.getElementById("fifthExample").innerHTML = Object.entries(morealltime);
let champ = {
  seasons: "16th Season",
  AllStar: "16 Selections",
  champappearance: 6,
  NBAtitles: 2,
  Finalsmvp: 3,
  NBAmvp: 4
};
function change(key, val) {
if (typeof val === "number") {
return undefined;
} else {
return val;
}
}
function changenow(key, val) {
if(key == "seasons") {
return val = "16 so far";
}else{
return val;
}
}

let bibity = JSON.stringify(champ, change);
document.getElementById("sixthExample").innerHTML = Object.entries(champ);
document.getElementById("seventhExample").innerHTML = bibity;
let bobity = JSON.stringify(champ, changenow);
let boo = JSON.parse(bobity, change);
document.getElementById("eighthExample").innerHTML = bobity;
document.getElementById("ninthExample").innerHTML = Object.entries(boo);
var startingfive = ["John Stockton", "Kobe Bryant", "Micheal Jordan", "Lebron James", "Shaquille O'Neal"];

let alltimefive = JSON.stringify(startingfive);
document.getElementById("tenthExample").innerHTML = JSON.stringify(
startingfive,  
);
