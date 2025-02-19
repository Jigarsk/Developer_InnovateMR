import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './components/header/header.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
}
