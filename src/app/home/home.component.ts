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
    let hash = location.hash.split('-')[1];
    if(hash){
        this.helperService.scrollTo(hash);
    }
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
