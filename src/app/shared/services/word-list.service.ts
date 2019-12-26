import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiEndPoints } from 'src/app/app.constant';
@Injectable({
  providedIn: 'root'
})
export class WordListService {
  newEndPoint: string;
  tempEndpoint = 'http://192.168.1.106:4000/';
  constructor(private httpService: HttpService) { }
  onListWords() {
    this.newEndPoint = this.tempEndpoint + ApiEndPoints.WORDS.LIST_WORDS;
    return this.httpService.get(this.newEndPoint);
  }
}
