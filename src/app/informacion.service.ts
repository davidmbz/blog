import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { POST } from './db/post.db';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor() { }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(POST);
    });
  }

  agregarPost(Post): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      POST.push(Post);
      resolve('Agregado correctamente');
    });
  }

  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(POST.filter(publicacion => {
        return publicacion.categoria === pCategoria;
      }));
    });
  }

}