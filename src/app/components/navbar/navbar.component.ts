import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('navbarHeader') nativeEl: ElementRef | undefined;

  last_scroll_top = 0

  @HostListener('window:scroll',['$event'])
  
    scrollHandler(event:any){
      let scroll_top = window.scrollY
      
      if(scroll_top >= this.last_scroll_top){
        this.nativeEl?.nativeElement.classList.remove('scrolled-down');
        this.nativeEl?.nativeElement.classList.add('scrolled-up')
      }else{
        this.nativeEl?.nativeElement.classList.remove('scrolled-up');
        this.nativeEl?.nativeElement.classList.add('scrolled-down')
      }

      this.last_scroll_top = scroll_top
    }
}
