import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  publicaciones: Post[];

  constructor(private informacionService: InformacionService) { }

  async ngOnInit() {
    this.publicaciones = await this.informacionService.getAllPost();
    // console.log(this.informacionService.getAllPost());
  }

  async onClick($event) {
    if ($event.target.value === 'INICIO') {
      this.publicaciones = await this.informacionService.getAllPost();
    } else if ($event.target.value === 'CINE') {
      this.publicaciones = await this.informacionService.getPostByCategoria($event.target.value);
      // console.log($event.target.value);
    } else if ($event.target.value === 'LIBROS') {
      this.publicaciones = await this.informacionService.getPostByCategoria($event.target.value);
    } else if ($event.target.value === 'SERIES') {
      this.publicaciones = await this.informacionService.getPostByCategoria($event.target.value);
    }
  }

}