import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokeComponent } from './poke/poke.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
