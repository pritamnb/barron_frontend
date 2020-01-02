import { Component, OnInit } from '@angular/core';
import { ModalContainer } from '../../../shared/modal/modal.container';
import { NgModel, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WordListService } from '../../../shared/services/word-list.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  // animations: [fade]
})
export class FilterModalComponent extends ModalContainer implements OnInit {
  filterWordsSubscription: Subscription;
  selectall: boolean;
  selectedListSortValue: any;
  ascDescItem: any;
  bookmarkItem: any;
  selectList = new FormControl();
  sortByAscDesc = new FormControl();
  filterByBookmark = new FormControl();


  selectSortList: string[] = ['All', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ascDesc: string[] = [
    'Ascending',
    'Descending'
  ];
  selectBookmark: string[] = [
    'All',
    'marked',
    'Unmarked'
  ];


  constructor(private wordlistservice: WordListService) {
    super();
    this.selectall = false;
    this.selectList.setValue([
      this.selectSortList[0]
    ]);
    this.sortByAscDesc.setValue(this.ascDesc[0]);
    this.filterByBookmark.setValue(this.selectBookmark[0]);

    // form subscription
    this.selectList.valueChanges.subscribe(listItem => {
      console.log('Selected Item', listItem);
      this.selectedListSortValue = listItem;
    });
    this.sortByAscDesc.valueChanges.subscribe(listItem => {
      console.log('Selected Item', listItem);
      this.ascDescItem = listItem;
    });
    this.filterByBookmark.valueChanges.subscribe(listItem => {
      console.log('Selected Item', listItem);
      this.bookmarkItem = listItem;
    });
  }

  selectalllang() {
    console.log('call', [this.selectall, this.selectList]);
    if (this.selectall === false) {
      this.selectList = new FormControl();
      return;
    } else if (this.selectall === true) {
      this.selectList = new FormControl();
      this.selectList.setValue(this.selectSortList);
    }
  }
  onApply() {
    let bookmark;
    let order;
    let listCount;
    console.log('selected sorting type-', this.selectList.value.length);
    listCount = this.selectList.value.length;
    console.log('order-', this.sortByAscDesc.value);
    console.log('bookmarked-', this.filterByBookmark.value);
    if (listCount > 1) {
      //
      if (this.selectList.value.includes('All')) {
        const index = this.selectList.value.indexOf('All');
        this.selectList.value.splice(index, 1);
      }
      console.log('***&&&****', this.selectList.value);
    }

    if (this.sortByAscDesc.value === 'Ascending') {
      order = 1;
    } else {
      order = -1;
    }
    if (this.filterByBookmark.value === 'marked') {
      bookmark = true;
    } else if (this.filterByBookmark.value === 'Unmarked') {
      bookmark = false;
    } else { bookmark = this.filterByBookmark.value }

    const payload = {
      list: this.selectList.value,
      order,
      bookmark
    };
    console.log(payload);
    this.filterWordsSubscription = this.wordlistservice.filterOnWords(payload).subscribe(res => {
      console.log(res);
    });
  }

  close() {
    this.closeModal();
  }
}
