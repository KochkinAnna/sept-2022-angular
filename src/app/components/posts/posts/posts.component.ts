import {Component, Input} from '@angular/core';
import {IPost, IUser} from "../../../interfaces";
import {PostService} from "../../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input()
  userId:number;

  posts:IPost[];
  constructor(private postService:PostService) {
  }

  ngOnInit():void{
this.postService.getPostByUserId(this.userId).subscribe(value => this.posts=value)
  }
}
