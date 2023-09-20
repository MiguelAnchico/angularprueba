import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css'],
})
export class CssComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateBEM(): void {
    this.router.navigate(['/css/bem']);
  }
}
