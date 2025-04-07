import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { IPost, ICategory } from '../models/post.model';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchBarComponent,
    CategorySelectorComponent,
    PostCardComponent
  ],
  template: `
    <div class="container mt-4">
      <h1>Blog de Viajes</h1>
      <div class="row mb-4">
        <div class="col-md-6">
          <app-search-bar (search)="onSearch($event)"></app-search-bar>
        </div>
        <div class="col-md-6">
          <app-category-selector 
            [categories]="getAllCategories()"
            (categorySelected)="onCategorySelected($event)">
          </app-category-selector>
        </div>
      </div>

      <div class="row">
        @for (post of filteredPosts; track post.id) {
          <div class="col-md-4 mb-4">
            <app-post-card [post]="post"></app-post-card>
          </div>
        } @empty {
          <div class="col-12">
            <div class="alert alert-info">No hay posts disponibles</div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .alert { margin-top: 20px; }
  `]
})
export class HomeComponent {
  posts: IPost[] = [];
  filteredPosts: IPost[] = [];
  selectedCategoryId: number | null = null;

  constructor(private blogService: BlogService) {
    this.initializeData();
  }

  private initializeData(): void {
    
    if (this.blogService.getAll().length === 0) {
      const categories: ICategory[] = [
        { id: 1, title: 'Playa' },
        { id: 2, title: 'Montaña' }
      ];

      const samplePosts: IPost[] = [
        {
          id: 1,
          title: 'Vacaciones en la playa',
          text: 'Disfrutando del sol y el mar...',
          author: 'Usuario',
          image: 'https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg',
          date: new Date(),
          category: categories[0]
        },
        {
          id: 2,
          title: 'Aventura en la montaña',
          text: 'Escalando picos impresionantes...',
          author: 'Aventurero',
          image: 'https://picsum.photos/800/400?random=2',
          date: new Date(),
          category: categories[1]
        }
      ];

      samplePosts.forEach(post => this.blogService.insert(post));
    }

    this.posts = this.blogService.getAll();
    this.filteredPosts = [...this.posts];
  }

  getAllCategories(): ICategory[] {
    return this.blogService.getAllCategories();
  }

  onSearch(term: string): void {
    const termLower = term.toLowerCase();
    this.filteredPosts = this.posts.filter(post => 
      post.title.toLowerCase().includes(termLower)
    );
  }

  onCategorySelected(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
    this.filteredPosts = categoryId 
      ? this.posts.filter(post => post.category.id === categoryId)
      : [...this.posts];
  }
}