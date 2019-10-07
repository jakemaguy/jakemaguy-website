import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';
import { BlogPageDetailComponent } from './blog-page-detail/blog-page-detail.component';

const blogRoutes: Routes = [
    { path: 'blog-page', component: BlogPageComponent },
    { path: 'blog-page/:title', component: BlogPageDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(blogRoutes)],
    exports: [RouterModule]
})
export class BlogPostRoutingModule { }
