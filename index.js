import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// (a)
const homeName = fifaData.filter((home) => {
  return home.Year === 2014 && home.Stage === "Final";
});
console.log(homeName[0]["Home Team Name"]);

//(b)
const awayName = fifaData.filter((away) => {
  return away.Year === 2014 && away.Stage === "Final";
});
console.log(awayName[0]["Away Team Name"]);

//(c)
const homeGoals = fifaData.filter((home) => {
  return home.Year === 2014 && home.Stage === "Final";
});
console.log(homeGoals[0]["Home Team Goals"]);

//(d)
const awayGoals = fifaData.filter((away) => {
  return away.Year === 2014 && away.Stage === "Final";
});
console.log(awayGoals[0]["Away Team Goals"]);

//(e)
const winningTeam = fifaData.filter((win) => {
  return win.Year === 2014 && win.Stage === "Final";
});
console.log(winningTeam[0]["Win conditions"]);
console.log("----------------------------------------");
console.log();
console.log("----------------------------------------");
console.log();

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((finals) => {
    return finals.Stage === "Final";
  });
}
console.log(getFinals(fifaData));
console.log("----------------------------------------");
console.log();
console.log("----------------------------------------");
console.log();

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
  let years = cb(fifaData).map((data) => {
    return data.Year;
  });
  return years;
}

getYears(getFinals);
console.log(getYears(getFinals));
console.log("----------------------------------------");
console.log();
console.log("----------------------------------------");
console.log();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {
  const winners = [];
  cb(fifaData).map((data) => {
    if (data["Home Team Goals"] > data["Away Team Goals"]) {
      winners.push(data["Home Team Name"]);
    } else {
      winners.push(data["Away Team Name"]);
    }
    return winners;
  });
  return winners;
}

getWinners(getFinals);
console.log(getWinners(getFinals));
console.log("----------------------------------------");
console.log();
console.log("----------------------------------------");
console.log();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
  const finArray = [];
  let year = getYears(getFinals);
  for (let i = 0; i < year.length; i++) {
    finArray.push(`In ${year[i]},`);
  }

  let win = getWinners(getFinals);
  for (let i = 0; i < win.length; i++) {
    finArray[i] += `${win[i]} won the world cup!`;
  }
  return finArray;
}

getWinnersByYear(getWinners, getYears);
console.log(getWinnersByYear(getWinners, getYears));
console.log("----------------------------------------");
console.log();
console.log("----------------------------------------");
console.log();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
console.log('This is the average of all home scores and all away scores in fifaData')
console.log("")
function getAverageGoals(data) {
  const hta = [];
  const ata = [];
   fifaData.map((hg) => {
      hta.push(hg["Home Team Goals"]);
    });
    fifaData.map((ag) => {
      ata.push(ag["Away Team Goals"]);
    });
   let homeTeamReduce = hta.reduce((total, digit) => {
    return(total + digit);
}, 0)
    console.log((homeTeamReduce/hta.length).toFixed(2));
    let awayTeamReduce = ata.reduce((total, digit) => {
        return(total + digit);
    }, 0)
        console.log((awayTeamReduce/ata.length).toFixed(2));
}
getAverageGoals(getFinals);
console.log("")
console.log("")
console.log('This the average of both teams scores per match in the Finals array')
console.log("")
function getAverageGoals1(goals) {
  let goalTotal = [];
  let goalAverage= [];
  goals(fifaData).map((data) => {
      const add = data["Away Team Goals"] + data["Home Team Goals"]
    goalAverage.push(add/2)
  });
  console.log(goalAverage);
  };

getAverageGoals1(getFinals);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
