let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 21;
if(early && age > 18){
raceNumber += 1000;
}
//make sure you use  `` not the '' very very important!!
if(early && age > 18){
console.log(`Race will begin at 9:30AM, your number is: ${raceNumber}.`);
}
if (!early && age > 18){
  console.log(`The race will begin at 11am, your race number is: ${raceNumber}.`)
}
else (age < 18);{
  console.log(`the race will begin at 12:30PM, your race number is: ${raceNumber}.`)

}
