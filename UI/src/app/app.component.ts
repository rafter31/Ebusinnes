import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Category} from './categories/category';
import {CategoriesService} from './categories/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriesService]
})
export class AppComponent implements OnInit {
  title = 'Shop Project';
  categories: Category[];
  UserNameCookie:any;
  LogInText :any = "Logowanie";

  constructor(private categoriesService: CategoriesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategories();
  // Cookie.set('UserNameCookie', 'Użytkownik');
  debugger;
  this.UserNameCookie = Cookie.get('UserNameCookie');
  
  if (this.UserNameCookie == "" || this.UserNameCookie == "Użytkownik"){
     this.UserNameCookie = "Użytkownik";
  }
  else{
      this.UserNameCookie = Cookie.get('UserNameCookie');
      this.LogInText = "Wyloguj";
  }
  }

  getCategories(): void {
    this.categoriesService.getCategories().then(categories => {
      this.categories = categories;
    });
  }

  LogAction(action){
    debugger;
    if (action == "Wyloguj"){
        Cookie.set('UserNameCookie', 'Użytkownik');
        this.LogInText = "Logowanie";
        window.location.href = "/"
    }
    if (action == "Logowanie"){
        window.location.href = "/sign-up"
         this.LogInText = "Wyloguj";
    }

    
  }
}
