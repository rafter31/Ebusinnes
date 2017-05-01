import {Component, OnInit} from '@angular/core';

import {AppSettings} from 'app/app.setings';

import {Category} from '../categories/category';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [CategoriesService]
})
export class HomeComponent implements OnInit {
  imagesBaseURL = AppSettings.IMAGES_ENDPOINT;
  topCategories: Category[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getTopCategories().then(topCategories => {
      this.topCategories = topCategories;
    });
  }
}
