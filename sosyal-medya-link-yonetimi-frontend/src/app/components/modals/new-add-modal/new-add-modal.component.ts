import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NewSocialMedia } from '../../../models/new-add-social-media-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-add-modal',
  templateUrl: './new-add-modal.component.html',
  styleUrls: ['./new-add-modal.component.scss']
})
export class NewAddModalComponent {
  socialMedia: NewSocialMedia = { name: '', link: '', description: '', userId: '' };

  @Output() socialMediaAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  saveSocialMedia(form: NgForm): void {
    if (form.valid) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        this.socialMedia.userId = userId;
        this.authService.addSocialMedia(this.socialMedia).subscribe(response => {
          this.resetForm();
          this.socialMediaAdded.emit();
        }, error => {
          console.error('Error adding social media', error);
        });
      } else {
        console.error('User ID not found in localStorage');
      }
    } else {
      console.error('Form is invalid');
    }
  }

  resetForm(): void {
    this.socialMedia = { name: '', link: '', description: '', userId: '' };
  }
}
