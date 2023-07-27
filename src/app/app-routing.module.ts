import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BlogPostsComponent } from "./components/blog-posts/blog-posts.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { LoginComponent } from "./components/login/login.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "blog",
    component: BlogPostsComponent,
  },
  {
    path: "post/:slug",
    component: BlogPostComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "add",
    component: AddPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
