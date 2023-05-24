import {Component, Input} from '@angular/core';
import {IUser} from "../../../interfaces";
import {UserService} from "../../../services";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input()
  user: IUser

  userId: number;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!state) {
        this.userService.getById(id).subscribe(value => this.user = value)
      } else {
        this.user = state
      }

    })
  }

  getPosts(): void {
    this.userId = this.user.id;
  }
}
