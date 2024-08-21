import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.saveLastVisitedPage(event.urlAfterRedirects);
      }
    });
  }

  saveLastVisitedPage(url: string) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const maxHistoryLength = 10;
      let history;

      try {
        history = JSON.parse(localStorage.getItem('visitHistory') || '[]');
      } catch (e) {
        console.error('Error parsing visitHistory from localStorage:', e);
        history = []; // Hata durumunda boş dizi olarak ayarla
      }

      // Eski string URL'leri obje formatına dönüştür
      history = history.map((item: any) => {
        if (typeof item === 'string') {
          return { url: item, timestamp: new Date().toISOString() };
        } else if (typeof item === 'object' && item.url) {
          return item;
        }
        return null;
      }).filter((item: null) => item !== null);

      // Aynı URL'yi taşıyan objeleri filtrele
      history = history.filter((item: any) => item.url !== url);

      // Yeni objeyi başa ekle
      history.unshift({ url: url, timestamp: new Date().toISOString() });

      // Tarihçe uzunluğu sınırını kontrol et ve gerekirse son elemanları çıkar
      if (history.length > maxHistoryLength) {
        history = history.slice(0, maxHistoryLength);
      }

      localStorage.setItem('visitHistory', JSON.stringify(history));

    }
  }
}