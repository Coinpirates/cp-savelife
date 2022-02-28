import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
