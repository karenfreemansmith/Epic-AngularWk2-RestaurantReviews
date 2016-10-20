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
var AppComponent = (function () {
    function AppComponent() {
        this.masterKegList = [
            new keg_model_1.Keg("Belgian Strong Dark", "Pfriem", 5.95, .1),
            new keg_model_1.Keg("La Fin Du Monde", "Unibroue", 7.50, .09),
            new keg_model_1.Keg("Summer Lovin'", "Everybody's Brewing", 4, .048),
            new keg_model_1.Keg("Bigfoot: Barleywine", "Sierra Navada", 7.25, .096),
            new keg_model_1.Keg("Pabst Blue Ribbon", "Pabst Brewing Co.", .95, .0474)
        ];
        this.selectedKeg = null;
    }
    AppComponent.prototype.addKeg = function (newKegFromChild) {
        this.masterKegList.push(newKegFromChild);
    };
    AppComponent.prototype.showDetails = function (clickedKeg) {
        this.selectedKeg = clickedKeg;
    };
    AppComponent.prototype.finishedUpdate = function () {
        this.selectedKeg = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>Chipped Flagon Tavern</h1>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <list-kegs\n          [childKegList] = \"masterKegList\"\n          (clickedKeg)=\"showDetails($event)\"\n        ></list-kegs>\n      </div>\n      <div class=\"col-sm-4\">\n        <add-keg\n          [childSelectedKeg]=\"selectedKeg\"\n          (newKegSender) = \"addKeg($event)\"\n        ></add-keg>\n        <edit-keg\n          [childSelectedKeg]=\"selectedKeg\"\n          (newKegEditor)=\"finishedUpdate()\"\n        ></edit-keg>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map