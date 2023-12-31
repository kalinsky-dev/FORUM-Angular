import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './interfaces/theme';
import { Post } from './interfaces/post';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  posts: any = [];

  get postCollection(): string {
    return this.posts || [];
  }

  // THEMES
  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>('/api/themes', { themeName, postText });
  }

  // POSTS
  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http
      .get<Post[]>(`${apiUrl}/posts${limitFilter}`)
      .pipe(tap((posts) => (this.posts = posts)));
  }
}
