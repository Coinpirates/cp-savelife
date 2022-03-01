import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const $ = (window as any).$;
    let hash = location.hash.split('-')[1];
    if(hash){
        this.helperService.scrollTo(hash);
    }
    $('.about-header-right ul li')
        .mouseenter(function() {
          const index = $(this).index('.about-header-right ul li') + 1;
          $(this).find('span').addClass('about-link-active');
          $(this).append(`
          <div id="aboutVideo">
            <img src="assets/images/about/${index}.gif">
          </div>
          `);
        })
        .mouseleave(function() {
          $(this).find('span').removeClass('about-link-active');
          $('#aboutVideo').remove();
        });
  }

  arts = [
    {
      imgLink: 'assets/images/nfts/1.png',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/1.png',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/1.png',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/1.png',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    }
  ];

}
