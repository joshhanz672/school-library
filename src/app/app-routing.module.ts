import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { Route } from '@angular/compiler/src/core';
//import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: 'book-component', component: BookComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
