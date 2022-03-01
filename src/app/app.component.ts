import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  $ = (window as any).$;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.$('.main-nav li a').click((event: any) => {
        const val = this.$(event.target).attr('scroll');
        if (val) {
            this.helperService.scrollTo(val);
        }
    });
  }
}
