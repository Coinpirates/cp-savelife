import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  $ = (window as any).$;
 
  constructor() { }

  scrollTo(id: string): void {
    const elem = this.$(`#${id}`);
    const offset = elem.offset();
    if (offset) {
        window.scrollTo({
            top: offset.top,
            behavior: 'smooth',
        });
    }
    if(this.$(window).width() <= 768){
        this.$('#nav').fadeOut();
    }
}
}
