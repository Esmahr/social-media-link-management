import { CanActivate, Router } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userId')) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
    
    return false;
  }
}
