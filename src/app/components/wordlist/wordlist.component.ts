import {
  Component, OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ChangeDetectorRef
} from '@angular/core';
import { ModalService } from '../../shared/modal/modal.service';
import { FilterModalComponent } from '../modals/filter-modal/filter-modal.component';
import { WordListService } from '../../shared/services/word-list.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent implements OnInit, OnDestroy {
  // observables
  private subject: Subject<string> = new Subject();

  // subscriptions
  searchSubscription: Subscription;
  listWordsSubscription: Subscription;
  bookmarkWordSubscription: Subscription;
  words: any;
  panelOpenState = false;
  isBookmarked = false;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
    private wordlistService: WordListService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef

  ) {
    this.wordlistService.getWords().subscribe(res => {
      this.words = res;
      console.log(this.words);
    });
  }
  ngOnInit() {
    // this.getWords();
    this.subject
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(res => {
        const payload = {
          searchQuery: res
        };

        this.searchWord(payload);
      });
  }
  onKey(e) {
    this.subject.next(e);
  }

  searchWord(searchTerm) {
    const searchTermLength = searchTerm['searchQuery'].length;

    if (searchTermLength > 0) {
      this.searchSubscription = this.wordlistService
        .searchWord(searchTerm)
        .subscribe(
          res => {
            // this.words = res;
            this.wordlistService.setWords(res);
            this.cdr.detectChanges();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      // this.getProjectList(this.limit, this.offset, this.sort);
      this.getWords();
    }
  }
  getWords() {
    this.listWordsSubscription = this.wordlistService.onListWords().subscribe(res => {
      // this.words = res;
      this.wordlistService.setWords(res);
      console.log('first subscribe', res);
      if (this.words) { this.cdr.detectChanges(); }
    }, err => {
      console.log('Network error', err);
    });

  }
  onBookmark(id: any, word, meaning, i, state) {
    console.log('bookmarked word', id, word, state);

    this.bookmarkWordSubscription = this.wordlistService.bookmarkWord(id, { state }).subscribe(res => {
      console.log(res);
      if (res) {
        this.words[i].bookmarked = res.bookmarked;
        this.cdr.detectChanges();
      }
    });

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

        console.log('In modal res', res);
        this.words = res;
        this.wordlistService.setWords(res);
        this.cdr.detectChanges();

      }
    });
  }
  ngOnDestroy() {
    if (this.listWordsSubscription) {
      this.listWordsSubscription.unsubscribe();
    }
  }
}
