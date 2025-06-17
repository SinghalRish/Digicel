import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginheader',
  imports: [],
  templateUrl: './loginheader.component.html',
  styleUrl: './loginheader.component.css',
})
export class LoginheaderComponent {
  constructor(private router: Router) {}
  fullName: string = 'Kenny Sebastian'; // can be dynamic
  initials: string = '';

  ngOnInit() {
    this.initials = this.getInitials(this.fullName);
  }

  getInitials(name: string): string {
    const nameParts = name.trim().split(' ').filter(Boolean);

    if (nameParts.length === 1) {
      return nameParts[0][0].toUpperCase();
    }

    const firstInitial = nameParts[0][0].toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
    return firstInitial + lastInitial;
  }
  navigate() {
    this.router.navigate(['/home']);
  }
}
