import { Component, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts$: Post[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
      return this.dataService.getPosts()
        .subscribe(data => this.posts$ =data);
  }

}
