import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ViewPostComponent {
  post: IPost | undefined;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.blogService.getById(id);
    
    if (!this.post) {
      this.router.navigate(['/home']);
    }
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }
}