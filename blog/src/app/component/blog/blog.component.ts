import { Component, OnInit } from '@angular/core';
import { PostService} from '../../services/post.service';
import { Post } from './post';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[PostService]
})
export class BlogComponent implements OnInit {
  posts : Post[] = [];
  constructor(private _postService : PostService) { }

  ngOnInit() {

    this._postService.getPost().subscribe(res => {
    this.posts = res
    },err => {
      console.log(err);
    });
  }

}
