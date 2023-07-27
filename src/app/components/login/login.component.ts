import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (user) => {
          if (user?.length > 0) {
            localStorage.setItem("user", JSON.stringify(user[0]));
          } else {
            alert("Invalid Email Or Password ");
          }
          console.log(user);
        },
        (error) => {
          console.error("Error fetching api:", error);
        }
      );
      console.log(this.loginForm.value);
    } else {
      alert("Please fill all valid details");
    }
  }
}
