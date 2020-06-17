import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
const routes: Routes = [
  { //path: 'http://localhost:8080/books' //This one shows up with an
  //error such as
  /*
    main.ts:12 Error: Invalid configuration of route 'http://localhost:8080/'. One of the following must be provided: component, redirectTo, children or loadChildren
    at validateNode (router.js:1292)
    at validateConfig (router.js:1247)
    at Router.resetConfig (router.js:7462)
    at new Router (router.js:6921)
    at Object.setupRouter [as useFactory] (router.js:10103)
    at Object.factory (core.js:17363)
    at R3Injector.hydrate (core.js:17193)
    at R3Injector.get (core.js:16943)
    at injectInjectorOnly (core.js:940)
    at Module.ɵɵinject (core.js:950)

  */
  path: 'http://localhost:8080/'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    BookRoutingModule
  ],
  exports: [RouterModule]
})
export class BookModule { }
