import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Place } from './place.model';

@Component ({
  selector: "list-places",
  template:`
  <div class="row">
    <div class="col-xs-6 col-xs-offset-2">
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value = "All" selected="selected">Show All Places</option>
        <option value = "is Empty">Show Empty Places</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentPlace of childPlaceList | emptiness:selectedEmptiness" class="row">
    <div class="col-xs-2">
      <img *ngIf="currentPlace.price<4.50" src="build/images/cheap.png" class="img-responsive" />
      <img *ngIf="currentPlace.price>6.50" src="build/images/premium.png" class="img-responsive" />
    </div>
    <div class="col-xs-10">
      <h3 *ngIf="currentPlace.abv>=.05" (click)="selectPlace(currentKeg)" class="heavy">{{ currentPlace.brand }}: {{ currentPlace.pints }}</h3>
      <h3 *ngIf="currentPlace.abv<.05" (click)="selectPlace(currentKeg)" class="light">{{ currentPlace.brand }}: {{ currentPlace.pints }}</h3>
      <h4>{{ currentPlace.name }} ({{ currentPlace.abv | percent }}) ...... {{ currentPlace.price | currency:'USD':true:'1.2-2' }}</h4>
      <p (click)="currentPlace.dispensePint()">Dispense Pint</p>
    </div>
  </div>
  `
})

export class ListPlaceComponent {
  @Input() childPlaceList: Place[];
  @Output() clickedPlace = new EventEmitter();
  public selectedEmptiness: string = "All";
  onChange(optionFromMenu) {
    this.selectedEmptiness = optionFromMenu;
  }
  selectPlace(placeToEdit: Place) {
    this.clickedPlace.emit(placeToEdit);
  }
}
