import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Category} from './category';
import {CategoriesService} from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoriesService: CategoriesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().then(categories => {
      this.categories = categories;
    });
  }
}
