//Use this library to test our code
const assert = require('assert');

//Reference our app code so we can test it
//doesn't exist yet
const app = require('../app.js')

describe('Vehicle Rating Calculator', function () {
    it('Calculates a rating of 10 for a 4 cylinder car the runs on diesel', function () {
        const smallCar = app.smallCar;
        const rating = app.calculateVehicleRating(smallCar);
        assert.equal(rating, 10);
    });
    it('Calculates a rating of 8 for a 8 cylinder truck the runs on unleaded', function () {
        const smallTruck = app.smallTruck;
        const rating = app.calculateVehicleRating(smallTruck);
        assert.equal(rating, 8);
    });
});