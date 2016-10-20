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
var ListPlaceComponent = (function () {
    function ListPlaceComponent() {
        this.clickedPlace = new core_1.EventEmitter();
        this.selectedEmptiness = "All";
    }
    ListPlaceComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedEmptiness = optionFromMenu;
    };
    ListPlaceComponent.prototype.selectPlace = function (placeToEdit) {
        this.clickedPlace.emit(placeToEdit);
    };
    return ListPlaceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListPlaceComponent.prototype, "childPlaceList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListPlaceComponent.prototype, "clickedPlace", void 0);
ListPlaceComponent = __decorate([
    core_1.Component({
        selector: "list-places",
        template: "\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-xs-offset-2\">\n      <select (change)=\"onChange($event.target.value)\" class=\"form-control\">\n        <option value = \"All\" selected=\"selected\">Show All Places</option>\n        <option value = \"is Empty\">Show Empty Places</option>\n      </select>\n    </div>\n  </div>\n  <div *ngFor=\"let currentPlace of childPlaceList | emptiness:selectedEmptiness\" class=\"row\">\n    <div class=\"col-xs-2\">\n      <img *ngIf=\"currentPlace.price<4.50\" src=\"build/images/cheap.png\" class=\"img-responsive\" />\n      <img *ngIf=\"currentPlace.price>6.50\" src=\"build/images/premium.png\" class=\"img-responsive\" />\n    </div>\n    <div class=\"col-xs-10\">\n      <h3 *ngIf=\"currentPlace.abv>=.05\" (click)=\"selectPlace(currentKeg)\" class=\"heavy\">{{ currentPlace.brand }}: {{ currentPlace.pints }}</h3>\n      <h3 *ngIf=\"currentPlace.abv<.05\" (click)=\"selectPlace(currentKeg)\" class=\"light\">{{ currentPlace.brand }}: {{ currentPlace.pints }}</h3>\n      <h4>{{ currentPlace.name }} ({{ currentPlace.abv | percent }}) ...... {{ currentPlace.price | currency:'USD':true:'1.2-2' }}</h4>\n      <p (click)=\"currentPlace.dispensePint()\">Dispense Pint</p>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], ListPlaceComponent);
exports.ListPlaceComponent = ListPlaceComponent;
//# sourceMappingURL=place-list.component.js.map