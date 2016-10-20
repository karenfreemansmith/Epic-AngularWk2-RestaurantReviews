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
var core_1 = require('@angular/core');
var keg_model_1 = require('./keg.model');
var AddKegComponent = (function () {
    function AddKegComponent() {
        this.newKegSender = new core_1.EventEmitter();
    }
    AddKegComponent.prototype.addClicked = function (name, brand, price, abv) {
        if ((name !== '') && (brand !== '') && (price > 0) && (abv > 0)) {
            var newKegToAdd = new keg_model_1.Keg(name, brand, price, abv);
            this.newKegSender.emit(newKegToAdd);
        }
        else {
            alert("You need to fill in all blanks to tap a keg, sober up and try again!");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', keg_model_1.Keg)
    ], AddKegComponent.prototype, "childSelectedKeg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddKegComponent.prototype, "newKegSender", void 0);
    AddKegComponent = __decorate([
        core_1.Component({
            selector: "add-keg",
            template: "\n  <div *ngIf=\"childSelectedKeg===null\">\n    <h3>New Keg:</h3>\n    <div class=\"form-group\">\n      <label>Enter Keg Name: </label>\n      <input #newName class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Keg Brand: </label>\n      <input #newBrand class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Pint Price: </label>\n      <input #newPrice class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Keg ABV: </label>\n      <input #newABV class=\"form-control\">\n    </div>\n    <button (click)=\"\n      addClicked(newName.value, newBrand.value, newPrice.value, newABV.value);\n      newName.value='';\n      newBrand.value='';\n      newPrice.value='';\n      newABV.value='';\n    \" class=\"btn form-control\">Add Keg</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddKegComponent);
    return AddKegComponent;
}());
exports.AddKegComponent = AddKegComponent;
//# sourceMappingURL=keg-add.component.js.map