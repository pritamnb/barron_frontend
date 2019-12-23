import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPlaceholderComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalPlaceholderComponent],
  exports: [ModalPlaceholderComponent],
  providers: [ModalService]
})
export class ModalModule { }
