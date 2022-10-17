console.log("task a");
var team = {
    teamName : "Mclaren",
    base: "Woking",
    principal:"Andreas Seidl",
   
};

console.log(JSON.stringify(team, null, 4));

team.drivers= [
    {
    name: "Daniel Ricciardo",
    dob: new Date(1989,6,1),
    points: [25,18,0,25]
},
{
    name: "Lando Norris",
    dob: new Date(1999,10),
    points: [12,10,15,8]
}
],

console.log(JSON.stringify(team, null, 4));


 team.totalPoints = function(){
   let points = 0;
   for (let d in this.drivers){
    for (let p in this.drivers[d].points){
        points += this.drivers[d].points[p];;
    }
   }
   return points;
}

console.log("Total points: "+team.totalPoints());

team.drivers[0].points.push(25);
team.drivers[1].points.push(10);

console.log("Total points: "+team.totalPoints());

let {teamName, base} = team;

console.log(teamName,base);

let {drivers:[,lando]} = team;

console.log(lando);

let {points:[DQ,...counted]} = lando;

let countedPoints = 0;
for (let p in counted){
    countedPoints += counted[p];;
}

console.log(countedPoints);

console.log("task b");

let myarray = [1,3,1,7,9];

console.log(myarray);

console.log(myarray[1]);

console.log(myarray.length);

myarray.sort();
console.log(myarray);

let index = myarray.findIndex(x=> x==7);
console.log(index);

myarray.reverse();
console.log(myarray);

myarray.pop();
console.log(myarray);

index = myarray.findIndex(x=> x==9);
myarray.splice(index, 1);
console.log(myarray);


//Filter, Map and reduce
myarray=[1,3,1,7,9];

let filtered = myarray.filter(x => x <6);
console.log(filtered);

let squared = myarray.map(x => x*x);
console.log(squared);

let added = myarray.map(x=> x+3);
console.log(added);

let pairs = myarray.map(x => [x, String.fromCharCode(x + 64)]);
console.log(pairs);

let sumoflist = myarray.reduce((x,y) => x + y);
console.log(sumoflist);

let multiplyoflist = myarray.reduce((x,y) => x * y);
console.log(multiplyoflist);

let maxoflist = myarray.reduce((x,y) => Math.max(x,y));
console.log(maxoflist);

let flat = myarray.flatMap(x => [x, String.fromCharCode(x + 64)]);
console.log(flat);