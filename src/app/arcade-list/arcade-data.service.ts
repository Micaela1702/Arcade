import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import {i_arcade} from './i-arcade';

const URL = 'https://6a5a8550ad8332e75f028ea6.mockapi.io/juego';

@Injectable({
  providedIn: 'root'
})
export class arcadeDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<i_arcade[]> {
    return this.http.get<i_arcade[]>(URL)
                .pipe(
                tap( (juegos: i_arcade[]) => juegos.forEach(juego => juego.quantity = 0))
               );
  }
}
