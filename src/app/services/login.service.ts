import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl: string = 'https://fakestoreapi.com/auth/login'

  constructor(private _http:HttpClient) { }

  public isLogged(): boolean {
    const authToken = localStorage.getItem('auth-token')
    if( authToken == null ) return false;
    return true;
  }

  /**
   * Receive email and password and return a observable with token or error
   * 
   * @param email 
   * @param password 
   * @returns 
   */
  doLoginApi(username: string, password: string): Observable<any> {
    const body = JSON.stringify({'username': username, 'password': password});

    const headers = new HttpHeaders({
      'Accept': 'application/json, */*',
      'Content-Type': 'application/json',
    });

    return this._http.post<any>(this.loginUrl, body, {headers: headers})
  }
}
