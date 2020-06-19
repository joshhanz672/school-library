import { PostService } from './../services/post.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  //private url = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:8080/books/';

  constructor(private http: Http)
  {
   http.get(this.url).subscribe(response => {
     //console.log(response.json());
     this.posts = response.json();
   }); 

  } 

  createPost(input: HTMLInputElement) {
    //let post = { title: input.value };
    //let post = { bookTitle: input.value};
    //let post:any = { bookTitle: input.value, bookAuthor: input.value, 
    //  locRef: input.value, checkedOut: input.value, putOnRequest: input.value};

    let post:any = { bookTitle: input.value };
    
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      console.log(response.json());
  });
  }

  updatePost(post)
  {
    this.http.patch(this.url, JSON.stringify({ bookTitle: "", 
                                                bookAuthor: "", 
                                                locRef: "", 
                                                checkedOut: false, 
                                                putOnRequest: false }))
                                                .subscribe(response => {
                                                  console.log(response.json());
                                                })
    
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
