import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ListPlaceComponent } from './place-list.component';
import { EditPlaceComponent } from './place-edit.component';
import { AddPlaceComponent } from './place-add.component';
import { EmptinessPipe } from './emptiness.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListPlaceComponent,
    EditPlaceComponent,
    AddPlaceComponent,
    EmptinessPipe,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
