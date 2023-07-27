import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { BlogPostsComponent } from "./components/blog-posts/blog-posts.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { PostCardComponent } from "./components/post-card/post-card.component";
import { LoginComponent } from "./components/login/login.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogPostsComponent,
    BlogPostComponent,
    PostCardComponent,
    LoginComponent,
    AddPostComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
