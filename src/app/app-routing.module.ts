import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordlistComponent } from './components/wordlist/wordlist.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wordlist' },
  { path: 'wordlist', component: WordlistComponent },
  { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
