module.exports = {
    smallCar: {
        engineSize: 4,
        fueltype: 'diesel',
    },
    smallTruck: {
        engineSize: 8,
        fueltype: 'unleaded',
    },
    calculateVehicleRating: function (vehicle) {
        if (vehicle.engineSize == 4 && vehicle.fueltype == 'diesel')
            return 10;
        if (vehicle.engineSize == 8 && vehicle.fueltype == 'unleaded')
            return 8;
    },



};