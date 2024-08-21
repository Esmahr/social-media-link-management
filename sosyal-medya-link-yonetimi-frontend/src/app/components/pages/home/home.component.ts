import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedRow: any;
  searchValue: string = '';
  userSocialMediaData: any[] = [];
  showEmptyMessage: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadSocialMediaData();
  }

  loadSocialMediaData() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.authService.getUserSocialMedia(userId).subscribe(
        (data) => {
          this.userSocialMediaData = data;
          this.checkEmptyMessage();
        },
        (error) => {
          console.error('Failed to fetch social media data', error);
        }
      );
    }
  }

  onSearch(event: Event, table: Table) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
    this.searchValue = input.value;
    this.checkEmptyMessage();
  }

  openModal(socialmedia: any) {
    this.selectedRow = socialmedia;
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
    this.checkEmptyMessage();
  }

  checkEmptyMessage() {
    this.showEmptyMessage = this.searchValue.trim().length > 0;
  }
}
