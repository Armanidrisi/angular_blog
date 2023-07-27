import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Post } from "../../interfaces/post";

@Component({
  selector: "app-blog-posts",
  templateUrl: "./blog-posts.component.html",
  styleUrls: ["./blog-posts.component.css"],
})
export class BlogPostsComponent {
  posts!: Post[] | null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts;
        console.log(posts);
      },
      (error) => {
        console.error("Error fetching posts:", error);
      }
    );
  }
}
