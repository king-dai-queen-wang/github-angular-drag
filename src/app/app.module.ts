import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormTestComponent } from './form-test/form-test.component';
import { OderComponentComponent } from './oder-component/oder-component.component';
import { PriceqQuoteComponent } from './priceq-quote/priceq-quote.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { DragDirective } from './driective/drag.directive';
import { DropDirective } from './driective/drop.directive';
import {DragDropComponent} from "./components/drag-drop/drag-drop.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FormTestComponent,
    OderComponentComponent,
    PriceqQuoteComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    DragDropComponent,
    DragDirective,
    DropDirective
  ],
  imports: [
  	HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
	HttpClientInMemoryWebApiModule.forRoot(
	  InMemoryDataService, { dataEncapsulation: false }
	),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
