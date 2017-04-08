import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BdService{
  
    http:any;
    baseUrl: String;

    constructor (http:Http){
      this.http = http;
      this.baseUrl = "https://devmobufrj.github.io/minerva-pocket/minerva-pocket-database.json";
    }

    getData(){
      return this.http.get(this.baseUrl).map(res => res.json());
    }
}
