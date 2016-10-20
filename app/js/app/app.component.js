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
var AppComponent = (function () {
    function AppComponent() {
        this.masterPlaceList = [
            new place_model_1.Place("Belgian Strong Dark", "Pfriem", 5.95, .1),
            new place_model_1.Place("La Fin Du Monde", "Unibroue", 7.50, .09),
            new place_model_1.Place("Summer Lovin'", "Everybody's Brewing", 4, .048),
            new place_model_1.Place("Bigfoot: Barleywine", "Sierra Navada", 7.25, .096),
            new place_model_1.Place("Pabst Blue Ribbon", "Pabst Brewing Co.", .95, .0474)
        ];
        this.selectedPlace = null;
    }
    AppComponent.prototype.addKeg = function (newPlaceFromChild) {
        this.masterKegList.push(newKegFromChild);
    };
    AppComponent.prototype.showDetails = function (clickedPlace) {
        this.selectedPlace = clickedPlace;
    };
    AppComponent.prototype.finishedUpdate = function () {
        this.selectedPlace = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"container\">\n    <h1>Restaurant Reviews</h1>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <list-Places\n          [childPlaceList] = \"masterKegList\"\n          (clickedPlace)=\"showDetails($event)\"\n        ></list-places>\n      </div>\n      <div class=\"col-sm-4\">\n        <add-place\n          [childSelectedPlace]=\"selectedPlace\"\n          (newPlaceSender) = \"addKeg($event)\"\n        ></add-place>\n        <edit-place\n          [childSelectedPlace]=\"selectedPlace\"\n          (newPlaceEditor)=\"finishedUpdate()\"\n        ></edit-place>\n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map