"use strict";
var Keg = (function () {
    function Keg(name, brand, price, abv) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.abv = abv;
        this.pints = 124;
    }
    Keg.prototype.dispensePint = function () {
        if (this.pints > 0) {
            this.pints--;
        }
        else {
            alert("Keg has been replaced!");
            this.pints = 124;
        }
    };
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=keg.model.js.map