import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs';

import { UnSubscriberComponent } from '../shared/classes/unsubscriber';
import { HEADER_TITLES } from '../shared/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends UnSubscriberComponent implements OnInit {
  title!: string;
  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((events) => {
      if (events instanceof NavigationEnd) {
        const url = events.url.split('/')[1];
        this.title = HEADER_TITLES.get(url) as string;
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/']);
  }
}
