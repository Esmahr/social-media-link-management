import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit, OnChanges {
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() link: string = "";
  @Input() desc: string = "";

  @Output() socialMediaDeleted: EventEmitter<void> = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
    description: new FormControl('', [Validators.required]),
    userId: new FormControl(localStorage.getItem('userId') || '')
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.updateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] || changes['link'] || changes['desc']) {
      this.updateForm();
    }
  }

  updateForm(): void {
    this.form.patchValue({
      name: this.name ?? '',
      link: this.link?.trim() ?? '',
      description: this.desc ?? '',
    });
  }

  updateSocialMedia() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const updatedData: {
        name: string;
        link: string;
        description: string;
        userId: string;
      } = {
        name: formValue.name || this.name,
        link: formValue.link || this.link,
        description: formValue.description || this.desc,
        userId: formValue.userId || '' 
      };

      this.authService.updateSocialMedia(this.id, updatedData).subscribe(data => {
        this.socialMediaDeleted.emit();
      });
    } else {
      console.error('Form is invalid');
    }
  }

  deleteSocialMedia(): void {
    if (this.id) {
      this.authService.deleteSocialMedia(this.id).subscribe(
        (data) => {
          this.socialMediaDeleted.emit();
        }
      );
    }
  }
}
