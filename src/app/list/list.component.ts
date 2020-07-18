import { Component, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts$: Post[];

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
    return this.dataService.getPosts()
      .subscribe(data => this.posts$ = data);
  }

  goToPage(pageName:string):void {
    this.router.navigate(['Post']);
  }
}
