import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from '../app/post/post.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: 'Post', component: PostComponent},
  {path: 'index', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
