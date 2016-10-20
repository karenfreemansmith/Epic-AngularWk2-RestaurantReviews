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
from;
'./place.model';
var EditPlaceComponent = (function () {
    function EditPlaceComponent() {
        this.newPlaceEditor = new core_1.EventEmitter();
    }
    EditPlaceComponent.prototype.updateClicked = function () {
        this.newPlaceEditor.emit();
    };
    return EditPlaceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EditPlaceComponent.prototype, "childSelectedPlace", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditPlaceComponent.prototype, "newPlaceEditor", void 0);
EditPlaceComponent = __decorate([
    core_1.Component({
        selector: "edit-place",
        template: "\n  <div *ngIf=\"childSelectedPlace\">\n    <h3>Edit {Place}:</h3>\n    <div class=\"form-group\">\n      <label>Edit {Place} Name: </label>\n      <input [(ngModel)]=\"childSelectedPlace.name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Edit {Place} Brand: </label>\n      <input [(ngModel)]=\"childSelectedPlace.brand\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Edit Pint Price: </label>\n      <input [(ngModel)]=\"childSelectedPlace.price\" class=\"form-control\" type=\"number\" min=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <label>Edit {Place} ABV: </label>\n      <input [(ngModel)]=\"childSelectedPlace.abv\" class=\"form-control\" type=\"number\">\n    </div>\n    <button (click)=\"updateClicked()\" class=\"btn form-control\">Update {Place}</button>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], EditPlaceComponent);
exports.EditPlaceComponent = EditPlaceComponent;
//# sourceMappingURL=place-edit.component.js.map