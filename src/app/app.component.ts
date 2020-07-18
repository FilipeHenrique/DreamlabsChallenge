import { Component, OnInit } from '@angular/core';
// import { Post } from './posts.model';
// import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router:Router) {}

  ngOnInit() {
    this.router.navigate(['index']);
  }

  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }
}
