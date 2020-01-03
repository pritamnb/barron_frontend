import { environment } from '../environments/environment';
export class HttpConstants {
  /* Http.Service Constants */
  static CONTENT_TYPE = 'Content-Type';
  static CONTENT_TYPE_VALUE = 'application/json';
  // static API_KEY = 'api-key';
  // static AUTH_TOKEN = 'auth-token';
}

export class ApiEndPoints {
  static WORDS = {
    LIST_WORDS: 'api/words',
    BOOKMARK: 'api/words/bookmark/%s',
    FILTER: 'api/words/filter',
    SEARCH_WORD: 'api/words/searchWord'
  };
}
