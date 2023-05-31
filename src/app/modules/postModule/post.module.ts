import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostPageComponent} from './pages/post-page/post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';


@NgModule({
  declarations: [
    PostPageComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostDetailsPageComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {
  constructor() {
    console.log('PostModule');
  }
}
