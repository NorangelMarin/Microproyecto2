import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClientModule) { }
/*
  public get(url:string){
    return this.http.get(url);
  }
  */
}
