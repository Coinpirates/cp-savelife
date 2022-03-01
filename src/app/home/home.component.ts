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
      imgLink: 'assets/images/nfts/vladislav_popereka.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/stanislav_soima.gif',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Radistkaa.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Nickole_Feldman.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Misha_Pokutnii.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Michell_Feldman.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Maria_Sovich.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Katya_Kononenko.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/etchingroom1.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Du_Corpes.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Dima_Erlikh.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    },
    {
      imgLink: 'assets/images/nfts/Andrey_Babchynsky.jpg',
      author: 'soul.departs',
      authorLink: '',
      details: ''
    }
  ];

}
