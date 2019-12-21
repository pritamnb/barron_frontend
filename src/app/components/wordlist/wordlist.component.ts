import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class wordlistComponent implements OnInit {
  words = [];
  panelOpenState = false;
  isBookmarked = false;
  constructor() {
    this.words = [
      {
        word: 'Abate',
        meaning: 'subside , or moderate',
        bookmarked: false
      },
      {
        word: 'Aberrant',
        meaning: 'abnormal, or deviant',
        bookmarked: false
      },
      {
        word: 'Abeyance',
        meaning: 'suspended action',
        bookmarked: false
      },
      {
        word: 'Abscond',
        meaning: 'depart secretly and hide',
        bookmarked: false
      },
      {
        word: 'Abstemious',
        meaning: 'sparing in eating and drinking; temperate',
        bookmarked: false
      },
      {
        word: 'Admonish',
        meaning: 'warn; reprove',
        bookmarked: false
      },
      {
        word: 'Adulterate',
        meaning: 'make impure by adding inferior or tainted substances',
        bookmarked: false
      },
      {
        word: 'Aesthetic',
        meaning: 'artistic; dealing with or capable of appreciating the beautiful',
        bookmarked: false
      },
      {
        word: 'Aggregate',
        meaning: 'gather; accumulate',
        bookmarked: false
      },
      {
        word: 'Alacrity',
        meaning: 'cheerful promptness; eagerness',
        bookmarked: false
      }
    ];
  }

  ngOnInit() {

  }
  onBookmark(word, meaning, i, state) {

    this.words[i]['bookmarked'] = state;
    this.isBookmarked = !this.isBookmarked;

  }
}
