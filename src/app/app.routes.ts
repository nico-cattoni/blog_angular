import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewPostComponent },
  { path: 'post/:id', component: ViewPostComponent },
  { path: '**', redirectTo: '/home' }
];