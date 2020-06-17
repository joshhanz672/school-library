import { PostService } from './../services/post.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];

  constructor(http: Http)
  {
   
   http.get('http://localhost:8080/books').subscribe(response => {
     console.log(response.json());
   });
   

   /*
   http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response => {
     //console.log(response.json());
     this.posts = response.json();
   }); */

  } 

}


/*
export class PostsComponent implements OnInit {
  posts: any[];
  //private url = 'http://jsonplaceholder.typicode.com/post';

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement)
  {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    })
  }

  updatePost(post)
  {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    })
  }

  deletePost(post)
  {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      } )
  }

}
*/
