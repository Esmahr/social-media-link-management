import { CanActivate, Router } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    // Tarayıcı ortamı olup olmadığını kontrol edin
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userId')) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
    
    // Eğer sunucu ortamıysa, false döndürebilirsiniz ya da uygun bir default davranış tanımlayabilirsiniz.
    return false;
  }
}
