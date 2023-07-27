import { Component, Input } from "@angular/core";
import { Post } from "../../interfaces/post";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.css"],
})
export class PostCardComponent {
  @Input() post!: Post;
  constructor() {
    console.log(this.post);
  }
}