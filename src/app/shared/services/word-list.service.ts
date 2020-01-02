import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiEndPoints } from 'src/app/app.constant';
import { sprintf } from 'sprintf-js';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WordListService {
  private words = new Subject<any>();
  newEndPoint: string;
  tempEndpoint = 'http://192.168.1.106:4000/';
  constructor(private httpService: HttpService) { }
  onListWords() {
    this.newEndPoint = this.tempEndpoint + ApiEndPoints.WORDS.LIST_WORDS;
    return this.httpService.get(this.newEndPoint);
  }
  bookmarkWord(wordId, payload) {
    this.newEndPoint = this.tempEndpoint + ApiEndPoints.WORDS.BOOKMARK;
    return this.httpService.put(sprintf(this.newEndPoint, wordId), payload);
  }
  filterOnWords(payload) {
    this.newEndPoint = this.tempEndpoint + ApiEndPoints.WORDS.FILTER;
    return this.httpService.post(this.newEndPoint, payload);
  }
  // observables

  setWords(wordlist) {
    console.log(wordlist);
    this.words.next(wordlist);

  }
  getWords(): Observable<any> {
    return this.words.asObservable();
  }
}
