import {Component, Input} from '@angular/core';
import {IPost} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  @Input()
  post: IPost;

  getDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }
}
