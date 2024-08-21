import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-visited-modal',
  templateUrl: './last-visited-modal.component.html',
  styleUrl: './last-visited-modal.component.scss'
})
export class LastVisitedModalComponent implements OnInit {
  visitHistory: { url: string, timestamp: string }[] = [];
  
  ngOnInit(): void {
    this.visitHistory = JSON.parse(localStorage.getItem('visitHistory') || '[]');
  }
}
