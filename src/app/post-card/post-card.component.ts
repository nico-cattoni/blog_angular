import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  
  imports: [CommonModule] 
})
export class PostCardComponent {
  @Input() post!: IPost;

  constructor(private router: Router) {}

  viewPost(): void {
    this.router.navigate(['/post', this.post.id]);
  }
}