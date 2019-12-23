import { Component, OnInit } from '@angular/core';
import { ModalContainer } from '../../../shared/modal/modal.container';
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  // animations: [fade]
})
export class FilterModalComponent extends ModalContainer implements OnInit {

  constructor() {
    super();

  }

  ngOnInit() {
  }
  close() {
    this.closeModal();
  }
}
