import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../services/post.service";
import { Post } from "../../interfaces/post";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.css"],
})
export class BlogPostComponent implements OnInit {
  post!: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.fetchPost();
  }
  fetchPost() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug !== null) {
      this.postService.getOnePost(slug).subscribe(
        (p) => {
          this.post = p?.[0];
          console.log(this.post);
        },
        (error) => {
          console.error("Error fetching posts:", error);
        }
      );
    }
  }
}
