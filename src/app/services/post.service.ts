import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Post } from "../interfaces/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private host = "http://localhost:3000/posts";

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[] | null> {
    return this.http.get<Post[] | null>(`${this.host}/`);
  }

  getOnePost(slug: string): Observable<Post[] | null> {
    return this.http.get<Post[] | null>(`${this.host}/?slug=${slug}`);
  }

  addPost(newPost: Post): Observable<Post | null> {
  
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.http.post<Post | null>(this.host, newPost, httpOptions);
  }
}
