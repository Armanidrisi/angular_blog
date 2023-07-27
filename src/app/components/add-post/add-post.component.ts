import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Post } from "../../interfaces/post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ["", Validators.required],
      subtitle: ["", Validators.required],
      image: ["", [Validators.required, Validators.pattern("https?://.+")]],
      content: ["", Validators.required],
    });
  }
  generateSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");

  onSubmit() {
    if (this.postForm.valid) {
      const formValue = this.postForm.value;

      const userItem: string | null = localStorage.getItem("user");
      const author: string = userItem ? JSON.parse(userItem).name : "";

      const slug: string = this.generateSlug(formValue.title);

      const newPost: Post = {
        title: formValue.title,
        subtitle: formValue.subtitle,
        image: formValue.image,
        content: formValue.content,
        author: author,
        slug: slug,
        date: new Date(),
      };
      this.postService.addPost(newPost).subscribe(
        (response) => {
          alert("Post successfully created.");
          this.postForm.reset();
        },
        (error) => {
          console.error(error);
        }
      );
      //console.log(newPost);
    } else {
      alert("Form is invalid. Please check the fields.");
    }
  }
}
