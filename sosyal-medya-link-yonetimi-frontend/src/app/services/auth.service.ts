import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RegisterUser } from '../models/register.model';
import { LoginUser } from '../models/login.model';
import { NewSocialMedia } from '../models/new-add-social-media-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  //user register
  register(userData: RegisterUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }
  //user login
  login(user: LoginUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((response: any) => {
        if (response._id) { localStorage.setItem('userId', response._id); }
      })
    );
  }
  //user logout
  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('userId');
    }
  }
  // get user social media data
  getUserSocialMedia(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/socialmedia`);
  }
  // add user social media data
  addSocialMedia(socialMediaData: NewSocialMedia): Observable<any> {
    return this.http.post(`${this.apiUrl}/socialmedia`, socialMediaData);
  }
  // delete user social media data
  deleteSocialMedia(socialMediaId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/socialmedia/${socialMediaId}`);
  }
  // update user social media data
  updateSocialMedia(id: string, socialMediaData: NewSocialMedia): Observable<any> {
    return this.http.put(`${this.apiUrl}/socialmedia/${id}`, socialMediaData);
  }

}
