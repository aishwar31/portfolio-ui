import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = { name: '', email: '', message: '' };
  successMessage = '';

  constructor(private apiService: ApiService) { }

  onSubmit(): void {
    this.apiService.sendContactForm(this.contact).subscribe((response) => {
      this.successMessage = response.message;
      this.contact = { name: '', email: '', message: '' }; // Reset form
    });
  }

}
