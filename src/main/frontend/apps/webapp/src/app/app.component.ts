import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('preloader')
  preloader!: ElementRef;

  title = 'Maximilian Wollnik';

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.preloader.nativeElement.style.opacity = '0';
      this.preloader.nativeElement.style.display = 'none';
    }, 1000);
  }
}
