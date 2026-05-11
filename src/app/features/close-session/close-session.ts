import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '../../core/services/storage';

@Component({
  selector: 'app-close-session',
  imports: [],
  templateUrl: './close-session.html',
  styleUrl: './close-session.scss',
})
export class CloseSession {

  private router: Router = inject(Router);
  private storageService: Storage = inject(Storage);

  cancel() {
    this.router.navigate(['/app/home']);
  }

  confirm() {
    this.storageService.clearStorage();
    this.router.navigate(['/login']);
  }

}
