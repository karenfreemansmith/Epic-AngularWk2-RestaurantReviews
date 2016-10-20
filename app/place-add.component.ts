import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Place } from './place.model';

@Component ({
  selector:"add-place",
  template:`
  <div *ngIf="childSelectedPlace===null">
    <h3>New Place:</h3>
    <div class="form-group">
      <label>Enter Place Name: </label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Place Brand: </label>
      <input #newBrand class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Pint Price: </label>
      <input #newPrice class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Place ABV: </label>
      <input #newABV class="form-control">
    </div>
    <button (click)="
      addClicked(newName.value, newBrand.value, newPrice.value, newABV.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newABV.value='';
    " class="btn form-control">Add Place</button>
  </div>
  `
})

export class AddPlaceComponent {
  @Input() childSelectedPlace: Place;
  @Output() newPlaceSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, abv: number){
    if((name!=='')&&(brand!=='')&&(price>0)&&(abv>0)) {
      var newPlaceToAdd: Place = new Place(name, brand, price, abv);
      this.newPlaceSender.emit(newPlaceToAdd);
    } else {
      alert("You need to fill in all blanks to tap a keg, sober up and try again!");
    }
  }
}
