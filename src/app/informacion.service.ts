import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  post: Post[];

  constructor() { }
}

// agregarPost() {
//   return this.post.push(Post);
// }

// getAllPost() {
//   return this.post[];
// }

// getPostByCategoria() {

// }