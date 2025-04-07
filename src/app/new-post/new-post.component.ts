import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { IPost, ICategory } from '../models/post.model';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class NewPostComponent {
  postForm: FormGroup;
  categories: ICategory[] = [];

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    public router: Router
  ) {
    this.categories = this.blogService.getAllCategories();

    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      text: ['', [Validators.required, Validators.minLength(20)]],
      author: ['', Validators.required],
      image: ['', [Validators.required, this.urlValidator]],
      category: [null, Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  urlValidator(control: any) {
    const pattern = /^(http|https):\/\/[^ "]+$/;
    return pattern.test(control.value) ? null : { invalidUrl: true };
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPost: IPost = {
        id: this.generateId(),
        ...this.postForm.value,
        category: this.categories.find(c => c.id === this.postForm.value.category)!
      };
      
      this.blogService.insert(newPost);
      this.router.navigate(['/home']);
    }
  }

  private generateId(): number {
    const posts = this.blogService.getAll();
    const maxId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) : 0;
    return maxId + 1;
  }
}