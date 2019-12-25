import { Component, OnInit } from '@angular/core';
import { ModalContainer } from '../../../shared/modal/modal.container';
import { NgModel, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  // animations: [fade]
})
export class FilterModalComponent extends ModalContainer implements OnInit {
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


  constructor() {
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
    console.log('selected sorting type-', this.selectedListSortValue);
    console.log('order-', this.ascDescItem);
    console.log('bookmarked-', this.bookmarkItem);


  }

  close() {
    this.closeModal();
  }
}
