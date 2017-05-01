import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  user: any;

  constructor(private userService: UsersService) {
  }


  ngOnInit(): void {
    this.userService.getUser().then(value => {
      this.user = value;
      console.log(this.user);
    });
  }


}
