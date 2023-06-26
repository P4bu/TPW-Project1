import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.URL

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getTrending(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151/');
  }
  getTrendingPoke(name:String){
    return this.http.get(`${url}`+name);
  }

  getDetail(urlPoke:any){
    return this.http.get(`${urlPoke}`)
  }

}
