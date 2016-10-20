"use strict";
var Place = (function () {
    function Place(name, brand, price, abv) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.abv = abv;
        this.pints = 124;
    }
    Place.prototype.dispensePint = function () {
        if (this.pints > 0) {
            this.pints--;
        }
        else {
            alert("Keg has been replaced!");
            this.pints = 124;
        }
    };
    return Place;
}());
exports.Place = Place;
//# sourceMappingURL=place.model.js.map