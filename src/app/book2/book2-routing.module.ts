import { Book2ListComponent } from './book2-list/book2-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'http://localhost:8080/books', component: Book2ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Book2RoutingModule { }
