import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../models/post.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css'],
  
  imports: [FormsModule]
})
export class CategorySelectorComponent {
  @Input() categories: ICategory[] = [];
  @Output() categorySelected = new EventEmitter<number | null>();

  selectedCategory: number | null = null;

  onCategoryChange(): void {
    this.categorySelected.emit(this.selectedCategory);
  }

  resetFilter(): void {
    this.selectedCategory = null;
    this.categorySelected.emit(null);
  }
}