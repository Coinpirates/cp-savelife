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
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025910027421483018'
    },
    {
      imgLink: 'assets/images/nfts/stanislav_soima.gif',
      author: 'soima.stas',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025907828398227466'
    },
    {
      imgLink: 'assets/images/nfts/Radistkaa.jpg',
      author: 'radistkaa',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025911126933110794'
    },
    {
      imgLink: 'assets/images/nfts/Misha_Pokutnii.jpg',
      author: 'pokutnii',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025914425467994122'
    },
    {
      imgLink: 'assets/images/nfts/Maria_Sovich.jpg',
      author: 'm.sovych',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025915524979621898'
    },
    {
      imgLink: 'assets/images/nfts/Katya_Kononenko.jpg',
      author: 'katya_kononenko_art',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025916624491249674'
    },
    {
      imgLink: 'assets/images/nfts/Du_Corpes.jpg',
      author: 'geneve.m',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025912226444738570'
    },
    {
      imgLink: 'assets/images/nfts/Andrey_Babchynsky.jpg',
      author: 'babchynsky',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025913325956366346'
    },
    {
      imgLink: 'assets/images/nfts/etchingroom1.jpg',
      author: 'etching.room1',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025917724002877450'
    },
    {
      imgLink: 'assets/images/nfts/Svitlana_Shynkarchuk.png',
      author: 'sveta_svetllana',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025918823514505226'
    },
    {
      imgLink: 'assets/images/nfts/Olha_Nazarets.png',
      author: 'rua_neja',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025921022537760769'
    },
    {
      imgLink: 'assets/images/nfts/Maksym_Gordiyenko.jpeg',
      author: 'gordi.art',
      details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025922122049388554'
    },
    // {
    //   imgLink: 'assets/images/nfts/Kolontaieva_Anastasia.jpeg',
    //   author: '',
    //   details: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/7143660949002791293845804557368133918929794955951157322707025919923026133002'
    // },
    // {
    //   imgLink: 'assets/images/nfts/Dima_Erlikh.jpg',
    //   author: 'dima.erlikh.art',
    //   details: ''
    // },
    // {
    //   imgLink: 'assets/images/nfts/Michell_Feldman.jpg',
    //   author: 'sestry_feldman',
    //   details: ''
    // },
    // {
    //   imgLink: 'assets/images/nfts/Nickole_Feldman.jpg',
    //   author: 'sestry_feldman',
    //   details: ''
    // },
  ];

}
