"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// const spacecraftName: string = 'Determination';
// const speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// const milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
// const milesToMars: number = kilometersToMars * milesPerKilometer;
// const hoursToMars: number = milesToMars / speedMph;
// const daysToMars: number = hoursToMars / 24; 
// Code an output statement here (use a template literal):
// console.log(`It will take ${spacecraftName} ${daysToMars} days to reach Mars.`)
// Part 3: Create a Function ("getDaysToLocation")
// const getDaysToLocation = (kilometersAway: number): number => {
//     const milesAway: number = kilometersAway * milesPerKilometer;
//     const hoursToDestination: number = milesAway / speedMph;
//     const daysToLocation: number = hoursToDestination / 24;
//     return daysToLocation;
// };
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to reach Mars.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToDestination = milesAway / this.speedMph;
        var daysToLocation = hoursToDestination / 24;
        return daysToLocation;
    };
    ;
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
