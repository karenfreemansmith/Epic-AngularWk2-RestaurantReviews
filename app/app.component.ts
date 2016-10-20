import { Component } from '@angular/core';
import { Place } from './place.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Restaurant Reviews</h1>
    <div class="row">
      <div class="col-sm-8">
        <list-Places
          [childPlaceList] = "masterKegList"
          (clickedPlace)="showDetails($event)"
        ></list-places>
      </div>
      <div class="col-sm-4">
        <add-place
          [childSelectedPlace]="selectedPlace"
          (newPlaceSender) = "addKeg($event)"
        ></add-place>
        <edit-place
          [childSelectedPlace]="selectedPlace"
          (newPlaceEditor)="finishedUpdate()"
        ></edit-place>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterPlaceList: Place[] = [
    new Place("Belgian Strong Dark", "Pfriem", 5.95, .1),
    new Place("La Fin Du Monde", "Unibroue", 7.50, .09),
    new Place("Summer Lovin'", "Everybody's Brewing", 4, .048),
    new Place("Bigfoot: Barleywine", "Sierra Navada", 7.25, .096),
    new Place("Pabst Blue Ribbon", "Pabst Brewing Co.", .95, .0474)
  ];
  addKeg(newPlaceFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
  selectedPlace: Place = null;
  showDetails(clickedPlace: Place) {
    this.selectedPlace = clickedPlace;
  }
  finishedUpdate() {
    this.selectedPlace = null;
  }
}
