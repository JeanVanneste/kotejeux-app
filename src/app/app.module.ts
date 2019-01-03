import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JeuxComponent } from './jeux/jeux.component';
import { EditeursComponent } from './editeurs/editeurs.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuxComponent,
    EditeursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
