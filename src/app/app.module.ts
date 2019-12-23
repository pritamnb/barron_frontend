import { FilterModalComponent } from './components/modals/filter-modal/filter-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WordlistComponent } from './components/wordlist/wordlist.component';
import { CardsComponent } from './components/cards/cards.component';
import { MatTabsModule } from '@angular/material';
import { ModalModule } from './shared/modal/modal.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordlistComponent,
    CardsComponent,
    FilterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTabsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FilterModalComponent
  ]
})
export class AppModule { }
