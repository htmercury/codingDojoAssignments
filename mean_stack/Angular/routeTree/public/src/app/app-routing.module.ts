import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AuthorComponent } from './author/author.component';
import { BrandComponent } from './brand/brand.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent, children: [
      { path: 'details/:id', component: DetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent }]
  },
  {
    path: 'reviews', component: ReviewComponent, children: [
      { path: 'details/:id', component: DetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
