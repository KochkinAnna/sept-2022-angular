import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../../interfaces";
import {UserService} from "../../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser

  @Output()
  selectedUser = new EventEmitter<IUser>();


  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  setSelectedUser():void {
    this.selectedUser.emit(this.user);
  }

  getDetails():void {
    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute, state:this.user})
  }
}

