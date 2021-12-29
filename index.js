var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();

const Jabber = require("jabber");
const jabber = new Jabber();
var jabbername = jabber.createFullName();
var myjabber = jabber.createParagraph(30);

const supervillains = require("supervillains");
var mySupervillainName = supervillains.random();




console.log("Dear " + mySuperheroName +", ");
console.log("");
console.log("Happy New Year. " + myjabber);
console.log("");
console.log("Sincerely, " + mySupervillainName);
