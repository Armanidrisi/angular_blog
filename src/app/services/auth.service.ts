import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }): Observable<any> {
    //return console.log(user);
    return this.http.get<any>(
      `http://localhost:3000/users?email=${user?.email}&password=${user?.password}`);}
}
