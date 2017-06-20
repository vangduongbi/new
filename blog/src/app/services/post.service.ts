import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from './../component/blog/post'
@Injectable()
export class PostService {

  constructor(private _http: Http) { }
 headers = new Headers({ 'Content-Type': 'application/json' });
  getPost(): Observable<Post[]> {
    
    let url = "http://localhost:3000/api/posts";
    return this._http.get(url, { headers: this.headers }).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    }
    );
  }
}
