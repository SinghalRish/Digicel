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
   navigate(){
    this.router.navigate(['/home'])
   }
}
