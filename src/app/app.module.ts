import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './count.reducer';

@NgModule({
  imports: [BrowserModule,CommonModule, StoreModule.forRoot({count: counterReducer})],
  declarations: [AppComponent, MyCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

