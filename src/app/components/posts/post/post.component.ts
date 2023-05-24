import {Component, Input} from '@angular/core';
import {IPost} from "../../../interfaces";
import {PostService} from "../../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()

  post: IPost;

  constructor() {
  }

  ngOnInit(): void {
  }
}
