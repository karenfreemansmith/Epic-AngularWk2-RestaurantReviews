"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var place_model_1 = require("./place.model");
var AddPlaceComponent = (function () {
    function AddPlaceComponent() {
        this.newPlaceSender = new core_1.EventEmitter();
    }
    AddPlaceComponent.prototype.addClicked = function (name, brand, price, abv) {
        if ((name !== '') && (brand !== '') && (price > 0) && (abv > 0)) {
            var newPlaceToAdd = new place_model_1.Place(name, brand, price, abv);
            this.newPlaceSender.emit(newPlaceToAdd);
        }
        else {
            alert("You need to fill in all blanks to tap a keg, sober up and try again!");
        }
    };
    return AddPlaceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", place_model_1.Place)
], AddPlaceComponent.prototype, "childSelectedPlace", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddPlaceComponent.prototype, "newPlaceSender", void 0);
AddPlaceComponent = __decorate([
    core_1.Component({
        selector: "add-place",
        template: "\n  <div *ngIf=\"childSelectedPlace===null\">\n    <h3>New Place:</h3>\n    <div class=\"form-group\">\n      <label>Enter Place Name: </label>\n      <input #newName class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Place Brand: </label>\n      <input #newBrand class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Pint Price: </label>\n      <input #newPrice class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Place ABV: </label>\n      <input #newABV class=\"form-control\">\n    </div>\n    <button (click)=\"\n      addClicked(newName.value, newBrand.value, newPrice.value, newABV.value);\n      newName.value='';\n      newBrand.value='';\n      newPrice.value='';\n      newABV.value='';\n    \" class=\"btn form-control\">Add Place</button>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AddPlaceComponent);
exports.AddPlaceComponent = AddPlaceComponent;
//# sourceMappingURL=place-add.component.js.map