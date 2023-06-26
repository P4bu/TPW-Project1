import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  urlPoke:any
  pokemon:any;

  constructor (
    private activateRoute:ActivatedRoute, 
    private router:Router,
    private movieService:MovieService
    ){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(resp=>{
      console.log(resp['url'])
      this.urlPoke = resp['url']
      if(!resp['url']){
        this.router.navigate([''])
      }
      this.movieService.getDetail(this.urlPoke).subscribe(resp=>{
        console.log(resp)
        this.pokemon = resp
        console.log(resp)
      })
    })



  }

}
