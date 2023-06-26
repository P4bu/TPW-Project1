import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  movies:any[]=[];
  poke_url:any;
  poke_img:any
  poke_type:any[]=[];


  constructor(private movieService:MovieService, private router:Router){}

  ngOnInit(): void {
    this.movieService.getTrending().subscribe((resp:any)=>{
      /* console.log(resp) */
      this.movies = resp.results
      /* console.log(this.movies) */
    
      for (let index = 0; index < this.movies.length; index++) 
      {
         this.poke_url = this.movies[index];
         //this.poke_img = `raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
         /* console.log(this.poke_img); */ 
         /* console.log(this.poke_url.url); */
         
         this.movieService.getTrendingPoke(this.poke_url.name).subscribe((resp2:any)=>{
          
          //console.log("resp2: ", resp2);
          this.poke_type = resp2.types
          })
      }
  })
  }

  clickMovie(url_pokes:any){
    console.log("Seleccion",url_pokes)
    this.router.navigate(['poke',url_pokes])
  }

}
