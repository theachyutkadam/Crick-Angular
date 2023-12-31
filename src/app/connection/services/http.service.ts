import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { api_base_url, auth_token, user_id} from '../app-config';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }

  httpHeader = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json'
  })

  httpHeaderWithToken = new HttpHeaders({
    'Accept': 'application/json',
    'content-type': 'application/json',
    'user_id': `${user_id}`,
    'Authorization': `${auth_token}`,
  })

  get(url: any, params: any = null): Observable<any>{
    const converted_params = this.configureParams(params)
    return this._http.get(`${api_base_url}${url}${converted_params}`, {headers: this.httpHeaderWithToken})
  }

  post(url: any, obj: any){
    return this._http.post(`${api_base_url}${url}`, obj, {headers: this.httpHeaderWithToken})
  }

  configureParams(params:any){
    let paramsString = ""
    if(params){
      params.forEach((element: any, index: number) => {
        if(index == 0){
          paramsString += `?${element.key}=${element.value}`
        }

        if(index > 0 && params.length > 1){
          paramsString += `&${element.key}=${element.value}`
        }
      });
    }
    return paramsString
  }

}