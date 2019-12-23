import {
  Component, OnInit,
  OnDestroy,
  ComponentFactoryResolver
} from '@angular/core';
import { ModalService } from '../../shared/modal/modal.service';
import { FilterModalComponent } from '../modals/filter-modal/filter-modal.component';
@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent implements OnInit {
  words = [];
  panelOpenState = false;
  isBookmarked = false;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService, ) {
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
      }
    ];
  }

  ngOnInit() {

  }
  onBookmark(word, meaning, i, state) {
    console.log(state);

    this.words[i]['bookmarked'] = state;

    this.isBookmarked = !this.isBookmarked;

  }
  onFilter() {
    console.log('Im clicked');

    this.openModal(FilterModalComponent);
  }
  // modal opener
  openModal(component) {
    const addModal = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const modal$ = this.modalService.createFromFactory(addModal, {
      modalTitle: 'Demo Title',
      isAdd: true,
      onSubmit: res => {
        console.log('HERE');

        console.log(res);
      }
    });
  }
}
