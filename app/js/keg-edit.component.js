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
var EditKegComponent = (function () {
    function EditKegComponent() {
        this.newKegEditor = new core_1.EventEmitter();
    }
    EditKegComponent.prototype.updateClicked = function () {
        this.newKegEditor.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', keg_model_1.Keg)
    ], EditKegComponent.prototype, "childSelectedKeg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditKegComponent.prototype, "newKegEditor", void 0);
    EditKegComponent = __decorate([
        core_1.Component({
            selector: "edit-keg",
            template: "\n  <div *ngIf=\"childSelectedKeg\">\n    <h3>Edit Keg:</h3>\n    <div class=\"form-group\">\n      <label>Edit Keg Name: </label>\n      <input [(ngModel)]=\"childSelectedKeg.name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Edit Keg Brand: </label>\n      <input [(ngModel)]=\"childSelectedKeg.brand\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Edit Pint Price: </label>\n      <input [(ngModel)]=\"childSelectedKeg.price\" class=\"form-control\" type=\"number\" min=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <label>Edit Keg ABV: </label>\n      <input [(ngModel)]=\"childSelectedKeg.abv\" class=\"form-control\" type=\"number\">\n    </div>\n    <button (click)=\"updateClicked()\" class=\"btn form-control\">Update Keg</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditKegComponent);
    return EditKegComponent;
}());
exports.EditKegComponent = EditKegComponent;
//# sourceMappingURL=keg-edit.component.js.map