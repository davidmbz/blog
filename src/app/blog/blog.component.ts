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
  }

  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.publicaciones = await this.informacionService.getAllPost();
    } else {
      this.publicaciones = await this.informacionService.getPostByCategoria($event.target.value);
      console.log($event.target.value);

    }
  }

}
