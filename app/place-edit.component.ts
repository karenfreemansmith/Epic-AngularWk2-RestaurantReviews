import { Component, Input, Output, EventEmitter } from '@angular/core';
import { {Place} } from './place.model';

@Component ({
  selector: "edit-place",
  template:`
  <div *ngIf="childSelectedPlace">
    <h3>Edit {Place}:</h3>
    <div class="form-group">
      <label>Edit {Place} Name: </label>
      <input [(ngModel)]="childSelectedPlace.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit {Place} Brand: </label>
      <input [(ngModel)]="childSelectedPlace.brand" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit Pint Price: </label>
      <input [(ngModel)]="childSelectedPlace.price" class="form-control" type="number" min="0">
    </div>
    <div class="form-group">
      <label>Edit {Place} ABV: </label>
      <input [(ngModel)]="childSelectedPlace.abv" class="form-control" type="number">
    </div>
    <button (click)="updateClicked()" class="btn form-control">Update {Place}</button>
  </div>
  `
})

export class EditPlaceComponent {
  @Input() childSelectedPlace: {Place};
  @Output() newPlaceEditor = new EventEmitter();
  updateClicked() {
    this.newPlaceEditor.emit();
  }
}
