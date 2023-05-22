import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input()
  user:IUser

  userId: number;
  constructor() {
  }

  ngOnInit():void{

}

  getPosts():void {
    this.userId = this.user.id;
  }
}
