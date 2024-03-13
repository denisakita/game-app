import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
