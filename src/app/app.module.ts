import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
//import { AppRoutingModule } from './app-routing.module';


import { StoreModule } from '@ngrx/store';
import {tutorialreducer} from './reducers/tutorial.reducer';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,ReadComponent,CreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'products/:productId', component: AppComponent },
    ]),

    StoreModule.forRoot({
      tutorial : tutorialreducer
    } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
